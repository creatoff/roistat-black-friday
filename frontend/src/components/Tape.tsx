import { Fragment } from "react";

import Spark from "../assets/spark.svg?react";
import BlackFriday from "../assets/black-friday.svg?react";
import Year2023 from "../assets/2023.svg?react";

interface TapeProps {
  className: string;
  angle: number;
  textColor: string;
  dividerColor: string;
  bias?: number;
};

export function Tape({ className, angle, bias, textColor, dividerColor }: TapeProps) {
  const text = [<Year2023 />, <BlackFriday />];

  const Text = () => (
    <span className="tape__text" style={{ color: textColor }}>
      {text.map((fragment, index) => (
        <span key={index}>{fragment}</span>
      ))}
    </span>
  );

  const Divider = () => (
    <span className="tape__spark" style={{ color: dividerColor }}>
      <Spark />
    </span>
  );

  const Wrapper = () => {
    return (
      <div className="tape__wrapper">
        {Array(3)
          .fill(true)
          .map((_, index) => (
            <Fragment key={index}>
              {/* {index !== 0 && <Divider />} */}
              <Divider />
              <Text />
            </Fragment>
          ))}
      </div>
    );
  };

  return (
    <div className={`${["tape", className].join(" ")}`}>
      <div
        className="tape__rotation"
        style={{
          transform: `rotate(${-angle}deg) ${bias ? `translateX(${bias}px)` : ''}`,
        }}
      >
        <Wrapper/>
        {/* second Wrapper for infinite animation */}
        <Wrapper/> 
      </div>
    </div>
  );
}
