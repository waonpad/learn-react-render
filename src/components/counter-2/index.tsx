"use client";

import { useState } from "react";
import { Container } from "../shared/container";
import { Count } from "../shared/count";
import { DecrementButton } from "../shared/decrement-button";
import { IncrementButton } from "../shared/increment-button";
import { LoggingButton } from "../shared/logging-button";
import { Stack } from "../shared/stack";
import { Title } from "../shared/title";

/**
 * ボタンを押すとコンポーネントとその子コンポーネントが再レンダリングされる
 */
export const Counter2 = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);

  const decrement = () => setCount((prev) => prev - 1);

  return (
    <Container>
      <Title>Counter2</Title>
      <Count>{count}</Count>
      <Stack>
        <IncrementButton onClick={increment} />
        <DecrementButton onClick={decrement} />
        <LoggingButton loggingValue={count} />
      </Stack>
    </Container>
  );
};
