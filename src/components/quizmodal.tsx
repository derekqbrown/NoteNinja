import React, { useState } from 'react';

function QuizModal({ isOpen, listName, closeModal, questions }) {
  if (!isOpen) return null;

  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [score, setScore] = useState(null);

  const handleAnswerChange = (questionIndex, answerIndex) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionIndex]: answerIndex,
    }));
  };

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
    setScore(score);
    setQuizSubmitted(true);
  };

  const handleRetake = () => {
    setUserAnswers({});
    setQuizSubmitted(false);
    setScore(null);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          ✖
        </button>
        <h3 className="text-2xl font-bold mb-4 text-center">{listName} Quiz</h3>
        
        {quizSubmitted ? (
          <div className='text-center m-2'>
            <p className="text-xl font-semibold text-indigo-500">
              <span className='text-2xl font-bold'>You scored: {score}%</span>
            <br/><br/>
            <span className={score > 75 ? 'text-green-600' : 'text-red-600'}>
              {score > 75 ? 'WOW! You are so SMART!' : 'Keep studying and try again...'}
            </span>
            </p>
            <div className="mt-4 flex justify-center">
              <button
                onClick={handleRetake}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-4"
              >
                Retake Quiz
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form className='mx-5'>
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
            <div className="mt-4 flex justify-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 mr-4"              >
                Submit Quiz
              </button>
              <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Close
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}

export default QuizModal;