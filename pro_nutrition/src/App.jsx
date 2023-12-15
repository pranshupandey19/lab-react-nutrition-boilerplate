import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import FoodBox from './components/FoodBox'
import foodData from '../../resources/FoodData'

function App() {

  const [search , setSearch] = useState("")

  const filteredData = foodData.filter((e) => {
    return e.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <>
      <h1>PRO NUTRITION 🥝</h1>
      <Search setSearch={setSearch} />

      {filteredData.length == 0 ? (
        <h1>Not Found</h1>
      ) : (
        filteredData.map((e, i) => {
          return <FoodBox data={e} index={i} key={i} />
        })
      )}

    </>
  )
}

export default App
