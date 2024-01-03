import React, { useState, useEffect } from 'react';

const Animate = ({ children, animation, duration = 1, delay = 0 }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(true);
  }, []);

  const animationStyles = {
    animation: `${animation} ${duration}s ease ${delay}s both`,
    opacity: isActive ? 1 : 0,
    transition: `opacity ${duration + delay}s`,
  };

  return React.cloneElement(children, {
    style: { ...children.props.style, ...animationStyles },
  });
};

export default Animate;
