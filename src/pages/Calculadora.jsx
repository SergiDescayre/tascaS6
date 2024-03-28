
import Card from "../components/Card"
import HeaderPage from "../components/HeaderPage"
import NewBudget from "../components/NewBudget"
import TotalPrice from "../components/TotalPrice"
import { usePresContext } from "../context/PresContext"
import { Link } from "react-router-dom"
import ListOfBudgets from "../components/ListOfBudgets"
import torna from "../assets/return.svg"
import SwitchPay from "../components/SwitchPay"

const Index = () => {
    const { presupost,isChecked  } = usePresContext()
  
    return (
        <>
            <HeaderPage />
            <div className="container mt-3">
                <Link to="/" >
                    <img  class src={torna}></img>
                </Link>
                <SwitchPay />
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