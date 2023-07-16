import styles from "components/atoms/Input/style.module.css";
import React from "react";

type Props = {
  placeholder: string;
  onChangeHandler: React.ChangeEventHandler<HTMLInputElement>;
};

export function Input({ placeholder, onChangeHandler }: Props) {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
}
