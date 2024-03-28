import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <div className="d-flex container flex-column justify-content-center  container_home border rounded shadow mt-5">
        <h1 className="fw-bold text-white">
          Benvinguts a la calculadora de pressupostos
        </h1>
        <div className="w-50 text-white pt-5">
          <h4 className="lh-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            vehicula malesuada elit quis imperdiet. Integer quam risus,
            convallis ac luctus sit amet, semper id nisi. Nam eu tincidunt elit.
            Sed et bibendum sem. Morbi ultrices auctor tellus sed posuere.
            Aenean.
          </h4>
        </div>
        <Link to="/calculadora" className="btn btn-primary mt-5 w-25">
          Anar a calculadora
        </Link>
      </div>
  )
}

export default Welcome