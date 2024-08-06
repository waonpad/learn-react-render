"use client";

import { Container } from "../shared/container";
import { Count } from "../shared/count";
import { DecrementButton } from "../shared/decrement-button";
import { IncrementButton } from "../shared/increment-button";
import { LoggingButton } from "../shared/logging-button";
import { Stack } from "../shared/stack";
import { Title } from "../shared/title";
import { useCounter } from "../shared/use-counter";

/**
 * useCallbackを使って子コンポーネントはメモ化しない場合、再レンダリングされる
 */
export const Counter6 = () => {
  const { count, increment, decrement } = useCounter();

  return (
    <Container>
      <Title>Counter6</Title>
      <Count>{count}</Count>
      <Stack>
        <IncrementButton onClick={increment} />
        <DecrementButton onClick={decrement} />
        <LoggingButton loggingValue={count} />
      </Stack>
    </Container>
  );
};
