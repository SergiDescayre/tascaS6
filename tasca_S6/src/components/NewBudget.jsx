import {useState} from "react"
import { usePresContext } from "../context/PresContext";

const NewBudget = () => {

const {presupost} = usePresContext()
  const [newBudget, setNewBadget] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [butgetPrint , setButgetPrint] = useState()
  const handleChange = (e) => {
    setNewBadget({
        ...newBudget,
        [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    presupost.filter(press => {
        let pressupost
        if(press.check){
            pressupost = {
                ...newBudget, ...press
            }
        }
        
        console.log(pressupost)
        setButgetPrint(pressupost)
        console.log(butgetPrint)
    })
   
   
  };

  return (
    <div className="container px-5 py-3 mt-5 border rounded-3 shadow w-75">
      <div className="fw-bold">Demanar pressupost</div>
      <form onSubmit={handleSubmit}>
        <div className="input-group mt-2">
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Nom"
            value={newBudget.name}
            onChange={handleChange}
          />
          <input
            name="phone"
            className="form-control"
            type="tel"
            placeholder="Telèfon"
            value={newBudget.phone}
            onChange={handleChange}
          />
          <input
            name="email"
            className="form-control"
            type="mail"
            placeholder="Email"
            value={newBudget.email}
            onChange={handleChange}
          />
          <input
            className="btn btn-success"
            type="submit"
            value={"Sol-licitar pressupost"}
          />
        </div>
      </form>
    </div>
  );
};

export default NewBudget;
