
import './App.css'
import Home from "./pages/Home"
import {Link} from "react-router-dom"


function App() {
  return (
    <>
      <Home />
      <Link to="/calculadora" className="btn btn-primary">Calculadora</Link>
    </>
  )
}

export default App
