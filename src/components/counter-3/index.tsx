"use client";

import { useState } from "react";
import { ContainerMemo } from "../shared/container";
import { CountMemo } from "../shared/count";
import { DecrementButtonMemo } from "../shared/decrement-button";
import { IncrementButtonMemo } from "../shared/increment-button";
import { LoggingButtonMemo } from "../shared/logging-button";
import { StackMemo } from "../shared/stack";
import { TitleMemo } from "../shared/title";

/**
 * ボタンを押すとコンポーネントとその子コンポーネントが再レンダリングされる
 *
 * 子コンポーネントをメモ化しただけでは何も変わらない(自身をメモ化しても同じ)
 */
export const Counter3 = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => setCount((prev) => prev - 1);

  return (
    <ContainerMemo>
      {/* タイトルは押しても再レンダリングされない */}
      <TitleMemo>Counter3</TitleMemo>
      <CountMemo>{count}</CountMemo>
      <StackMemo>
        <IncrementButtonMemo onClick={increment} />
        <DecrementButtonMemo onClick={decrement} />
        <LoggingButtonMemo loggingValue={count} />
      </StackMemo>
    </ContainerMemo>
  );
};
