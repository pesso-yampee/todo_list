import { ReactNode } from "react";
import styles from "./style.module.css";

type Props = {
  type: "button" | "submit" | "reset" | undefined;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel: string;
  children: ReactNode;
  className: string;
};

export function Button({ type, onClick, ariaLabel, children, className }: Props) {
  return (
    <button
      className={styles[className]}
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
