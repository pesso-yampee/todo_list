import styles from "components/atoms/Input/style.module.css";
import React from "react";

type Props = {
  placeholder?: string;
  name?: string;
  value?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

export function Input({ placeholder, onChange, name, value }: Props) {
  return (
    <input
      type="text"
      name={name}
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}
