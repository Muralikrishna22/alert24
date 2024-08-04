import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
   <div>
    <h1> ALERT 24 </h1>
    <span> SMART DIGITAL ALERTING SOLUTION </span>
   </div>
  )
}

export default App
