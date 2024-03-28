import { usePresContext } from "../context/PresContext"

const SwitchPay = () => {

    const { setIsChecked  } = usePresContext()
    const handleInput = (e) => {
        setIsChecked(e.target.checked)
    }

  return (
    <div className="mb-5 form-check form-switch d-flex gap-3 justify-content-center">
    <label className="form-check-label me-5 text-primary" htmlFor="flexSwitchCheckChecked">Pagament mensual</label>
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" onChange={handleInput} />
    <label className="form-check-label text-primary" htmlFor="flexSwitchCheckChecked">Pagament anual</label>
</div>
  )
}

export default SwitchPay
