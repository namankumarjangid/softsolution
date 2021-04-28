import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";
import Fade from 'react-reveal/Fade';

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
      </div>
      <Fade bottom cascade>
        <div className="container-fluid mb-5">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                {Sdata.map((val, ind) => {
                  return <Card key={ind} imgsrc={val.imgsrc} title={val.title} details={val.details} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </Fade>

    </>
  );
};

export default Services;
