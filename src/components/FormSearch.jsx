import { useRef } from "react"

const FormSearch = ({setIdLocation, randomID}) => {

    const idLocationValue = useRef()

    const handleSubmmit = (e) => {
        e.preventDefault()
        const inputValue = idLocationValue.current.value.trim()

        if (inputValue === '') {
          setIdLocation(randomID)
        } else {
          setIdLocation(inputValue)
        }
        
    }



  return (
    <form onSubmit={handleSubmmit}>
        <input 
            placeholder="Enter ID location" 
            type="number" 
            ref={idLocationValue}            
        />
        <button>Search</button>
    </form>
  )
}

export default FormSearch
