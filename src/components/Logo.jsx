// eslint-disable-next-line react/prop-types
export default function Logo({ isHeader }) {
  return (
    <>
      {isHeader ? (
        <img
          className="h-32 cursor-pointer"
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
