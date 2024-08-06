import { type ComponentPropsWithoutRef, type MouseEvent, memo, useState } from "react";

type Porps = Omit<ComponentPropsWithoutRef<"button">, "type"> & {
  loggingValue: number | string;
};

export const LoggingButton = ({ className, loggingValue, onClick, ...rest }: Porps) => {
  const [v, setV] = useState<string>("Log");

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    console.log(loggingValue);

    if (onClick) {
      onClick(e);
    }

    setV("Logged");
  };

  return (
    <button {...rest} type="button" className={`border border-blue-600 ${className ?? ""}`} onClick={handleClick}>
      {v}
    </button>
  );
};

export const LoggingButtonMemo = memo(LoggingButton);
