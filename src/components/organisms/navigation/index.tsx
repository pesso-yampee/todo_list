import Link from "next/link";
import styles from "./style.module.css";
import { PAGE_PATH } from "constants/pagePath";

export function Navigation() {
  return (
    <div className={styles.flexContainer}>
      <Link href={PAGE_PATH.TOP} className={styles.link}>
        Top
      </Link>
      <Link href={PAGE_PATH.CREATE} className={styles.link}>
        Create
      </Link>
    </div>
  );
}
