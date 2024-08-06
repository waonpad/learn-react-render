import { type ComponentPropsWithoutRef, memo } from "react";

type Props = Omit<ComponentPropsWithoutRef<"button">, "type">;

export const DecrementButton = ({ className, ...rest }: Props) => (
  <button {...rest} type="button" className={`border border-red-600 ${className ?? ""}`}>
    Decrement
  </button>
);

export const DecrementButtonMemo = memo(DecrementButton);
