import { usePresContext } from "../context/PresContext";
import trash from "../assets/trash.svg"
import { useEffect, useState } from "react";
const TotalPrice = () => {
  const {totalPresupost,resetInputs,isChecked} = usePresContext()
  const [total ,setTotal] = useState(totalPresupost)
  console.log(isChecked)

  const updateTotalPresupost = () => {
    if(isChecked){
      setTotal(totalPresupost-totalPresupost*20/100)
    }else{
      setTotal(totalPresupost)
    }
  }
  useEffect(()=>{
    updateTotalPresupost()
  },[totalPresupost,isChecked])
  return (
    <div className=" container d-flex justify-content-end  gap-3 w-75 pt-5">
      <h5 className="mt-1 ">Preu Pressupostat:</h5>
      <span className="price">{total} €</span>
      <div>
       <img onClick={() => resetInputs()} src={trash} style={{width:20}} alt="trash" type="button"></img>
      </div>
    </div>
  );
};

export default TotalPrice;
