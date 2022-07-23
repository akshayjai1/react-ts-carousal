import * as React from 'react';
import { useEffect, useState } from 'react';
import './style.css';
import { data } from './data';
import {Card} from './Card';
import {CARD_SPACE_WIDTH,  INITIAL_PULL_BEFORE_HIDING, NUMBER_OF_CARDS, NUMBER_OF_CARDS_TO_SHIFT, TRANSITION_SECONDS} from './constants';
import {getIsActive, getIsInvisible, getMultiple} from './utils';

export default function App() {
  const [shiftInteger, setShiftInteger] = useState(0);
  useEffect(() => {
    const fn = () => {
      setShiftInteger((x) => {
        return x - NUMBER_OF_CARDS_TO_SHIFT;
      });
    };
    const timer = setInterval(fn, TRANSITION_SECONDS*1000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div>
      <h2>Moving Carousal</h2>
      <div className="carousal-container">
        {data.slice(0,NUMBER_OF_CARDS).map((e, index) => {
          const multiple = getMultiple({total:Math.min(data.length,NUMBER_OF_CARDS), index, shiftInteger})
          return (
            <Card
              {...e}
              key={e.id}
              isActive={getIsActive(multiple, data.length)}
              isInvisible={getIsInvisible(multiple, data.length)}
              multiple={multiple}
              shiftValue={`calc(${multiple - INITIAL_PULL_BEFORE_HIDING} * ${CARD_SPACE_WIDTH}px)`}
              />
              );
            })}
      </div>
      <div className="carousal-container clear-fix">
        {data.slice(0,NUMBER_OF_CARDS).map((e, index) => {
          const multiple = getMultiple({total:Math.min(data.length,NUMBER_OF_CARDS), index, shiftInteger})
          return (
            <Card
            {...e}
            ltr
            key={e.id}
              multiple={multiple}
              isActive={getIsActive(multiple, data.length)}
            isInvisible={getIsInvisible(multiple, data.length)}
            shiftValue={`calc(${multiple - INITIAL_PULL_BEFORE_HIDING} * ${CARD_SPACE_WIDTH}px)`}
            />
          );
        })}
      </div>
    </div>
  );
}
