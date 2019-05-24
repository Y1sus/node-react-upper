import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const FormUpper = (props) => {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-6 mx-auto">
              <div className="card">
                <div className="card-header">
                  <h3 className="mb-0">UpperText</h3>
                </div>
                <div className="card-body">
                  <form className="form" onSubmit={props.getText}>
                    <div className="form-group">
                      <input type="text" className="form-control mt-4" id="textMinus" name="textMinus" placeholder="ingresa texto en minusculas"/>
                    </div>
                    <button type="submit" className="btn btn-primary" id="btnMayus">MAYUS</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FormUpper;
