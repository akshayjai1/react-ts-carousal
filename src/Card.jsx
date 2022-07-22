import * as React from 'react';
export const Card = ({ tag, header, text, shiftValue,ltr=false, isActive = false, isInvisible = false, }) => {
  return (
    <div className={`card ${isActive ? 'active' : ''}`} style={{ [ltr ? 'right':'left']: shiftValue, opacity: isInvisible ? 0 : 1 }}>
      <div className="tag">
        {tag}
      </div>
      <div className="header">{header}</div>
      <div className="text">{text}</div>
    </div>
  );
};
