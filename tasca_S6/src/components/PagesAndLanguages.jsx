import { usePresContext } from "../context/PresContext"
import {useState} from "react"
import Modal from "./Modal"
import minus from "../assets/minus.svg"
import plus from "../assets/plus.svg"
import info from "../assets/Outline.svg"

const PagesAndLanguages = ({ press }) => {
  const { addPage, lessPage, addLanguage, lessLanguage } = usePresContext()
  const [infoPlural , setInfoPlural]  = useState("")
  const [infoSingular , setInfoSingular]  = useState("")

  const hundlePages = () => {
    setInfoPlural("pàgines")
    setInfoSingular("pàgina")
  }

  const hundleLanguages = () => {
    setInfoPlural("llenguatges")
    setInfoSingular("llenguatge")
  }

  return (
    <>
      <div className="d-flex justify-content-end gap-2 flex-wrap align-items-center mt-2">
        <div>
          <span onClick={hundlePages} className="more_info" data-bs-toggle="modal" data-bs-target="#pagines">Més info</span>
          <span type="button" >Pàgines</span>
        </div>
        <img onClick={() => lessPage(press.id)} src={minus}></img>
        <input type="text" readOnly value={press.numberPage} className="form-control" style={{ height: 30, width: 40 }} />
        <img onClick={() => addPage(press.id)} src={plus}></img>
      </div>
      <div className="d-flex justify-content-end gap-2 flex-wrap align-items-center mt-2">
        <div>
    
        <span onClick={hundleLanguages} className="more_info" data-bs-toggle="modal" data-bs-target="#pagines">Més info</span>
        <span  data-bs-toggle="modal" data-bs-target="#pagines">Llenguatges</span>
        </div>
       
        <img onClick={() => lessLanguage(press.id)} src={minus}></img>
        
        <input type="text" readOnly value={press.numberLanguage} className="form-control" style={{ height: 30, width: 40 }} />
        <img onClick={() => addLanguage(press.id)} src={plus}></img>
      
      </div>
      <Modal infoSingular={infoSingular} infoPlural={infoPlural} />
    </>

  )
}

export default PagesAndLanguages