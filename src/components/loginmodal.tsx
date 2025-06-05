import React from 'react';

interface LoginModalProps {
  onClose: () => void;
  isRegistering: boolean;
  toggleAuthMode: () => void;
  onAuthSuccess: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  onClose,
  isRegistering,
  toggleAuthMode,
  onAuthSuccess,
}) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    //Modify this when the backend is up and running
    console.log(isRegistering ? 'Registering...' : 'Logging in...');
    setTimeout(() => {
      localStorage.setItem('token', "TOKEN");
      onAuthSuccess();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-gray-300 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 focus:outline-none"
        >
          ✖
        </button>
        <h2 className="text-2xl font-bold mb-6 text-indigo-800">
          {isRegistering ? 'Register' : 'Login'}
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {isRegistering && (
            <input
              type="text"
              placeholder="Username (Optional)"
              className="w-full px-4 py-2 border rounded focus:ring-indigo-500 focus:border-indigo-500"
            />
          )}
          <input
            type="email"
            placeholder="Email (Required)"
            className="w-full px-4 py-2 border rounded focus:ring-indigo-500 focus:border-indigo-500"
          />
          <input
            type="password"
            placeholder="Password (Required)"
            className="w-full px-4 py-2 border rounded focus:ring-indigo-500 focus:border-indigo-500"
          />
          
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            {isRegistering ? 'Register' : 'Login'}
          </button>
        </form>
        <div className="mt-4 text-center">
          <button onClick={toggleAuthMode} className="text-indigo-600 hover:text-indigo-800 focus:outline-none">
            {isRegistering ? 'Already have an account? Login here' : "Don't have an account? Register here"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;