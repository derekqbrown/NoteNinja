import FeatureCard from '../components/featurecard';
import FlashCardDeck from '../components/flashcarddeck';

function HomePage() {
  const myQuestions = [
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
  ];

  let isLoggedIn = (localStorage.getItem('token') != null);
  return (
    <section className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4 text-indigo-800">Welcome to NoteNinja</h2>
      <p className="text-lg text-gray-700">
        NoteNinja is a free application to help you study. Upload your notes, then review as either flashcards or a quiz!
        {isLoggedIn
          ? ' Explore your profile and organized notes!'
          : ' Register or log in to start exploring the features!'}
      </p>
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center mt-8">
        <FeatureCard title="Organize Notes" description="Keep your thoughts structured and easily accessible." />
        <FeatureCard title="Quick Access" description="Access your notes anytime, anywhere." />
        <FeatureCard title="Secure Storage" description="Your notes are stored securely." />
      </section>
      <div className="p-4 items-center"> 
        <FlashCardDeck flashcards={myQuestions} />
      </div>
    </section>
  );
}

export default HomePage;