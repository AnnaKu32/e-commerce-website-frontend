import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from "react";
import MainPage from '../main-page/MainPage';

const UserPage = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          setUser(parsedUser);
        }
      }, []);

      console.log('User state:', user);
    
      if (!user) {
        return (
          <div className="container d-flex align-items-center justify-content-center text-secondary" style={{ minHeight: "100vh" }}>
            <span style={{ fontSize: "24px" }}> Loading your page...</span>
            <div className="spinner-border" role="status">
              <span className="sr-only"></span>
            </div>
          </div>
        );
      }
    
      return (
        <div>
          <MainPage />
        </div>
      );
    };
    
export default UserPage;