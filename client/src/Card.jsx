import React from "react";
import { NavLink } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const Card = (props) => {
  return (
    <>
        <Fade bottom cascade>
      <div className="col-md-4 col-12 mx-auto">
          <div className="card">
            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{props.title}</h5>
              <p className="card-text">
                {props.details}
              </p>
              <NavLink to="/contact" className="btn btn-primary">
                Contact us
            </NavLink>
            </div>
          </div>
      </div>
        </Fade>
    </>
  );
};

export default Card;
