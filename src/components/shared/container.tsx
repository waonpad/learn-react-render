import { type ComponentPropsWithoutRef, memo } from "react";

type Props = ComponentPropsWithoutRef<"div">;

export const Container = ({ children, className, ...rest }: Props) => (
  <div {...rest} className={`flex w-fit flex-col items-center space-y-2 border border-gray-600 p-1 ${className ?? ""}`}>
    {children}
  </div>
);

export const ContainerMemo = memo(Container);
