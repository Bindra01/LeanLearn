import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import logo from "../../assets/images/Logo.png";
import einstein from "../../assets/Einstein.gif";
import newton from "../../assets/Newton.gif";
import galileo from "../../assets/Galileo.gif";
import raman from "../../assets/CV Raman.gif";
import correctSound from "../../assets/sound/ans_sound.aac";
import incorrectSound from "../../assets/sound/WhatsApp Audio 2024-12-30 at 6.54.33 PM.aac";
import summarySound from "../../assets/sound/quiz-done.aac";
import {
  MCQQuestion,
  FillQuestion,
  TFQuestion,
  FormulaQuestion,
} from "../../types/quiz";
import {
  mcqQuestionApi,
  fillQuestionApi,
  tfQuestionApi,
  formulaQuestionApi,
  aiApi,
} from "../../lib/api/questions";

const companionImages = {
  1: einstein,
  2: newton,
  3: galileo,
  4: raman,
};

type QuestionType = MCQQuestion | FillQuestion | TFQuestion | FormulaQuestion;

const SelectedTopicPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedCompanion, selectedClass } = location.state || {};

  const [questions, setQuestions] = useState<QuestionType[]>([]);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [loadingCompanionMessage, setLoadingCompanionMessage] = useState(false);
  const [companionMessage, setCompanionMessage] = useState<string>("");
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0); // Initialize correct answers count
  const [incorrectAnswersCount, setIncorrectAnswersCount] = useState(0); // Initialize incorrect answers count
  const [attemptedQuestionsCount, setAttemptedQuestionsCount] = useState(0); // Initialize attempted questions count
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    const storedIndex = localStorage.getItem("currentQuestionIndex");
    return storedIndex ? parseInt(storedIndex, 10) : 0;
  });

  const correctAudio = new Audio(correctSound);
  const incorrectAudio = new Audio(incorrectSound);
  const summaryAudio = new Audio(summarySound);
  const borderColor = isCorrect ? "border-green-500" : "border-red-500";

  const isValidOption = (option: string): boolean => {
    return option !== "d" && option.trim().length > 0;
  };

  const validateQuestion = (question: QuestionType): boolean => {
    if (isMCQQuestion(question)) {
      return (
        question.options.some(isValidOption) &&
        question.answers.every(isValidOption)
      );
    }
    if (isFillQuestion(question)) {
      return (
        question.choices.some(isValidOption) &&
        question.answers.every(isValidOption)
      );
    }
    if (isTFQuestion(question)) {
      return question.answer === "True" || question.answer === "False";
    }
    return false;
  };

  const isMCQQuestion = (question: QuestionType): question is MCQQuestion => {
    return "options" in question;
  };

  const isFillQuestion = (question: QuestionType): question is FillQuestion => {
    return "choices" in question;
  };

  const isTFQuestion = (question: QuestionType): question is TFQuestion => {
    return (
      !("options" in question) &&
      !("choices" in question) &&
      "answer" in question
    );
  };

  useEffect(() => {
    if (!selectedClass) {
      navigate("/");
      return;
    }

    const fetchQuestions = async () => {
      try {
        setLoading(true);
        console.log("Fetching questions for:", {
          class: selectedClass,
          topic: topicId,
        });

        const [mcqData, fillData, tfData, formulaData] = await Promise.all([
          mcqQuestionApi.getAll(),
          fillQuestionApi.getAll(),
          tfQuestionApi.getAll(),
          formulaQuestionApi.getAll(),
        ]);

        console.log("Raw data from APIs:", {
          mcq: mcqData?.length,
          fill: fillData?.length,
          tf: tfData?.length,
          formula: formulaData?.length,
        });

        const combinedQuestions = [
          ...mcqData,
          ...fillData,
          ...tfData,
          ...formulaData,
        ].filter((q) => {
          if (!q || !q.class_ || !q.topic) return false;

          const classMatch =
            String(q.class_).trim() === String(selectedClass).trim();
          const topicMatch =
            String(q.topic).toLowerCase().trim() === "gravitation";

          console.log("Question filtering:", {
            id: q.id,
            qClass: q.class_,
            selectedClass,
            classMatch,
            qTopic: q.topic,
            topicMatch,
          });

          return classMatch && topicMatch;
        });

        console.log("Filtered questions:", combinedQuestions);

        if (combinedQuestions.length > 0) {
          const shuffledQuestions = combinedQuestions.sort(
            () => Math.random() - 0.5
          );
          setQuestions(shuffledQuestions);
        } else {
          setError(
            `No questions available for Class ${selectedClass} topic ${topicId}`
          );
        }
      } catch (err) {
        console.error("Error in fetchQuestions:", err);
        setError("Failed to load questions");
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [topicId, selectedClass, navigate]);

  useEffect(() => {
    localStorage.setItem(
      "currentQuestionIndex",
      currentQuestionIndex.toString()
    );
  }, [currentQuestionIndex]);

  useEffect(() => {
    setCompanionMessage("");
  }, [currentQuestionIndex]);

  const handleOptionSelect = (answer: string) => {
    setSelectedAnswers((prev) => {
      const currentQuestion = questions[currentQuestionIndex];
      if (isTFQuestion(currentQuestion)) {
        return [answer];
      }
      if (prev.includes(answer)) {
        return prev.filter((a) => a !== answer);
      } else if (prev.length < 2) {
        return [...prev, answer];
      }
      return prev;
    });
  };

  const formatExplanation = (
    explanation: string,
    isCorrect: boolean,
    correctAnswer: string
  ): string => {
    let cleanText = explanation.replace(/\n/g, " ").replace(/\s+/g, " ").trim();
    cleanText = cleanText.replace(/\d+\.\s*/g, "");
    cleanText = cleanText
      .replace("Correct Answer:", "")
      .replace("Evaluation:", "")
      .replace("Explanation:", "")
      .replace("Analysis:", "")
      .replace("Summary:", "");

    const points = cleanText
      .split(".")
      .map((point) => point.trim())
      .filter((point) => point.length > 0);

    if (isCorrect) {
      return `✓ ${points.join(".\n\n")}`;
    } else {
      return `✗ The correct answer is ${correctAnswer}.\n\n${points.join(
        ".\n\n"
      )}`;
    }
  };

  const handleAnswerSubmit = async () => {
    if (selectedAnswers.length === 0) return;

    const currentQuestion = questions[currentQuestionIndex];
    let correct = false;

    if (isMCQQuestion(currentQuestion) || isFillQuestion(currentQuestion)) {
      const correctAnswers = currentQuestion.answers;
      correct =
        selectedAnswers.length === correctAnswers.length &&
        selectedAnswers.every((answer) => correctAnswers.includes(answer)) &&
        correctAnswers.every((answer) => selectedAnswers.includes(answer));
    } else if (isTFQuestion(currentQuestion)) {
      correct = selectedAnswers[0] === currentQuestion.answer;
    }

    if (correct) {
      correctAudio.play();
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    } else {
      incorrectAudio.play();
      setIncorrectAnswersCount((prevCount) => prevCount + 1);
    }

    setIsCorrect(correct);
    setShowFeedback(true);
    setLoadingCompanionMessage(true);
    setAttemptedQuestionsCount((prevCount) => prevCount + 1);


    try {
      const requestData = {
        question: currentQuestion.question,
        topic: currentQuestion.topic,
        subject: currentQuestion.subject,
        answer: isTFQuestion(currentQuestion)
          ? currentQuestion.answer
          : currentQuestion.answers.join(", "),
        chosen_answer: selectedAnswers.join(", "),
      };

      const explanation = await aiApi.explainAnswer(requestData);
      setCompanionMessage(
        formatExplanation(
          explanation,
          correct,
          isTFQuestion(currentQuestion)
            ? currentQuestion.answer
            : currentQuestion.answers.join(", ")
        )
      );
    } catch (error) {
      console.error("Failed to get AI explanation:", error);
      setCompanionMessage(
        correct
          ? "Well done! You got it right."
          : `Not quite right. The correct answer was: ${
              isTFQuestion(currentQuestion)
                ? currentQuestion.answer
                : currentQuestion.answers.join(", ")
            }`
      );
    } finally {
      setLoadingCompanionMessage(false);
    }

    try {
      if (isMCQQuestion(currentQuestion)) {
        await mcqQuestionApi.update(currentQuestion.id, {
          ...currentQuestion,
          used: true,
        });
      } else if (isFillQuestion(currentQuestion)) {
        await fillQuestionApi.update(currentQuestion.id, {
          ...currentQuestion,
          used: true,
        });
      } else if (isTFQuestion(currentQuestion)) {
        await tfQuestionApi.update(currentQuestion.id, {
          ...currentQuestion,
          used: true,
        });
      }
    } catch (error) {
      console.error("Failed to update question status:", error);
    }
  };

  const handleSkip = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswers([]);
      setShowFeedback(false);
      setCompanionMessage("");
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedAnswers([]);
      setShowFeedback(false);
    } else {
      summaryAudio.play();
      const totalQuestions = questions.length;
      
      navigate("/summary", {
        state: {
          topicId,
          selectedCompanion,
          totalQuestions,
          correctAnswersCount,
          attemptedQuestionsCount,
          incorrectAnswersCount,
        },
      });
    }
  };

  const renderQuestionOptions = () => {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return null;

    const renderButton = (choice: string, isCorrect: boolean) => (
      <button
        key={choice}
        onClick={() => handleOptionSelect(choice)}
        className={`
          p-3 lg:p-6 rounded-lg border-2 transition-all
          ${
            selectedAnswers.includes(choice)
              ? showFeedback
                ? isCorrect
                  ? "border-green-400 bg-green-600/20"
                  : "border-red-400 bg-red-600/20"
                : "border-[#00A3FF] bg-[#00A3FF]/20"
              : "border-[#3A3B3D] bg-[#101113] hover:bg-[#1A1A1A]"
          }
        `}
      >
        <span className="text-white text-sm lg:text-lg">{choice}</span>
      </button>
    );

    if (isMCQQuestion(currentQuestion)) {
      const validOptions = currentQuestion.options.filter(isValidOption);
      return (
        <div className="grid grid-cols-2 gap-6">
          {validOptions.map((option) =>
            renderButton(option, currentQuestion.answers.includes(option))
          )}
        </div>
      );
    }

    if (isFillQuestion(currentQuestion)) {
      const validChoices = currentQuestion.choices.filter(isValidOption);
      return (
        <div className="grid grid-cols-2 gap-6">
          {validChoices.map((choice) =>
            renderButton(choice, currentQuestion.answers.includes(choice))
          )}
        </div>
      );
    }

    if (isTFQuestion(currentQuestion)) {
      return (
        <div className="grid grid-cols-2 gap-6">
          {["True", "False"].map((choice) =>
            renderButton(choice, currentQuestion.answer === choice)
          )}
        </div>
      );
    }

    return null;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-2">
            <div
              className="w-4 h-4 bg-[#00A3FF] rounded-full animate-bounce"
              style={{ animationDelay: "0s" }}
            />
            <div
              className="w-4 h-4 bg-[#00A3FF] rounded-full animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="w-4 h-4 bg-[#00A3FF] rounded-full animate-bounce"
              style={{ animationDelay: "0.4s" }}
            />
          </div>
          <span className="text-[#00A3FF] text-xl font-medium">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="text-white text-center">
          <p className="mb-4">{error}</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-[#21B6F8] rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Back to Topics
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center">
        <div className="text-white text-center">
          <p className="mb-4">No questions available for this topic</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-[#21B6F8] rounded-lg hover:bg-opacity-90 transition-colors"
          >
            Back to Topics
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black">
      <div className="lg:w-[280px] w-full bg-[#101010] p-5 flex flex-col min-h-0 md:h-screen overflow-hidden">
        <div className="flex items-center justify-start lg:justify-center gap-2 mb-4 md:mt-8">
          <button onClick={() => navigate("/")} className="flex items-start">
            <img src={logo} alt="LeanLearn Logo" className="w-[120px]" />
          </button>
        </div>

        {loadingCompanionMessage && (
          <p className="text-gray-300 leading-relaxed text-sm tracking-wide loading text-center mt-11">
            Loading Solution...
          </p>
        )}

        <div
          className={`flex ${
            companionMessage && "flex-row-reverse"
          } lg:flex-col min-h-0 md:flex-grow overflow-hidden md:justify-between`}
        >
          {companionMessage ? (
            <>
              <div
                className={`bg-[#141414] border-2 ${borderColor} rounded-lg p-2 lg:p-6 mb-4 overflow-y-auto max-h-[20vh] lg:max-h-[50vh] custom-scrollbar`}
                style={
                  {
                    "--scrollbar-width": "1px",
                    "--scrollbar-thumb-color": "rgba(255, 255, 255, 0.2)",
                    "--scrollbar-track-color": "rgba(0, 0, 0, 0.2)",
                  } as React.CSSProperties
                }
              >
                <div className="space-y-4">
                  {companionMessage.split(".").map((sentence, index) => {
                    const trimmedSentence = sentence.trim();
                    if (trimmedSentence) {
                      return (
                        <p
                          key={index}
                          className="text-gray-300 leading-relaxed text-sm tracking-wide"
                        >
                          {trimmedSentence}.
                        </p>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>

              {selectedCompanion && (
                <div className="mt-4 md:mt-0 flex-shrink-0 flex items-end lg:justify-center">
                  <img
                    src={
                      companionImages[
                        selectedCompanion as keyof typeof companionImages
                      ]
                    }
                    alt="Selected Companion"
                    className="md:w-full h-[180px] lg:h-auto object-contain md:max-h-[300px]"
                  />
                </div>
              )}
            </>
          ) : (
            selectedCompanion && (
              <div className="flex-shrink-0 flex lg:justify-center md:mt-auto">
                <img
                  src={
                    companionImages[
                      selectedCompanion as keyof typeof companionImages
                    ]
                  }
                  alt="Selected Companion"
                  className="md:w-full h-[180px] object-contain lg:h-auto md:max-h-[300px]"
                />
              </div>
            )
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="h-auto lg:h-screen flex items-start lg:items-center p-3 lg:p-8">
          <div className="max-w-4xl mx-auto w-full">
            <div className="mb-8">
              <div className="text-white text-xl">
                {currentQuestion.question}
              </div>
            </div>

            <div className="mb-8">{renderQuestionOptions()}</div>

            <div className="flex justify-between items-center">
              <div>
                {showFeedback && (
                  <div className="flex items-center gap-2">
                    <span
                      className={isCorrect ? "text-green-500" : "text-red-500"}
                    >
                      {isCorrect ? (
                        <FaCheckCircle size={36} />
                      ) : (
                        <FaTimesCircle size={36} />
                      )}
                    </span>
                    <span
                      className={isCorrect ? "text-green-500" : "text-red-500"}
                    >
                      {isCorrect
                        ? "Correct!"
                        : `Incorrect. The correct answer was: ${
                            isTFQuestion(currentQuestion)
                              ? currentQuestion.answer
                              : currentQuestion.answers.join(", ")
                          }`}
                    </span>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                {!showFeedback && (
                  <button
                    onClick={handleSkip}
                    className="px-6 py-2 rounded-lg bg-[#101113] text-white hover:bg-[#1A1A1A] transition-colors"
                  >
                    Skip
                  </button>
                )}
                {!showFeedback ? (
                  <button
                    onClick={handleAnswerSubmit}
                    disabled={selectedAnswers.length === 0}
                    className="px-6 py-2 rounded-lg bg-[#00A3FF] text-white hover:bg-[#0086CC] transition-colors disabled:opacity-50"
                  >
                    Submit
                  </button>
                ) : (
                  <button
                    disabled={loadingCompanionMessage}
                    onClick={handleNext}
                    className="px-6 py-2 rounded-lg bg-[#00A3FF] text-white hover:bg-[#0086CC] transition-colors"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedTopicPage;
