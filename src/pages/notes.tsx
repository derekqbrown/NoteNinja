import FlashCardDeck from "../components/flashcarddeck";

function NotesPage() {

  const myQuiz = {
    listName: 'General Knowledge Quiz',
    questions: [
      {
        question: 'What is the capital of France?',
        answers: [
          { text: 'Paris', isCorrect: true },
          { text: 'London', isCorrect: false },
          { text: 'Berlin', isCorrect: false },
          { text: 'Madrid', isCorrect: false }
        ]
      },
      {
        question: 'What is 2 + 2?',
        answers: [
          { text: '3', isCorrect: false },
          { text: '4', isCorrect: true },
          { text: '5', isCorrect: false },
          { text: '6', isCorrect: false }
        ]
      },
      {
        question: 'What is the chemical symbol for water?',
        answers: [
          { text: 'H₂O', isCorrect: true },
          { text: 'O₂', isCorrect: false },
          { text: 'CO₂', isCorrect: false },
          { text: 'H₂O₂', isCorrect: false }
        ]
      }
    ]
  };

    return (
      <div>
        <section className="text-center mb-12 justify-items-center">
          <h2 className="text-3xl font-bold mb-4 text-indigo-800">Hello, I'm NoteNinja AI</h2>
          <p className="text-gray-600 p-3 w-1/2">In the future, you will be able to upload notes to generate flashcards (examples below) or practice quizes.</p>
          <p className="text-2xl p-2 font-bold text-indigo-500">Some features are still under construction, so check back later</p>
        </section>
        <section>
          <h2></h2>
          <div className="p-4 items-center"> 
          <FlashCardDeck flashcards={myQuiz.questions} />
          </div>
        </section>
        
      </div>
      
    );
  }
  
  export default NotesPage;