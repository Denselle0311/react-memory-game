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
      className={`w-[180px] xl:w-[220px] ${isFlipY} cursor-pointer aspect-[1/1.546]  rounded-[1.25rem]`}
      style={{ transition: "transform 1s", transformStyle: "preserve-3d" }}
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
          className="h-full w-full flex flex-col items-center rounded-[1.25em] bg-[#ffffc4] p-3 absolute"
        >
          <div
            style={{ backgroundImage: `url(${src})` }}
            className="bg-cover bg-center rounded-[1.25em] min-h-[calc(100%-1.5em)] min-w-full"
          ></div>
          <div className="font-semibold text-black">{children}</div>
        </div>
        <div
          id="card-back"
          style={{ backgroundImage: "url(/src/assets/cards/bc.jpg)" }}
          className="h-full [backface-visibility:hidden] bg-cover bg-center  rounded-[1.25em] [transform:rotateY(180deg)]"
        ></div>
      </Tilt>
    </div>
  );
}
