import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllStarships } from "../../services/sw-api";

const StarshipsList = () => {
    const [starships, setStarships] = useState([])

    useEffect(() => {
        const fetchStarshipsList = async () => {
            const starshipsData = await getAllStarships()
            setStarships(starshipsData.results)
        }
        fetchStarshipsList()
    }, [])

    return (
        <>
            <div>
                <div className='icon-container'>
                    {starships.length ?
                    <>
                    {starships.map(starshipsModel =>
                        <Link key={starshipsModel.name} to="/starships" state={{ starshipsModel }} >
                        <div className="class-div" >
                          <div id="modelName">{starshipsModel.name}</div>
                        </div>
                      </Link>
                        )}
                    </>
                    :
                    <>
                        <h2>Loading..</h2>
                    </>}
                </div>
            </div>
        </>
    )
}

export default StarshipsList