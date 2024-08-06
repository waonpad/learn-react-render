"use client";

import { useState } from "react";

/**
 * ボタンを押すとコンポーネント全体が再レンダリングされる
 */
export const Counter1 = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => setCount((prev) => prev - 1);

  return (
    <div className="flex w-fit flex-col items-center space-y-2 border border-gray-600 p-2">
      <h2>Counter1</h2>
      <span>{count}</span>
      <div className="flex space-x-2">
        <button type="button" onClick={increment} className="border border-green-600">
          Increment
        </button>
        <button type="button" onClick={decrement} className="border border-red-600">
          Decrement
        </button>
      </div>
    </div>
  );
};
