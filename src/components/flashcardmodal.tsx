import React from 'react';
import FlashCard from './flashcard';


function FlashCardModal({ isOpen, listName, closeModal, questions }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          ✖
        </button>
      <section> 
          <h2 className="text-center">{listName} Flashcard Deck:</h2>       
          
          <div className="p-4 items-center"> 
            <div className="justify-items-center">
              {questions.map((card, index) => (
                <FlashCard key={index} question={card.question} answers={card.answers} />
              ))}
            </div>
          </div>
        </section>
        <button onClick={closeModal} className=" mt-4 px-4 py-2 bg-red-500 text-white rounded-md">Close</button>

      </div>
    </div>
  );
}

export default FlashCardModal;