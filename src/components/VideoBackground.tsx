import React from 'react';

const VideoBackground = ({ src, children }) => {
  const videoBackgroundStyle = {
    position: 'fixed', // Or 'absolute' depending on use case
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden',
    zIndex: -1, // Ensure it's behind content
  };

  const videoStyle = {
    width: '100vw',
    height: '100vh',
    objectFit: 'cover',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  };

  const contentStyle = {
    position: 'relative', // Make sure content is positioned relative to background
    zIndex: 2, // Above the video background
    height: '100vh', // Adjust based on your content's needs
    overflow: 'auto', // Scroll inside content if needed
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // Adjust or remove based on your content's layout
  };

  return (
    <div style={videoBackgroundStyle}>
      <video autoPlay loop muted playsInline style={videoStyle}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div style={contentStyle}>
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;
