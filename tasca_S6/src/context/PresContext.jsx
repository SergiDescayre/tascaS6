import React, { createContext, useState, useContext, useEffect } from "react";
import { infoPresupost } from "../data/variables";

const PresContext = createContext();

const ContextProvider = ({ children }) => {
  const [totalPresupost, setTotalPresupost] = useState(0);
  const [presupost, setPresupost] = useState(infoPresupost);


  const updateTotalPresupost = () => {
    setTotalPresupost( presupost.reduce((a,b) =>a + b.totalPrice,0))
  }

  useEffect(()=> {
    updateTotalPresupost()
  },[presupost])


  const handleChecked = (id) => {
    setPresupost(
      presupost.map((press) =>
        press.id === id ? { ...press, check: !press.check, totalPrice: ((press.numberLanguage + press.numberPage)*30) + press.price } : press
      )
    );
  };

  const addPage = (id) => {
    setPresupost(
      presupost.map(press =>
        press.id === id ? { ...press, numberPage: press.numberPage + 1, totalPrice: ((press.numberLanguage + press.numberPage)*30) + press.price } : press)
    )

  };

  const lessPage = (id) => {
    setPresupost(
      presupost.map(press =>
        (press.id === id && press.numberPage !== 0) ? { ...press, numberPage: press.numberPage - 1 , totalPrice: ((press.numberLanguage + press.numberPage)*30) + press.price } : press)
    )
  };

  const addLanguage = (id) => {
    setPresupost(
      presupost.map(press =>
        press.id === id ? { ...press, numberLanguage: press.numberLanguage + 1 , totalPrice: ((press.numberLanguage + press.numberPage)*30) + press.price } : press)
    )
  };

  const lessLanguage = (id) => {
    setPresupost(
      presupost.map(press =>
        (press.id === id && press.numberLanguage !== 0) ? { ...press, numberLanguage: press.numberLanguage - 1, totalPrice: ((press.numberLanguage + press.numberPage)*30) + press.price } : press)
    )
  };

  return (
    <PresContext.Provider
      value={{
        presupost,
        totalPresupost,
        handleChecked,
        addPage,
        lessPage,
        addLanguage,
        lessLanguage,
      }}
    >
      {children}
    </PresContext.Provider>
  );
};

export default ContextProvider;

export const usePresContext = () => useContext(PresContext);
