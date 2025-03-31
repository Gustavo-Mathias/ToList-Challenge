import styles from "./Header.module.css";


export function Header() {
    return (
        <header className={styles.container}>
            <img src={`${import.meta.env.BASE_URL}logo.svg`} alt="Logo da aplicação" />
        </header>
    )
}