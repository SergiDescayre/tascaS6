import { usePresContext } from "../context/PresContext";
import { useState, useEffect } from "react";
import Budget from "./Budget";
import lupa from "../assets/lupa.svg";
import arrowDown from "../assets/arrow-down.svg";
import arrowUp from "../assets/arrow_up.svg";


const ListOfBudgets = () => {
  const { listOfBudgets, setListOfBudgets } = usePresContext();
  const [isOrder, setIsOrder] = useState(true);
  const [arrayFound, setArrayFound] = useState(listOfBudgets);
  const [wordToFound, setWordToFound] = useState("");
  

  const hundleFound = (e) => {
    setWordToFound(e.target.value);
  };

  const found = () => {
    const newArray = listOfBudgets.filter(
      (budget) =>
        budget.name.toLowerCase().includes(wordToFound.toLowerCase()) ||
        budget.email.toLowerCase().includes(wordToFound.toLowerCase())
    );
    setArrayFound(newArray);
  };

  const ascTotal = () => {
    setArrayFound(arrayFound.sort((a, b) => a.totalPrice - b.totalPrice));
    setIsOrder(false);
  };

  const descTotal = () => {
    setArrayFound(arrayFound.sort((a, b) => b.totalPrice - a.totalPrice));
    setIsOrder(true);
  };

  const hundleRemove = (id) => {
    const arrayRemove = arrayFound.filter((budget) => budget.idList !== id);
    setArrayFound(arrayRemove);
    setListOfBudgets(arrayRemove);
  };

  useEffect(() => {
    found();
  }, [wordToFound, listOfBudgets]);

  return (
    <div className="my-5">
      <div className="d-flex align-items-center container">
        {arrayFound.length === 0 ? (
          <h3 className="fw-bold container my-5">
            No s'han trobat pressupostos
          </h3>
        ) : (
          <h3 className="fw-bold container my-5">Pressupostos en curs</h3>
        )}
      </div>

      <div className="d-flex  justify-content-end container">
        <div className="d-flex gap-3 w-25">
          <div className="input-group mb-3 align-items-center">
            <input
              onChange={hundleFound}
              type="text"
              value={wordToFound}
              className="form-control"
            />
            <span type="button" className="input-group-text" id="basic-addon2">
              <img src={lupa} alt="lupa"></img>
            </span>
          </div>
          <div className="d-flex align-items-center mb-4">
            <span className="fs-5 me-2">Import</span>
            {isOrder ? (
              <img onClick={ascTotal} src={arrowDown}></img>
            ) : (
              <img onClick={descTotal} src={arrowUp}></img>
            )}
          </div>
        </div>
      </div>

      {
        arrayFound.map(budget => <Budget key={budget.idList} budget={budget} hundleRemove={hundleRemove} />)
      }
    </div>
  );
};

export default ListOfBudgets;
