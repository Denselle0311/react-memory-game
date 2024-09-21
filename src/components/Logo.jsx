import { ACTIONS } from "../reducer/gameReducer";

// eslint-disable-next-line react/prop-types
export default function Logo({ isHeader, dispatch }) {
  return (
    <>
      {isHeader ? (
        <img
          onClick={() => dispatch({ type: ACTIONS.RESET_TO_HOME })}
          className="max-h-10 cursor-pointer md:max-h-20"
          src="src/assets/Adventure-time-logo.png"
          alt=""
        />
      ) : (
        <img
          className="max-w-[300px] lg:max-w-md xl:max-w-2xl"
          src="src/assets/Adventure-time-logo.png"
          alt=""
        />
      )}
    </>
  );
}
