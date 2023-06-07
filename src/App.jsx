import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationInfo from './components/LocationInfo'
import ResidentCard from './components/ResidentCard'
import FormSearch from './components/FormSearch'

function App() {

  const randomID = getRandomNumber(126)
  const [idLocation, setIdLocation] = useState(randomID)
  const url = `https://rickandmortyapi.com/api/location/${idLocation}`
  const [location, getApiLocation, hasError] = useFetch(url)

  useEffect(() => {
    getApiLocation()
  }, [idLocation])
  
  return (
    <div className='app'>

      <img className='banner' src="../banner.jpg" alt="Rick and Morty Banner" />

      <FormSearch 
        setIdLocation={setIdLocation}
        randomID={randomID}
      />

      { hasError
        ? <h2>❌ Hey! You must provide an ID from 1 to 126 😢</h2>
        : <>
            <LocationInfo location={location}/>
            <div className='resident-container'>
              { location?.residents.map( url => 
                (<ResidentCard 
                    url={url}
                    key={url}
                />))
              }
            </div>
          </> 
      }
    </div>
  )
}

export default App
