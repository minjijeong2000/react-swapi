import './App.css';
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import StarshipsList from './pages/StarshipsList/StarshipsList'
import StarshipPage from './pages/StarshipsList/StarshipPage/StarshipPage'

function App() {
  return (
    <>
    <NavBar />
    <Routes>
      <Route path='/starships-list' element={<StarshipsList/>}/>
      <Route path='/starships' element={<StarshipPage/>}/>
    </Routes>     
    </>
  );
}

export default App;
