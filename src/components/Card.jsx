import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

export default function Card() {
  const [isClick, setIsClick] = useState(false);

  const isFlipY = isClick ? "[transform:rotateY(180deg)]" : "";

  return (
    <>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.6}
        glareColor="#ffffff"
        glarePosition="bottom"
        glareBorderRadius="20px"
        className="tilt"
      >
        <div
          onClick={() => {
            setIsClick((c) => !c);
            setTimeout(() => setIsClick((c) => !c), 800);
          }}
          className={`w-[180px] xl:w-[220px] ${isFlipY} transition-transform duration-1000 aspect-[1/1.546] bg-green-700 rounded-[1.25rem] p-2`}
        >
          <p>React Parallax Tilt 👀</p>
          <img src="./assets/cards/finn.jpg" alt="" />
        </div>
      </Tilt>
    </>
  );
}

// #ffffc4 bg card
// aspect 1/1.546
//220 - 180
