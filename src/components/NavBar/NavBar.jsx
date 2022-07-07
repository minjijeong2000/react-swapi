import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <header className='App-header'>
            <Link to='/starships-list'  id="title">Starships List</Link>
        </header>

    )
}

export default NavBar