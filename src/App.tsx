import React, { useState } from 'react';
import Navbar from './components/navbar';
import LoginModal from './components/loginmodal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import ProfilePage from './pages/profile';


function App() {
  const [showModal, setShowModal] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAuthClick = () => {
    if (isLoggedIn) {
      setIsLoggedIn(false);
      console.log('User logged out');
    } else {
      setShowModal(true);
      setIsRegistering(false);
    }
  };

  const toggleAuthMode = () => {
    setIsRegistering(!isRegistering);
  };

  const handleLoginRegisterSuccess = () => {
    setIsLoggedIn(true);
    setShowModal(false);
    console.log('Login/Registration successful');
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-lavender-100 text-gray-800">
        <Navbar isLoggedIn={isLoggedIn} onAuthClick={handleAuthClick} />

        <main className="container mx-auto px-4 py-12">
          <Routes>
            <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />} />
            {isLoggedIn && <Route path="/profile" element={<ProfilePage />} />}
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
      </div>
    </BrowserRouter>
  );
}

export default App;