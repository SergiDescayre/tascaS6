
import { usePresContext } from "../context/PresContext"
import { useState, useEffect } from "react"
import lupa from "../assets/lupa.svg"
import arrowDown from "../assets/arrow-down.svg"
import arrowUp from "../assets/arrow_up.svg"

const ListOfBudgets = () => {

    const { listOfBudgets } = usePresContext()
    const [isOrder, setIsOrder] = useState(true)
    const [arrayFound, setArrayFound] = useState(listOfBudgets)
    const [wordToFound, setWordToFound] = useState("")


    const hundleOrder = () => {
        setIsOrder(!isOrder)
    }

    const hundleFound = (e) => {
        setWordToFound(e.target.value)
    }

    const found = () => {
        const newArray = listOfBudgets.filter(budget => (budget.name.toLowerCase().includes(wordToFound.toLowerCase())) || (budget.email.toLowerCase().includes(wordToFound.toLowerCase())))
        setArrayFound(newArray)
    }

    const ascTotal = () => {
        setArrayFound(arrayFound.sort((a,b) => a.totalPrice - b.totalPrice))
    }

    const descTotal = () => {
        setArrayFound(arrayFound.sort((a,b) => b.totalPrice - a.totalPrice))
    }

    useEffect(() => {
        found()
    }, [wordToFound, listOfBudgets])



    return (
        <div className="my-5">
            {
                arrayFound.length > 0
                &&
                <div className="d-flex align-items-center container">
                    <h3 className="fw-bold container my-5">Pressupostos en curs</h3>

                </div>

            }
            <div className="d-flex  justify-content-end container">
            <div className="d-flex gap-3 w-25">
                <div className="input-group mb-3 align-items-center">
                    <input onChange={hundleFound} type="text" value={wordToFound} className="form-control" />
                    <span type="button" className="input-group-text" id="basic-addon2">
                        <img src={lupa} alt="lupa"></img>
                    </span>
                </div>
                <div  onClick={hundleOrder}className="d-flex align-items-center mb-4">
                    <span className="fs-5 me-2">Import</span>
                    {
                        isOrder ? <img  onClick={ascTotal}src={arrowDown}></img>
                            : <img onClick={descTotal} src={arrowUp}></img>
                    }

                </div>
            </div>

            </div>

            {
                arrayFound.map(budget => {
                    return (
                        <div key={budget.idList} className="d-flex justify-content-between flex-wrap container px-5 py-3 my-2 border rounded-3 shadow w-75">
                            <div className="d-flex flex-column w-25">
                                <h4>{budget.name}</h4>
                                <span>{budget.email}</span>
                                <span>{budget.phone}</span>
                            </div>
                            <div className="d-flex flex-column w-50">
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

