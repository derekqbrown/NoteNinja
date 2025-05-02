import React, { useState } from 'react';
import clsx from 'clsx';

function FlashCard({ question, answers }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  console.log(answers);
  const correctAnswer = answers.find(answer => answer.isCorrect);

  return (
    <div
      onClick={handleClick}
      className={clsx(
        'relative h-[125px] w-[250px] m-2 cursor-pointer rounded-lg border-gray-100 bg-transparent shadow-md transition-transform  border-2 hover:border-orange-400',
        {
          '[&_.card-content]:rotate-y-180': isFlipped,
        },
      )}
    >
      {/* Flip badge */}
      <div className="card-content h-full w-full transition-transform duration-700 [transform-style:preserve-3d]">
        {/* Front Side */}
        <div className="card-front absolute h-full w-full rounded-lg bg-gradient-to-br from-gray-100 to-blue-300 p-3 [backface-visibility:hidden]">
          <p className="mb-2 text-lg font-semibold text-indigo-700">
            Q: {question}
          </p>
        </div>

        {/* Back Side */}
        <div className="card-back absolute h-full w-full rotate-y-180 rounded-lg bg-gradient-to-br from-gray-100 to-green-300 p-3 shadow-lg [backface-visibility:hidden]">
          <p className="mb-2 text-lg font-semibold text-indigo-700 drop-shadow-sm">
            A: {correctAnswer ? correctAnswer.text : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;