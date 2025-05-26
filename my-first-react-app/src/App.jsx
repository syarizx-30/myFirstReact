import Search from './components/Search'
import { useState } from 'react'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
<main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Temukan <span className="text-gradient">Movies</span> yang Dapat Anda Nikmati Tanpa Repot</h1>
        </header>

        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <h1 className="text-white">{searchTerm}</h1>
      </div>    
    </main>
  )
}
export default App