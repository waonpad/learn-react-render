"use client";

import {} from "react";
import { ContainerMemo } from "../shared/container";
import { CountMemo } from "../shared/count";
import { DecrementButtonMemo } from "../shared/decrement-button";
import { IncrementButtonMemo } from "../shared/increment-button";
import { LoggingButtonMemo } from "../shared/logging-button";
import { StackMemo } from "../shared/stack";
import { TitleMemo } from "../shared/title";
import { useCounter } from "../shared/use-counter";

/**
 * カスタムフックに切り出しても変わらない
 */
export const Counter5 = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <ContainerMemo>
      <TitleMemo>Counter5</TitleMemo>
      <CountMemo>{count}</CountMemo>
      <StackMemo>
        <IncrementButtonMemo onClick={increment} />
        <DecrementButtonMemo onClick={decrement} />
        <LoggingButtonMemo loggingValue={count} />
      </StackMemo>
    </ContainerMemo>
  );
};
