import { useState, useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import axios from 'axios';

function ProtectedRoute() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const [userData, setUserData] = useState(null); 

  useEffect(() => {
    const token = localStorage.getItem('token');

    const verifyToken = async () => {
      if (token) {
        try {
          const response = await axios.post('/api/validate', {}, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }); 
          if (response.data.isValid) {
            setIsAuthenticated(true);
            setUserData(response.data.user); 
          } else {
            setIsAuthenticated(false);
            localStorage.removeItem('token'); 
          }
        } catch (error) {
          console.error('Error validating token:', error);
          setIsAuthenticated(false);
          localStorage.removeItem('token'); 
        }
      } else {
        setIsAuthenticated(false);
      }
    };

    verifyToken();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? <Outlet context={{ user: userData }} /> : <Navigate to="/" />;
}

export default ProtectedRoute;