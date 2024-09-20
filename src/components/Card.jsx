import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import cardBack from "../assets/cards/bc.jpg";

export default function Card(props) {
  // eslint-disable-next-line react/prop-types
  const { src, children, handleClick, isClicked } = props;
  const isFlipY = isClicked ? "[transform:rotateY(180deg)]" : "";
  const nameGreater10 = children?.length > 10;

  return (
    <div
      onClick={() => {
        handleClick();
      }}
      className={`w-[100px] lg:w-[180px] xl:w-[220px] ${isFlipY} cursor-pointer aspect-[1/1.546]  rounded-[1.25rem]`}
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
          className="h-full w-full flex flex-col gap-1 items-center rounded-[1.25em] bg-[#ffffc4] p-2 lg:p-4 desktop:py-5 absolute"
        >
          <div
            style={{ backgroundImage: `url(${src})` }}
            className="bg-cover bg-center rounded-[1em] min-h-[calc(100%-1.5em)] min-w-full"
          ></div>
          <p
            className={`font-semibold text-black ${
              nameGreater10 ? "[font-size:.6rem]" : "text-base"
            } lg:text-[1em] desktop:text-[1.1em] text-center leading-none`}
          >
            {children}
          </p>
        </div>
        <div
          id="card-back"
          style={{ backgroundImage: `url(${cardBack})` }}
          className="h-full [backface-visibility:hidden] bg-cover bg-center  rounded-[1.25em] [transform:rotateY(180deg)]"
        ></div>
      </Tilt>
    </div>
  );
}
