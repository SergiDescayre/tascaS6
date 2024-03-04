import Card from "../components/Card"
import HeaderPage from "../components/HeaderPage"
import TotalPrice from "../components/TotalPrice"
import { usePresContext } from "../context/PresContext"
import { Link } from "react-router-dom"

const Index = () => {
    const {presupost, setPresupost} = usePresContext()
    return (
        <>
        <HeaderPage />
        {
            presupost.map(press => <Card key={press.id} press={press}/>)
        }
      
        <TotalPrice />
        
        <div className="container text-end mt-2">
            <Link to="/" className="btn btn-primary">Tornar a benvinguda</Link>
        </div>
        
        </>
    )
}

export default Index