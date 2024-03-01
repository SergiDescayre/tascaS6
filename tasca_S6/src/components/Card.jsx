import { useState } from "react";

const Card = ({ press, setPresupost }) => {
  const [isChecked, setIschecket] = useState(false);
  const handleChecked = () => {
    setIschecket(!isChecked);
  };

  return (
    <div className="container px-5 py-3 mt-5 border rounded-3 shadow w-75">
      <div className="container d-flex justify-content-between">
        <div clasName="d-flex flex-column">
          <div className="fw-bold">{press.title}</div>
          <div className="mt-2">{press.description}</div>
        </div>
        <div className="d-flex align-items-center justify-content-center w-50">
          {press.price}
        </div>
        <div className="d-flex align-items-center gap-3">
          <label htmlFor="add">afegir</label>
          <input
            type="checkBox"
            id="add"
            checked={press.check}
            onChange={handleChecked}
          />
        </div>
      </div>
      {isChecked && <div>chequeado</div>}
    </div>
  );
};

export default Card;
