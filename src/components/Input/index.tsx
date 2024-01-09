import { cn } from "@src/utils/commonUtils";
import type { FC, RefObject } from "react";

interface Props {
  className?: string;
  placeHolder?: string;
  type: string;
  value?: string;
  onChange?: () => void;
  inputValueRef?: RefObject<HTMLInputElement>;
  defaultValue?: string;
}

const Input: FC<Props> = ({
  className,
  placeHolder,
  type,
  value,
  onChange,
  inputValueRef,
  defaultValue,
}) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      value={value}
      defaultValue={defaultValue}
      autoFocus
      ref={inputValueRef}
      className={cn(
        "appearance-none focus:outline-none leading-tight w-full",
        className
      )}
      onChange={() => onChange && onChange()}
    />
  );
};

export default Input;
