import * as React from 'react';
import {TRANSITION_SECONDS} from './constants';
const transition = `left ${TRANSITION_SECONDS}s, right ${TRANSITION_SECONDS}s linear`

const cardStyle = ({shiftValue, ltr, isInvisible, isActive}) => ({[ltr ? 'right' : 'left']: shiftValue, opacity: isInvisible ? 0 : isActive ? 1 : .5, transition})

export const Card = ({tag, header, text, multiple, shiftValue, ltr = false, isActive = false, isInvisible = false, }) => {
  return (
    <div className={`card ${isActive ? 'active' : ''}`} style={cardStyle({shiftValue, ltr, isInvisible, isActive})}>
      <div className="tag">
        {tag}
      </div>
      <div className="header">{header}</div>
      <div className="text">{text}</div>
    </div>
  );
};
