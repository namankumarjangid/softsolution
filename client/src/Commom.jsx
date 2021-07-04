import React from "react";
import { NavLink } from "react-router-dom";
import Fade from 'react-reveal/Fade';

const Commom = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <Fade left>
                    <h1>
                      {props.name}
                      <strong className="brand-name"> SoftSolution </strong>
                    </h1>
                    <h2 className="my-3">
                      We are the team of talented developer making websites, apps and digital marketing
                    </h2>
                    <div className="mt-3">
                      <NavLink to={props.visit} className="btn-get-started ">
                        {props.btname}
                      </NavLink>
                    </div>
                  </Fade>
                </div>

                <Fade top>
                  <div className="col-lg-6 order-1 order-lg-2 header-img">
                    <img
                      src={props.imgsrc}
                      className="img-fluid animated"
                      alt="Commom img" />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Commom;
