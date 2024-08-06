import { type ComponentPropsWithoutRef, memo } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Stack = ({ children, className, ...rest }: Props) => {
  return (
    <div {...rest} className={`flex space-x-2 p-2 ${className ?? ""}`}>
      {children}
    </div>
  );
};

export const StackMemo = memo(Stack);
