/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "./Card";

export default function CardSection({ cards }) {
  const [clickCount, setClickCount] = useState(0);
  return (
    <div className="flex flex-col gap-2 items-center m-auto text-center">
      <div className="flex flex-wrap justify-center  gap-2 max-h-screen px-2">
        {cards.map((c) => (
          <Card key={c.id} src={c.src}>
            {c.name}
          </Card>
        ))}
      </div>
      <span className="lg:text-lg bg-slate-500 px-2 rounded-md">
        {clickCount}/{cards.length}
      </span>
    </div>
  );
}
