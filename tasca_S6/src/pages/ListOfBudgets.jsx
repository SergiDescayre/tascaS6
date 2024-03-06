
import { usePresContext } from "../context/PresContext"
import {useState} from "react"

const ListOfBudgets = () => {

    const { listOfBudgets,totalPresupost } = usePresContext()
  
    
   
    return (
        <div className="mb-5">
            {
                listOfBudgets.length > 0 
                && 
                    <h3 className="fw-bold container text-center my-5">Pressupostos en curs</h3>
            }

            {
                listOfBudgets.map(budget => {
                    return (
                        <div key={budget.idList} className="d-flex justify-content-between flex-wrap container px-5 py-3 my-2 border rounded-3 shadow w-75">
                            <div className="d-flex flex-column">
                                <h4>{budget.name}</h4>
                                <span>{budget.email}</span>
                                <span>{budget.phone}</span>
                            </div>
                            <div className="d-flex flex-column">
                                <span>Serveis contractats:</span>
                                <div>
                                <span className="pe-2">
                                {budget.title}
                                </span>
                                {
                                    budget.numberLanguage > 0 && 
                                    <span className="pe-2">
                                        {budget.numberLanguage} llenguatges
                                    </span>
                                }
                                {
                                    budget.numberPage > 0 && 
                                    <span>
                                        {budget.numberPage} pàgines
                                    </span>
                                }

                                </div>
                            </div>
                            <div className="d-flex flex-column">
                            <span>Total:</span>
                            <h3>{budget.totalPrice} €</h3>
                            </div>

                        </div>
                    )
                })
            }
           
        </div>


    )
}

export default ListOfBudgets
