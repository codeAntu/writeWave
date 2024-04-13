import { forwardRef } from "react";
import { Input as UIInput } from "@/components/ui/input";

interface InputProps {
  className?: string;
  placeholder?: string;
  value?: string;
  onChange?: Function;
  disabled?: boolean;
}

function blank_fn() {}

export default function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  className,
  inputRef,
  onKeyDown = blank_fn,
}: {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${className} input`}
      ref={inputRef}
      onKeyDown={onKeyDown}
    />
  );
}
