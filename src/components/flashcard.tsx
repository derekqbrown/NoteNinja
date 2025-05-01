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
        'relative h-[150px] w-[300px] cursor-pointer rounded-lg border border-gray-100 bg-transparent shadow-md transition-transform duration-500 hover:border-2 hover:border-orange-300',
        {
          '[&_.card-content]:rotate-y-180': isFlipped,
        },
      )}
    >
      {/* Flip badge */}
      <div className="card-content h-full w-full transition-transform duration-500 [transform-style:preserve-3d]">
        {/* Front Side */}
        <div className="card-front align-middle absolute h-full w-full rounded-lg bg-gradient-to-br from-[#f0f4f8] to-[#e2ebf3] p-3 text-indigo-500 [backface-visibility:hidden]">
          <p className="mb-2 text-lg font-semibold text-indigo-700">
            Q: {question}
          </p>
        </div>

        {/* Back Side */}
        <div className="card-back absolute h-full w-full rotate-y-180 rounded-lg bg-gradient-to-br from-[#e1f4f0] to-[#b6f7df] p-3 text-indigo-500 shadow-lg [backface-visibility:hidden]">
          <p className="mb-2 text-lg font-semibold text-indigo-700 drop-shadow-sm">
            A: {correctAnswer ? correctAnswer.text : "N/A"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FlashCard;