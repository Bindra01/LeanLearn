import React from 'react';
import { MCQQuestion } from '../../types/quizInterface';

interface MCQQuestionProps {
  question: MCQQuestion;
  onAnswer: (answer: string) => void;
  showFeedback: boolean;
  selectedAnswer: string | null;
  isCorrect: boolean | null;
}

const MCQQuestionComponent: React.FC<MCQQuestionProps> = ({
  question,
  onAnswer,
  showFeedback,
  selectedAnswer,
  isCorrect
}) => {
  return (
    <div className="space-y-6">
      <div className="text-white text-xl">
        {question.question}
      </div>

      <div className="grid grid-cols-2 gap-4">
        console.log(question.options);
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option)}
            disabled={showFeedback}
            className={`p-4 rounded-lg border transition-all ${
              selectedAnswer === option
                ? isCorrect
                  ? 'bg-green-600 border-green-400'
                  : 'bg-red-600 border-red-400'
                : 'bg-[#101113] border-[#3A3B3D] hover:bg-[#1A1A1A]'
            }`}
          >
            <span className="text-white">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MCQQuestionComponent;