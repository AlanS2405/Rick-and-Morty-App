import { useEffect } from "react"
import useFetch from "../hooks/useFetch"

const ResidentCard = ({url}) => {

    const [resident, getApiResident] = useFetch(url)

    useEffect(() => {
      getApiResident()
    }, [])

    return (
    <article className="card">
        <header>
            <div className="header">
                <span className="status">{resident?.status}</span>
            </div>
            <img src={resident?.image} alt="" className="photo"/>
        </header>
        <section className="cardInfo">
            <h3>{resident?.name}</h3>
            <hr className="line"/>
            <ul>
                <li> <span>Specie:</span> {resident?.species}</li>
                <li> <span>Origin:</span> {resident?.origin.name}</li>
                <li> <span>Eppisodes where appear:</span> {resident?.episode.length}</li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard
