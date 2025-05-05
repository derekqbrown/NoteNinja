import React from 'react';
import FlashCardDeck from "../components/flashcarddeck";


function FlashCardModal({ isOpen, listName, closeModal, questions }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/2">
      <section> 
          <h2 className="text-center">{listName} Flashcard Deck:</h2>
          <div className="p-4 items-center"> 
            
          <FlashCardDeck flashcards={questions} />  
          </div>
        </section>
        <button onClick={closeModal} className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md">Close</button>
      </div>
    </div>
  );
}

export default FlashCardModal;