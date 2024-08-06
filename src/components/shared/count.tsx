import { type ComponentPropsWithoutRef, memo } from "react";

type Props = ComponentPropsWithoutRef<"span">;

export const Count = ({ children, ...rest }: Props) => <span {...rest}>{children}</span>;

export const CountMemo = memo(Count);
