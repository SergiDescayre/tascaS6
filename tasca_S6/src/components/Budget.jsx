import { Link } from "react-router-dom";
import trash from "../assets/trash.svg";
import send from "../assets/send.svg";
import { usePresContext } from "../context/PresContext";

const Budget = ({ budget, hundleRemove }) => {

const { isChecked } = usePresContext();


console.log(isChecked)
  return (
    <div className="d-flex justify-content-between flex-wrap container px-5 py-3 my-2 border rounded-3 shadow w-75">
      <div className="d-flex flex-column w-25">
        <h3>{budget.name}</h3>
        <span className="text-secondary">{budget.email}</span>
        <span className="text-secondary">{budget.phone}</span>
        <Link
          to={`/calculadora?id=${budget.idList}&pages=${budget.numberPage}&lang=${budget.numberLanguage}`}
        >
          <img src={send} alt="send"></img>
        </Link>
      </div>
      <div className="d-flex flex-column w-50">
        <span>Serveis contractats:</span>
        <div>
          <span className="pe-2">{budget.title}</span>
          {budget.numberLanguage > 0 && (
            <span className="pe-2">{budget.numberLanguage} llenguatges</span>
          )}
          {budget.numberPage > 0 && <span>{budget.numberPage} pàgines</span>}
        </div>
      </div>
      <div className="d-flex flex-column">
        <div>
          <span>Total:</span>
          <img
            type="button"
            onClick={() => hundleRemove(budget.idList)}
            className="trash_butget ms-4"
            src={trash}
            alt="trash"
          />
        </div>
        <h3>{isChecked ? budget.totalPrice - budget.totalPrice *20/100 :  budget.totalPrice } €</h3>
      </div>
    </div>
  );
};

export default Budget;
