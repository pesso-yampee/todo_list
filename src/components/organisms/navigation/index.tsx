import Link from "next/link";
import styles from "./style.module.css";

export function Navigation() {
  return (
    <div className={styles.flexContainer}>
      <Link href="/" className={styles.link}>
        Top
      </Link>
      <Link href="/create" className={styles.link}>
        Create
      </Link>
    </div>
  );
}