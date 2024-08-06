import { type ComponentPropsWithoutRef, memo } from "react";

type Props = ComponentPropsWithoutRef<"h2">;

export const Title = ({ children, ...rest }: Props) => <h2 {...rest}>{children}</h2>;

export const TitleMemo = memo(Title);
