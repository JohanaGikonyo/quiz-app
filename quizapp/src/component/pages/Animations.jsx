import React, { useState, useEffect } from 'react';
//import './animations.css';

const Animations = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev); // Toggle visibility
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-animation-container">
      {isVisible ? (
        <h1 className="text-appear">JGK Technologies</h1>
      ) : (
        <h1 className="text-disappear">Welcome</h1>
      )}
      {isVisible ? (
        <h1 className="text-disappear">You are a Heroe</h1>
      ) : (
        <h1 className="text-appear">  Karibu</h1>
      )}
    </div>
  );
};

export default Animations;


