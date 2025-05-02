import FeatureCard from '../components/featurecard';

function HomePage() {
  

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
      
    </section>
  );
}

export default HomePage;