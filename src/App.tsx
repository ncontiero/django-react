import { useState } from "react";

export function App() {
  const [count, setCount] = useState(0);

  const text = "Django + React + Rspack = Awesome App";
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-bold">{text}</h1>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        className="w-20 rounded-md border-2 border-transparent bg-zinc-900 py-2 duration-200 hover:border-white/40 focus-visible:border-white/60 focus-visible:outline-none active:bg-zinc-800"
      >
        {count}
      </button>
    </div>
  );
}
