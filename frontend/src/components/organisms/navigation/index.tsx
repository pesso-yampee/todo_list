import { PAGE_PATH } from 'constants/pagePath'
import Link from 'next/link'
import styles from './style.module.css'

export function Navigation() {
  return (
    <div className={styles.flexContainer}>
      <Link href={PAGE_PATH.CREATE} className={styles.link}>
        Create
      </Link>
    </div>
  )
}
