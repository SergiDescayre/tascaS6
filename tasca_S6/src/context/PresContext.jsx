import { createContext, useState,useContext } from "react";

const PresContext = createContext()

const ContextProvider = ({children}) => {
    const [totalPresupost , setTotalPresupost] = useState(300)
    const [presupost , setPresupost] = useState([
        {
            id:1,
            title : "SEO",
            description : "Programació de una web responsive completa",
            price : 300,
            check : false,
            numberPage : 0,
            numberLanguage : 0,
            totalPrice : 0
        },
        {
            id:2,
            title : "ADS",
            description : "Programació de una web responsive completa",
            price : 400,
            check : false,
            numberPage : 0,
            numberLanguage : 0,
            totalPrice : 0
        },
        {
            id:3,
            title : "WEB",
            description : "Programació de una web responsive completa",
            price : 500,
            check : false,
            numberPage : 0,
            numberLanguage : 0,
            totalPrice : 0
        },
    ])

    return(
        <PresContext.Provider value={{presupost,setPresupost,totalPresupost}}>
            {children}
        </PresContext.Provider>
    )
}

export default ContextProvider

export const usePresContext = () => useContext(PresContext)