import { ReactNode } from "react";
import styles from "./style.module.css";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  clickEvent: () => void;
  ariaLabel: string;
  children: ReactNode;
};

export function Button({ type, clickEvent, ariaLabel, children }: Props) {
  return (
    <button
      className={styles.button}
      type={type}
      aria-label={ariaLabel}
      onClick={clickEvent}
    >
      {children}
    </button>
  );
}
