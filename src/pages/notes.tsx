import React, { useState } from "react";
import FlashCardModal from "../components/flashcardmodal";
import QuizModal from "../components/quizmodal";

function NotesPage() {
  const myQuiz = {
    listName: 'General Knowledge Questions',
    questions: [
      {
        question: 'What is the capital of France?',
        answers: [
          { text: 'Paris', isCorrect: true },
          { text: 'London', isCorrect: false },
          { text: 'Berlin', isCorrect: false },
          { text: 'Madrid', isCorrect: false },
        ],
      },
      {
        question: 'What is 2 + 2?',
        answers: [
          { text: '3', isCorrect: false },
          { text: '4', isCorrect: true },
          { text: '5', isCorrect: false },
          { text: '6', isCorrect: false },
        ],
      },
      {
        question: 'Which best describes a cat?',
        answers: [
          { text: 'Happy', isCorrect: false },
          { text: 'EVIL', isCorrect: true },
          { text: 'Courageous', isCorrect: false },
          { text: 'Red', isCorrect: false },
        ],
      },
      {
        question: 'What color is green?',
        answers: [
          { text: 'crimson', isCorrect: false },
          { text: 'forest green', isCorrect: true },
          { text: 'magenta', isCorrect: false },
          { text: 'navy blue', isCorrect: false },
        ],
      },
      {
        question: 'What is the chemical symbol for water?',
        answers: [
          { text: 'H₂O', isCorrect: true },
          { text: 'O₂', isCorrect: false },
          { text: 'CO₂', isCorrect: false },
          { text: 'H₂O₂', isCorrect: false },
        ],
      },
    ],
  };

  const [isFlashcardModalOpen, setIsFlashcardModalOpen] = useState(false);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);

  const openFlashcardModal = () => setIsFlashcardModalOpen(true);
  const closeFlashcardModal = () => setIsFlashcardModalOpen(false);

  const openQuizModal = () => setIsQuizModalOpen(true);
  const closeQuizModal = () => setIsQuizModalOpen(false);

  return (
    <div>
      <section className="text-center mb-12 justify-items-center">
        <h2 className="text-3xl font-bold mb-4 text-indigo-800">Hello, I'm NoteNinja AI</h2>
        <p className="text-gray-600 p-3 w-1/2">
          In the future, you will be able to upload notes to generate custom flashcards or practice quizzes (see below).
        </p>
        <p className="text-2xl p-2 font-bold text-indigo-500">Some features are still under construction, so check back later</p>
      </section>

      <section>
        <div className="p-4 justify-items-center">
          <h2 className="text-2xl p-2 font-bold text-indigo-500">Your question sets:</h2>
          <div className="flex justify-center border-gray-200 border-2 mb-4 p-1">
            <div className="font-bold text-xl m-2">{myQuiz.listName}</div>
            <button
              onClick={openFlashcardModal}
              className="px-4 py-2 m-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              View as Flashcards
            </button>
            <button
              onClick={openQuizModal}
              className="px-4 py-2 m-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              Take Quiz 
            </button>
          </div>
        </div>
      </section>

      <FlashCardModal
        isOpen={isFlashcardModalOpen}
        listName={myQuiz.listName}
        closeModal={closeFlashcardModal}
        questions={myQuiz.questions}
      />
      <QuizModal
        isOpen={isQuizModalOpen}
        listName={myQuiz.listName}
        closeModal={closeQuizModal}
        questions={myQuiz.questions}
      />
    </div>
  );
}

export default NotesPage;