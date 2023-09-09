import { useState } from "preact/hooks";

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div class="my-5 flex flex-row justify-center items-center gap-x-3">
      <button
        class="p-2 border rounded-md text-white cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
      <span class="text-center m-0">{counter}</span>
      <button
        class="p-2 border rounded-md text-white cursor-pointer hover:bg-sky-600 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 transition-all duration-200 ease-in-out hover:scale-110 scale-90 gap-x-2 opacity-90 hover:opacity-100 disabled:bg-gray-400 disabled:opacity-50 disabled:text-white"
        onClick={() => setCounter(counter - 1)}
        disabled={counter < 1}
      >
        -
      </button>
    </div>
  );
};
