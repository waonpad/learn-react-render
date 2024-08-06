"use client";

import { useCallback, useState } from "react";
import { ContainerMemo } from "../shared/container";
import { CountMemo } from "../shared/count";
import { DecrementButtonMemo } from "../shared/decrement-button";
import { IncrementButtonMemo } from "../shared/increment-button";
import { LoggingButtonMemo } from "../shared/logging-button";
import { StackMemo } from "../shared/stack";
import { TitleMemo } from "../shared/title";

/**
 * メモ化とuseCallbackを使うと、increment, decrementボタンは再レンダリングされない
 */
export const Counter4 = () => {
  const [count, setCount] = useState<number>(0);

  const increment = useCallback(() => setCount((prev) => prev + 1), []);

  const decrement = useCallback(() => setCount((prev) => prev - 1), []);

  return (
    <ContainerMemo>
      <TitleMemo>Counter4</TitleMemo>
      <CountMemo>{count}</CountMemo>
      <StackMemo>
        <IncrementButtonMemo onClick={increment} />
        <DecrementButtonMemo onClick={decrement} />
        <LoggingButtonMemo loggingValue={count} />
      </StackMemo>
    </ContainerMemo>
  );
};
