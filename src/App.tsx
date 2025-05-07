import { useState } from 'react'
import reactLogo from './assets/react.svg'
import sassLogo from './assets/sass.svg'
import viteLogo from '/vite.svg'
import styles from './App.module.sass'

export const App = () => {
  const [count, setCount] = useState(0)

  return (
    <main className={styles.app}>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className={styles.react} alt="React logo" />
        </a>
        <a href="https://sass-lang.com" target="_blank">
          <img src={sassLogo} className={styles.logo} alt="Sass logo" />
        </a>
      </div>
      <h1>Vite + React + Sass</h1>
      <div className={styles.card}>
        <button onClick={() => setCount(count => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={styles.readTheDocs}>Click on the Vite and React logos to learn more</p>
    </main>
  )
}
