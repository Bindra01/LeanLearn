import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import logo from "../../assets/images/Logo.png"
import einstein from '../../assets/images/einstein.png';
import newton from '../../assets/images/Newton.png';
import galileo from '../../assets/images/gae.png';
import raman from '../../assets/images/Raman.png';
const companionImages = {
    1: einstein,
    2: newton,
    3: galileo,
    4: raman
  };

const SelectedTopicPage: React.FC = () => {
  const { topicId } = useParams<{ topicId: string }>();
  const location = useLocation();
  const { selectedCompanion } = location.state || {};

  const topics = [
    { id: 1, name: 'Topic 1', description: 'Description for Topic 1' },
    { id: 2, name: 'Topic 2', description: 'Description for Topic 2' },
    { id: 3, name: 'Topic 3', description: 'Description for Topic 3' },
    { id: 4, name: 'Topic 4', description: 'Description for Topic 4' },
    { id: 5, name: 'Topic 5', description: 'Description for Topic 5' }
  ];

  const topic = topics.find(t => t.id === Number(topicId));

  if (!topic) {
    return <div>Topic not found</div>;
  }

  return (
    <div className='flex min-h-screen' >
    <div className="w-[280px] bg-[#101010] p-5 flex flex-col">
    <img
      src={logo}
      alt="LeanLearn Logo"
      className="w-[120px] mx-auto cursor-pointer mb-6"
    />
    

    {selectedCompanion && (
        <div className="flex-1 flex items-end relative ">
          
          <img
            src={companionImages[selectedCompanion as keyof typeof companionImages]}
            alt="Selected Companion"
            className="w-full object-contain max-h-[300px] mt-2"
          />
        </div>
      )}

  
  </div>
  <div className="flex-1 p-8 bg-black">
    <div className=" text-white ">
      <h1 className="text-3xl mb-4">{topic.name}</h1>
      <p>{topic.description}</p>
    </div>
    </div>
    </div>
  );
};

export default SelectedTopicPage;