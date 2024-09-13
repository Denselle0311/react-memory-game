import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

// eslint-disable-next-line react/prop-types
export default function Card({ src, children }) {
  const [isClick, setIsClick] = useState(false);

  const isFlipY = isClick ? "[transform:rotateY(180deg)]" : "";

  return (
    <div
      onClick={() => {
        setIsClick((c) => !c);
        setTimeout(() => setIsClick((c) => !c), 800);
      }}
      className={`w-[180px] xl:w-[220px] ${isFlipY} transition-transform duration-1000 aspect-[1/1.546]  rounded-[1.25rem]`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.6}
        glareColor="#ffffff"
        glarePosition="bottom"
        glareBorderRadius="20px"
        className="tilt h-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          id="card-face"
          className="h-full w-full rounded-[1.25em] bg-[#ffffc4] p-3 absolute"
        >
          <div
            style={{ backgroundImage: `url(${src})` }}
            className="bg-cover bg-center rounded-[1.25em] min-h-full min-w-full"
          >
            {/* <img className="rounded-[1.25em]" src={src} alt="" /> */}
          </div>
          <div className="font-semibold">{children}</div>
        </div>
        <div
          id="card-back"
          className="h-full [backface-visibility:hidden] bg-cover bg-center  rounded-[1.25em] [transform:rotateY(180deg)]"
          style={{ backgroundImage: "url(./assets/cards/bc.webp)" }}
        >
          card back
        </div>
      </Tilt>
    </div>
  );
}

// #ffffc4 bg card
// aspect 1/1.546
//220 - 180
