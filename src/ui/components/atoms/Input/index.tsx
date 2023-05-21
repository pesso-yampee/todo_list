
import { ChangeEvent, KeyboardEvent } from "react";
import styles from "ui/components/atoms/Input/style.module.css";

type Props = {
  placeholder: string;
  keyDownEvent: ((e: KeyboardEvent<HTMLInputElement>) => void) | undefined;
  changeEvent: ((e: ChangeEvent<HTMLInputElement>) => void) | undefined;
};

export function Input({ placeholder, keyDownEvent, changeEvent }: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className={styles.input}
      onKeyDown={keyDownEvent}
      onChange={changeEvent}
    />
  );
}