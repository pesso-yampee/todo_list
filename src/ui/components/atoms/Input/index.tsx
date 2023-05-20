
import styles from "ui/components/atoms/Input/style.module.css";

type Props = {
  placeholder: string
};

export function Input({ placeholder }: Props) {
  return <input type="text" placeholder={placeholder} className={styles.input} />;
}