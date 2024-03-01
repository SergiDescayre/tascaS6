import { usePresContext } from "../context/PresContext"

const PagesAndLanguages = ({press}) => {
    const {addPage,lessPage,addLanguage,lessLanguage} = usePresContext()

  return (
    <>
    <div className="d-flex justify-content-end gap-2 flex-wrap align-items-center mt-2">
        <span>Nombre de pàgines</span>
        <button onClick={() => lessPage(press.id)} className="btn btn-outline-danger btn-sm rounded-circle"> - </button>
        <input type="text" readOnly value={press.numberPage} className="form-control" style={{height:30,width:40}}/>
        <button onClick={() => addPage(press.id)} className="btn btn-outline-success btn-sm rounded-circle"> + </button>
    </div>
    <div className="d-flex justify-content-end gap-2 flex-wrap align-items-center mt-2">
        <span>Nombre llenguatges</span>
        <button onClick={() => lessLanguage(press.id)} className="btn btn-outline-danger btn-sm rounded-circle "> - </button>
        <input type="text" readOnly value={press.numberLanguage} className="form-control" style={{height:30,width:40}}/>
        <button onClick={() => addLanguage(press.id)} className="btn btn-outline-success btn-sm rounded-circle"> + </button>
    </div>
    </>
    
  )
}

export default PagesAndLanguages