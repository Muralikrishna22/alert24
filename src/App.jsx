import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './Modules/LoginPage/LoginPage'
import LoginForm from './Modules/LoginPage'
import RegistrationPage from './Modules/Registration'

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  function showSystemNotification() {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        let notification = new Notification("Need your attention", {
          body: "This site uses notifications for the best user experience. Thank you for understanding",
          icon: 'ALERT 24',
        });
      } else if (Notification.permission !== "denied") {
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            let notification = new Notification("Need your attention", {
              body: "This site uses notifications for the best user experience. Thank you for understanding",
              icon: 'ALERT 24',
            });
          } else if (permission === "denied") {
            alert("This site uses notifications for the best user experience. Thank you for understanding");
          }
        });
      }
    }
  }

  useEffect(() => {
    // showSystemNotification()
  }, []);

  return (
      <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationPage />} />
      </Routes>
    </Router>
  )
}

export default App
