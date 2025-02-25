import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { StoreContext } from './context/StoreContext'
import Pagination from './components/Pagination'

function App() {

  const { recipes, currPage, noOfPages } = useContext(StoreContext);


  return (

    <div className="recipes-container">
      {
        recipes.slice(currPage, 10).map((item) => {
          return (
            <div className="recipe-card">
              <img src={item.image} alt={item.name} width={"100px"} />
              <span>{item.name}</span>
            </div>
          )
        })
      }
      <Pagination />

    </div>

  )
}

export default App
