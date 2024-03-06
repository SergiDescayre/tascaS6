import { useState } from "react"
import Card from "../components/Card"
import HeaderPage from "../components/HeaderPage"
import NewBudget from "../components/NewBudget"
import TotalPrice from "../components/TotalPrice"
import { usePresContext } from "../context/PresContext"
import { Link } from "react-router-dom"
import ListOfBudgets from "./ListOfBudgets"
import torna from "../assets/return.svg"

const Index = () => {
    const { presupost, setPresupost } = usePresContext()
    const [isChecked , setIsChecked] = useState(false)

    const handleInput = (e) => {
        setIsChecked(e.target.checked)
    }

    return (
        <>
            <HeaderPage />
            <div className="container mt-3">
                <Link to="/" >
                    <img src={torna}></img>
                </Link>
            </div>
            <div className="mb-5 form-check form-switch d-flex gap-3 justify-content-center">
                <label className="form-check-label me-5" htmlFor="flexSwitchCheckChecked">Pagament anual</label>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={handleInput} />
                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Pagament mensual</label>
            </div>
            {
                presupost.map(press => <Card key={press.id} press={press} isChecked={isChecked} />)
            }

            <TotalPrice />
            <NewBudget />
            <ListOfBudgets />

        </>
    )
}

export default Index