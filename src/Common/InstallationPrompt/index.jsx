import React, { useState, useEffect } from 'react';
import './styles.css'

const InstallationPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const showInstallPrompt = () => {
    if (deferredPrompt) {
      setIsVisible(true);
    }
  };

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      setDeferredPrompt(null);
      setIsVisible(false);
    }
  };

  const handleCancel = () => {
    setIsVisible(false);
    localStorage.setItem('installPromptShown', 'true');
  };

  return (
    <>
      <div id="installPrompt" className="install-popup">
        <p style={{ color: 'black' }}>Install this app for a better experience</p>
        <button onClick={handleInstall}>Click to install </button>
        {/* <button onClick={handleCancel}>Cancel</button> */}
      </div>
    </>
  );
};

export default InstallationPrompt;
