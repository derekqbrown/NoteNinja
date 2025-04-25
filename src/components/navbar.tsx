import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import NinjaIcon from '../assets/ninjaicon.svg';
import HomeIcon from '../assets/homeicon.svg';
import NoteIcon from '../assets/notesicon.svg';
import ProfileIcon from '../assets/profileicon.svg';
import ChatIcon from '../assets/chaticon.svg';

function Navbar({ isLoggedIn, onAuthClick }) {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
         
        <Link to="/" className="flex h-10 px-2 items-center justify-between">
          <img className="w-8" src={NinjaIcon} alt="logo"/>
          <span className="text-xl font-bold text-indigo-700 hidden sm:inline">NoteNinja</span>
        </Link>
        <div className="flex items-center justify-between space-x-4">
          <Link to="/" className="flex h-10 px-2 items-center justify-between">
            <img className="w-6 h-5 pr-2" src={HomeIcon} alt="Home"/>
            <span className="text-gray-700 hover:text-indigo-600 hidden sm:inline">Home</span>
          </Link>
          <Link to="/chat" className="flex h-10 px-2 items-center justify-between">
            <img className="w-8 pr-2" src={ChatIcon} alt="Chat"/>
            <span className="text-gray-700 hover:text-indigo-600 hidden sm:inline">Chat</span>
          </Link>
          <Link to="/notes" className="flex h-10 px-2 items-center justify-between">
            <img className="w-6 pr-2" src={NoteIcon} alt="Notes"/>
            <span className="text-gray-700 hover:text-indigo-600 hidden sm:inline">Notes</span>
          </Link>
          {isLoggedIn && (
            <Link to="/profile" className="flex h-10 px-2 items-center justify-between">
              <img className="w-6 pr-2" src={ProfileIcon} alt="Profile"/>
              <span className="text-gray-700 hover:text-indigo-600 hidden sm:inline">Profile</span>
            </Link>
          )}
          <button
            onClick={onAuthClick}
            
            className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            {isLoggedIn ? 'Logout' : 'Login / Register'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;