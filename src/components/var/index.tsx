"use client";

import { useMemo } from "react";
import { ContainerMemo } from "../shared/container";
import { CountMemo } from "../shared/count";
import { DecrementButtonMemo } from "../shared/decrement-button";
import { IncrementButtonMemo } from "../shared/increment-button";
import { LoggingButtonMemo } from "../shared/logging-button";
import { StackMemo } from "../shared/stack";
import { TitleMemo } from "../shared/title";
import { useCounter } from "../shared/use-counter";

/**
 * レンダリングの度にmessage変数が生成される
 */
export const Var1 = () => {
  const message = (() => {
    const random = Math.random();

    return `Random: ${random}`;
  })();

  return <div>{message}</div>;
};

const message = (() => {
  const random = Math.random();

  return `Random: ${random}`;
})();

/**
 * コンポーネントの外で定義して再生成を防ぐ
 */
export const Var2 = () => {
  return <div>{message}</div>;
};

/**
 * メモ化して再生成を防ぐ
 */
export const Var3 = () => {
  const message = useMemo(() => {
    const random = Math.random();

    return `Random: ${random}`;
  }, []);

  return <div>{message}</div>;
};

export const VarContainer = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <ContainerMemo>
      <TitleMemo>VarContainer</TitleMemo>
      <CountMemo>{count}</CountMemo>
      <StackMemo>
        <IncrementButtonMemo onClick={increment} />
        <DecrementButtonMemo onClick={decrement} />
        <LoggingButtonMemo loggingValue={count} />
      </StackMemo>
      <Var1 />
      <Var2 />
      <Var3 />
    </ContainerMemo>
  );
};
