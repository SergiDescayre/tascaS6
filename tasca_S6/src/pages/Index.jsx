import Card from "../components/Card"
import HeaderPage from "../components/HeaderPage"
import NewBudget from "../components/NewBudget"
import TotalPrice from "../components/TotalPrice"
import { usePresContext } from "../context/PresContext"
import { Link } from "react-router-dom"
import ListOfBudgets from "./ListOfBudgets"

const Index = () => {
    const {presupost, setPresupost} = usePresContext()
    return (
        <>
        <HeaderPage />
        <div className="container text-end mt-2">
            <Link to="/" className="btn btn-primary">Tornar a benvinguda</Link>
        </div>
        {
            presupost.map(press => <Card key={press.id} press={press}/>)
        }

        <TotalPrice />
        <NewBudget />
        
        
        <ListOfBudgets />
        
        </>
    )
}

export default Index