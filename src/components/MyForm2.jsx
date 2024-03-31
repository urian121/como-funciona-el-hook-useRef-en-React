import { useRef } from "react";

/**
 *
 * Otra forma de usar el hook userRef
 */
function MyForm2() {
  const inputRefs = useRef({
    name: null,
    email: null,
    message: null,
    gender: null,
    anotherGender: null,
    country: null,
    terms: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = {
      name: inputRefs.current.name?.value,
      email: inputRefs.current.email?.value,
      message: inputRefs.current.message?.value,
      gender: inputRefs.current.gender?.value,
      country: inputRefs.current.country?.value,
      terms: inputRefs.current.terms?.checked,
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
              <input
                type="text"
                ref={(element) => (inputRefs.current.name = element)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label float-start">
                Email
              </label>
              <input
                type="email"
                ref={(element) => (inputRefs.current.email = element)}
                className="form-control"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Mensaje" className="form-label float-start">
                Mensaje
              </label>
              <textarea
                ref={(element) => (inputRefs.current.message = element)}
                className="form-control"
              />
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
                  ref={(element) => (inputRefs.current.gender = element)}
                  defaultChecked
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
                  ref={(element) => (inputRefs.current.anotherGender = element)}
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
              <select
                ref={(element) => (inputRefs.current.country = element)}
                className="form-select"
                defaultValue="">
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
                ref={(element) => (inputRefs.current.terms = element)}
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

export default MyForm2;
