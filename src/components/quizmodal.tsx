import React, { useState } from "react";

function QuizModal({ isOpen, listName, closeModal, questions }) {
  if (!isOpen) return null;

  // State to track user's answers
  const [userAnswers, setUserAnswers] = useState({});

  // Handle changes in the radio button selection
  const handleAnswerChange = (questionIndex, answerIndex) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerIndex,
    }));
  };

  // Handle quiz submission and score calculation
  const handleSubmit = () => {
    let correctAnswers = 0;

    questions.forEach((question, index) => {
      const selectedAnswerIndex = userAnswers[index];
      const selectedAnswer = question.answers[selectedAnswerIndex];
      if (selectedAnswer && selectedAnswer.isCorrect) {
        correctAnswers++;
      }
    });

    const score = Math.round((correctAnswers / questions.length) * 100);
    alert(`You scored: ${score}%. ${score > 75 ? 'Great job!' :'Keep practicing kid...'}`);
    closeModal();  
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/2">
        <h3 className="text-2xl font-bold mb-4">{listName} Quiz</h3>
        <form>
          {questions.map((question, index) => (
            <div key={index} className="mb-4">
              <p className="font-semibold">{question.question}</p>
              <div>
                {question.answers.map((answer, answerIndex) => (
                  <label key={answerIndex} className="block mb-2">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={answerIndex}
                      checked={userAnswers[index] === answerIndex}
                      onChange={() => handleAnswerChange(index, answerIndex)}
                      className="mr-2"
                    />
                    {answer.text}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </form>
        <button
          onClick={handleSubmit}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Submit Quiz
        </button>
        <button
          onClick={closeModal}
          className="mt-4 ml-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default QuizModal;