import styles from 'components/atoms/pageTitle/style.module.css'

type Props = {
  text: string
}

export function PageTitle({ text }: Props) {
  return <h1 className={styles.title}>{text}</h1>
}
