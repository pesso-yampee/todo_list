import { Link } from "react-router-dom";
import styles from "./style.module.css";

export function Navigation() {
  return (
    <div className={styles.flexContainer}>
      <Link to="/" className={styles.link}>
        Top
      </Link>
      <Link to="/create" className={styles.link}>
        Create
      </Link>
    </div>
  );
}