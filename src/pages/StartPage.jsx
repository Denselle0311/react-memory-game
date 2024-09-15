import Button from "../components/Button";
import Logo from "../components/Logo";

// eslint-disable-next-line react/prop-types
export default function StartPage({ handleClick }) {
  return (
    <div className="flex flex-col justify-center items-center md:items-start min-h-screen md:ml-[10%]">
      <div className="flex flex-col gap-5 items-center justify-center flex-1 max-w-fit">
        <Logo isHeader={false} />
        <h1 className="text-white drop-shadow-md text-lg lg:text-3xl">
          Memory Game
        </h1>
        <div className="flex gap-3">
          <Button
            onClick={handleClick}
            className="bg-red-600 text-[#ffffc4] drop-shadow-lg px-3 py-1 lg:px-5 lg:py-3"
          >
            Easy
          </Button>
          <Button
            onClick={handleClick}
            className="bg-red-600 text-[#ffffc4] drop-shadow-lg px-3 py-1 lg:px-5 lg:py-3"
          >
            Medium
          </Button>
          <Button
            onClick={handleClick}
            className="bg-red-600 text-[#ffffc4] drop-shadow-lg px-3 py-1 lg:px-5 lg:py-3"
          >
            Hard
          </Button>
        </div>
      </div>
    </div>
  );
}
