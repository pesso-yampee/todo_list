import { ChangeEvent, KeyboardEvent } from "react";
import styles from "ui/components/atoms/Input/style.module.css";

type Props = {
  placeholder: string;
  onKeyDown: ((e: KeyboardEvent<HTMLInputElement>) => void) | undefined;
  onChange: ((e: ChangeEvent<HTMLInputElement>) => void) | undefined;
};

export function Input({ placeholder, onKeyDown, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.input}
      onKeyDown={onKeyDown}
      onChange={onChange}
    />
  );
}
