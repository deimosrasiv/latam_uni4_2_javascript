import swal from "sweetalert";

import { useState } from "react";

let StatusPassword = false;

const LoginPag = (e) => {
  e.preventDefault()

  swal("Bienvenido!", "", "success");
}


const Contenido = () => {
  let [Password, ChekPassword] = useState("");
  
  const handleChange = (event) => {
    ChekPassword(event.target.value);
    let count = event.target.value.length;

    
    if (count < 5) {
    
    } else {
      
      if (event.target.value == 252525) {
        StatusPassword = true;
       
        return;
      }
      StatusPassword = false;
      
    }
  };

  return (
    <>
      <div className="container centrar">
        <div className="card" id="Card">
          <div className="card-body">
            <h5 className="card-title" id="Title">
              <strong></strong>
            </h5>

            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>

                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  Nunca compartiremos su correo electrónico con nadie más.
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="InputPassword"
                  value={Password}
                  onChange={handleChange}
                  placeholder="Ingrese Password"
                />
              </div>

              {StatusPassword ? (
                <button title="Ingresar" onClick={LoginPag} className="btn btn-primary">
                  Ingresar
                </button>
              ) : (
                <button title="Ingresar" className="btn btn-secondary" disabled>
                  Ingresar
                </button>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contenido;
