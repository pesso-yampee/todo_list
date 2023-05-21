import { ReactNode } from "react";
import styles from "./style.module.css";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  deleteTodo: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel: string;
  children: ReactNode;
};

export function Button({ type, deleteTodo, ariaLabel, children }: Props) {
  return (
    <button
      className={styles.button}
      type={type}
      aria-label={ariaLabel}
      onClick={deleteTodo}
    >
      {children}
    </button>
  );
}
