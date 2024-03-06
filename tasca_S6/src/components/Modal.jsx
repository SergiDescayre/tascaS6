
const Modal = ({infoSingular , infoPlural}) => {
  return (
    <div className="modal fade" id="pagines" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className=" text-center  w-100 fs-5" id="exampleModalLabel">Número de {infoPlural}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body text-center p-5">
        Afageix els {infoPlural} que tindrà el teu projecte.
        El cost de cada {infoSingular} es de 30€
      </div>
    </div>
  </div>
</div>
  )
}

export default Modal
