import Button from "../components/Button";

const winBg = "url(src/assets/background/at-bg.jpg)";
const lossBg = "url(src/assets/background/at-diff-bg.jpg)";

// eslint-disable-next-line react/prop-types
export default function GameoverPage({ handleClick, isWin }) {
  return (
    <div className="flex flex-col m-[auto] min-h-72 justify-center gap-14 items-center relative z-20">
      <div
        id="win"
        style={{ backgroundImage: `${isWin ? winBg : lossBg}` }}
        className="w-[300px] md:w-[500px] lg:w-[700px] lg:h-[500px] min-h-72 bg-cover brightness-[.60] bg-[center_top] absolute -z-10 rounded-xl"
      ></div>
      <h1 className="text-white lg:text-7xl">
        You {isWin ? "Win!!" : "Loss!!"}
      </h1>
      <Button
        onClick={handleClick}
        className="bg-black py-1 px-3 lg:px-5 lg:py-2"
      >
        Restart
      </Button>
    </div>
  );
}
