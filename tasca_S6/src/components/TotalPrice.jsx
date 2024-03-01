import { usePresContext } from "../context/PresContext";

const TotalPrice = () => {
  const {totalPresupost} = usePresContext()
  return (
    <div className=" container d-flex justify-content-end gap-5 w-75 pt-5">
      <h4>Preu Pressupostat:</h4>
      <h4>{totalPresupost} €</h4>
    </div>
  );
};

export default TotalPrice;
