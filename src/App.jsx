import * as React from 'react';
import { useEffect, useState } from 'react';
import './style.css';
import { data } from './data';
import { Card } from './Card';
export default function App() {
  const [shiftInteger, setShiftInteger] = useState(0);
  useEffect(() => {
    const fn = () => {
      setShiftInteger((x) => {
        return x - 1;
      });
    };
    const timer = setInterval(fn, 3000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <div>
      <h2>Moving Carousal</h2>
      <div className="carousal-container">
        {data.map((e, i) => {
          let multiple = data.length + (i + shiftInteger) % data.length;
          const wid = '260px';
          return (
            <Card
              {...e}
              key={e.id}
              isInvisible={multiple==data.length}
              shiftValue={`calc(${multiple -1.7} * ${wid})`}
            />
          );
        })}
      </div>
      <div className="carousal-container clear-fix">
        {data.map((e, i) => {
          let multiple = data.length + (i + shiftInteger) % data.length;
          const wid = '260px';
          return (
            <Card
              {...e}
              ltr
              key={e.id}
              isInvisible={multiple==data.length}
              shiftValue={`calc(${multiple -1.7} * ${wid})`}
            />
          );
        })}
      </div>
    </div>
  );
}
