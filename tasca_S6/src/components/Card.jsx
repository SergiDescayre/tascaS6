
import { usePresContext } from "../context/PresContext";
import PagesAndLanguages from "./PagesAndLanguages";

const Card = ({ press, isChecked }) => {
  const { handleChecked } = usePresContext();

  return (

    <div className="container px-5 py-3 mt-2 border rounded-3 shadow w-75">

      <div className="container d-flex justify-content-between flex-wrap">
        <div className="d-flex flex-column gap-3 py-4">
          <div className="d-flex align-items-center gap-4">
            <h4 className="fw-bold">{press.title}</h4>
            {
              isChecked && <div className="text-center"><h5 className="text-danger">Estalvia un 20 %</h5></div>
            }
          </div>
          <div className="mt-2">{press.description}</div>
        </div>
        <div className="d-flex align-items-center justify-content-center w-25">
          {press.price}
        </div>
        <div className="d-flex align-items-center gap-3">
          <label htmlFor="add">afegir</label>
          <input
            type="checkBox"
            id="add"
            checked={press.check}
            onChange={() => handleChecked(press.id)}
          />
        </div>
      </div>
      {press.check &&
        <PagesAndLanguages press={press} />
      }
    </div>
  );
};

export default Card;
