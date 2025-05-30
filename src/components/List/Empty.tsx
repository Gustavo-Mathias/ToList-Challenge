import styles from './Empty.module.css'

export function Empty() {
  return (
    <div className={styles.container}>
      <img src={`${import.meta.env.BASE_URL}Clipboard.svg`} alt="Ícone de prancheta" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}