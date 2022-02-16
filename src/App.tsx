import styles from './App.module.sass'

export const App = () => {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        React Playground
      </header>
      <main className={styles.main}>
        lorem ipsum
      </main>
    </div>
  )
}
