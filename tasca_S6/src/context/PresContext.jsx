import { createContext, useState, useContext } from "react";
import { infoPresupost } from "../data/variables";

const PresContext = createContext();

const ContextProvider = ({ children }) => {
  const [totalPresupost, setTotalPresupost] = useState(300);
  const [presupost, setPresupost] = useState(infoPresupost);

  const handleChecked = (id) => {
    setPresupost(
      presupost.map((press) =>
        press.id === id ? { ...press, check: true } : press
      )
    );
    
  };

  const addPage = (id) => {
    setPresupost(
        presupost.map(press => 
        press.id===id ? { ...press, numberPage:press.numberPage+1} : press)
    )
  };
  const lessPage = (id) => {
    setPresupost(
        presupost.map(press => 
        (press.id===id && press.numberPage !==0) ? { ...press, numberPage:press.numberPage-1} : press)
    )
  };

  const addLanguage = (id) => {
    setPresupost(
        presupost.map(press => 
        press.id===id ? { ...press, numberLanguage:press.numberLanguage+1} : press)
    )
  };

  const lessLanguage = (id) => {
    setPresupost(
        presupost.map(press => 
        (press.id===id && press.numberLanguage !==0) ? { ...press, numberLanguage:press.numberLanguage-1} : press)
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
