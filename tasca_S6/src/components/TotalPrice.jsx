import { usePresContext } from "../context/PresContext";
import trash from "../assets/trash.svg"
const TotalPrice = () => {
  const {totalPresupost,resetInputs} = usePresContext()
  return (
    <div className=" container d-flex justify-content-end  gap-3 w-75 pt-5">
      <h5 className="mt-1 ">Preu Pressupostat:</h5>
      <span className="price">{totalPresupost} €</span>
      <div>
       <img onClick={() => resetInputs()} src={trash} style={{width:20}} alt="trash" type="button"></img>
      </div>
    </div>
  );
};

export default TotalPrice;
