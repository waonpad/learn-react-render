import { type ComponentPropsWithoutRef, memo } from "react";

type Props = Omit<ComponentPropsWithoutRef<"button">, "type">;

export const IncrementButton = ({ className, ...rest }: Props) => (
  <button {...rest} type="button" className={`border border-green-600 ${className ?? ""}`}>
    Increment
  </button>
);

export const IncrementButtonMemo = memo(IncrementButton);
