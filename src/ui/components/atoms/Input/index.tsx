
import { KeyboardEvent } from "react";
import styles from "ui/components/atoms/Input/style.module.css";

type Props = {
  placeholder: string;
  keyDownEvent: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export function Input({ placeholder, keyDownEvent }: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.input}
      onKeyDown={keyDownEvent}
    />
  );
}