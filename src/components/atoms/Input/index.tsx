import { ChangeEvent } from "react";
import styles from "components/atoms/Input/style.module.css";

type Props = {
  placeholder: string | undefined;
  onChange: ((e: ChangeEvent<HTMLInputElement>) => void) | undefined;
  name: string;
  value: string | undefined;
};

export function Input({ placeholder, onChange, name, value }: Props) {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
}
