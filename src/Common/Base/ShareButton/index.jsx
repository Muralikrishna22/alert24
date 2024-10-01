import React from "react";
import './styles.css';

const ShareButton = ({children, type, isDisabled=false, shareData = {}}) => {
    const handleShare = async () => {
    // const shareData = {
    //   title: 'Check this out!',
    //   text: 'I found something interesting!',
    //   url: window.location.href, // You can customize the URL to share
    // };

       if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log('Content shared successfully');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback: Copy to clipboard
      try {
        await navigator.clipboard.writeText(shareData.description);
        alert('Link copied to clipboard!');
      } catch (error) {
        console.error('Error copying to clipboard:', error);
        alert("Your browser doesn't support the Web Share API or clipboard functionality.");
      }
    }
  };
        return (
            <button disabled={isDisabled} onClick={handleShare} type={type} className="button">
                {children}
            </button>
        );
    };
    
export default ShareButton;