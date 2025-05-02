import React, { useState } from 'react';
import Navbar from './components/navbar';
import LoginModal from './components/loginmodal';
import ProtectedRoute from './components/protectedroute';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ChatPage from './pages/chat';
import NotesPage from './pages/notes';
import HomePage from './pages/home';
import ProfilePage from './pages/profile';
import Footer from './components/footer';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (localStorage.getItem('token')) {
      if(window.confirm("Do you want to logout?")){
        localStorage.removeItem('token');
        console.log('User logged out');
        navigate('/');
      }
      
    } else {
      setShowModal(true);
      setIsRegistering(false);
    }
  };

  const toggleAuthMode = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLoginRegisterSuccess = () => {
    setShowModal(false);
    console.log('Login/Registration successful');
  };

  return (
    <div className="min-h-screen bg-lavender-100 text-gray-800">
    <Navbar onAuthClick={handleAuthClick} />
      <main className="container mx-auto px-4 py-12">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/notes" element={<NotesPage />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<ProfilePage />} />
          </Route>
          
        </Routes>
      </main>

      {showModal && (
        <LoginModal
          onClose={() => setShowModal(false)}
          isRegistering={isRegistering}
          toggleAuthMode={toggleAuthMode}
          onAuthSuccess={handleLoginRegisterSuccess}
        />
      )}
    <Footer/>
    </div>
    
  );
}

export default App;