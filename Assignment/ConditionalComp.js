import React from 'react';

const ConditionalComponent = ({ isTrue }) => {
  return (
    <div>
      {isTrue ? (
        <p>The prop is true. Display this text.</p>
      ) : (
        <p>The prop is false. Display this text instead.</p>
      )}
    </div>
  );
};

export default ConditionalComponent;