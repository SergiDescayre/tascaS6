import React, { createContext, useState, useContext, useEffect } from "react";
import { infoPresupost } from "../data/variables";

const PresContext = createContext();

const ContextProvider = ({ children }) => {
  const [totalPresupost, setTotalPresupost] = useState(0);
  const [isChecked , setIsChecked] = useState(false)
  const [listOfBudgets, setListOfBudgets] = useState([])
  const [presupost, setPresupost] = useState(infoPresupost);
  const [newBudget, setNewBadget] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const resetInputs = () => {
    setNewBadget({
      name: "",
      phone: "",
      email: "",
    })
    setTotalPresupost(0)
    setPresupost(infoPresupost)
  }
  
  const updateSubtotal = () => {
    presupost.map(press => {
      if(press.check){
        press.totalPrice = ((press.numberLanguage + press.numberPage)*30) + press.price
      }
    })
  }

  const updateTotalPresupost = () => {
    let total =  presupost.reduce((a,b) =>a + b.totalPrice,0)
    setTotalPresupost(total)
  }

  useEffect(()=> {
    updateTotalPresupost()
    updateSubtotal()
    updateTotalPresupost()
  
  },[presupost])

  const handleChecked = (id) => {
    setPresupost(
      presupost.map((press) =>
        press.id === id ? { ...press, check: !press.check, totalPrice: ((press.numberLanguage + press.numberPage)*press.addExtra) + press.price } : press
      )
    );
  };

  const addPage = (id) => {
    setPresupost(
      presupost.map(press =>
        press.id === id ? { ...press, numberPage: press.numberPage + 1, } : press)
    )  
  };

  const lessPage = (id) => {
    setPresupost(
      presupost.map(press =>
        (press.id === id && press.numberPage !== 0) ? { ...press, numberPage: press.numberPage - 1  } : press)
    )

  };

  const addLanguage = (id) => {
    setPresupost(
      presupost.map(press =>
        press.id === id ? { ...press, numberLanguage: press.numberLanguage + 1 } : press)
    )
  };

  const lessLanguage = (id) => {
    setPresupost(
      presupost.map(press =>
        (press.id === id && press.numberLanguage !== 0) ? { ...press, numberLanguage: press.numberLanguage - 1} : press)
    )
  };

  return (
    <PresContext.Provider
      value={{
        presupost,
        totalPresupost,
        newBudget, 
        listOfBudgets,
        isChecked , 
        setIsChecked,
        setTotalPresupost,
        resetInputs, 
        setListOfBudgets,
        setNewBadget,
        handleChecked,
        addPage,
        lessPage,
        addLanguage,
        lessLanguage
      }}
    >
      {children}
    </PresContext.Provider>
  );
};

export default ContextProvider;

export const usePresContext = () => useContext(PresContext);
