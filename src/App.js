import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home/Home"
import FilmDetail from "./pages/FilmDetail/FilmDetail"

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={ <Home/> } />
        <Route path="/film/:id" element={ <FilmDetail/> } />
      </Routes>
    </div>
  )
}