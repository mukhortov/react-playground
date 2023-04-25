import { useState } from 'react'
import styles from './App.module.sass'
import Card from './components/card/Card'
import { Results } from './interfaces/interfaces'
import { debounce } from './utils/debounce'

export const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<Results[]>([])

  let controller: AbortController | undefined

  const handleSearch = debounce(async (value: string) => {
    if (controller) {
      controller.abort()
    }

    controller = new AbortController()
    const { signal } = controller

    try {
      const response = await fetch(`https://itunes.apple.com/search?term=${value}`, { signal })
      const data = await response.json()
      const results = data.results
      setSearchResults(results)
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('Aborted')
      } else {
        console.error(error)
      }
    }
  }, 500)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    handleSearch(event.target.value)
  }

  return (
    <div className={styles.root}>
      <header className={styles.header}>React Playground</header>

      <main className={styles.main}>
        <label htmlFor="search-something" hidden>
          Search something
        </label>
        <input type="text" name="search-something" value={searchTerm} onChange={handleChange} />
        <div className="card-container">
          {searchResults.map((item: Results, index: number) => {
            return <Card {...item} key={`${item.trackId}-${index}`} />
          })}
        </div>
      </main>
    </div>
  )
}
