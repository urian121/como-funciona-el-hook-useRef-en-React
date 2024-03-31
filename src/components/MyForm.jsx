import { useRef } from "react";

function MyForm() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const genderRef = useRef(null);
  const anotherGenderRef = useRef(null); // Nueva referencia para el segundo botón de radio
  const countryRef = useRef(null);
  const termsRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
      gender: genderRef.current.value,
      country: countryRef.current.value,
      terms: termsRef.current.checked,
    };

    console.log(formData);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-md-6 px-4 py-4"
          style={{ backgroundColor: "white" }}>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="Nombre" className="form-label float-start">
                Nombre
              </label>
              <input type="text" ref={nameRef} className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label float-start">
                Email
              </label>
              <input type="email" ref={emailRef} className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="Mensaje" className="form-label float-start">
                Mensaje
              </label>
              <textarea ref={messageRef} className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="Genero" className="form-label">
                Género <hr />
              </label>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="masculino"
                  ref={genderRef} // Referencia para el botón de radio "Masculino"
                  defaultChecked // Usamos `defaultChecked` para establecer la opción predeterminada
                />
                <label className="form-check-label" htmlFor="Masculino">
                  Masculino
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="femenino"
                  ref={anotherGenderRef} // Referencia para el botón de radio "Femenino"
                />
                <label className="form-check-label" htmlFor="Femenino">
                  Femenino
                </label>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="Pais" className="form-label float-start">
                país
              </label>
              <select ref={countryRef} className="form-select" defaultValue="">
                <option value="">Seleccione</option>
                <option value="Chile">Chile</option>
                <option value="Colombia">Colombia</option>
                <option value="México">México</option>
                <option value="Perú">Perú</option>
                <option value="Venezuela">Venezuela</option>
              </select>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                ref={termsRef}
              />
              <label className="form-check-label">
                {" "}
                Acepto los términos y condiciones:
              </label>
            </div>

            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Enviar Formulario
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MyForm;
