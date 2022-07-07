import { useEffect, useState } from "react";
import { getDetails } from "../../../services/sw-api";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const StarshipPage = () => {
    const [starshipDetails, setStarshipDetails] = useState({})
    const location = useLocation()

    useEffect(() => {
        const fetchStarshipDetails = async () => {
            const starshipData = await getDetails(location.state.starshipsModel.url)
            setStarshipDetails(starshipData)
        }
        fetchStarshipDetails()
    },[location.state.starshipsModel.url])

    return(
        <div className="icon-page">
            <h1>Starship Page</h1>
            <h2>Name: {starshipDetails.name}</h2>
            <h2>Model: {starshipDetails.model}</h2>
            <h2>{<Link to='/starships-list' id="return">Return</Link>}</h2>
        </div>
    )
}

export default StarshipPage