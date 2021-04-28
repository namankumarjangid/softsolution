import React, { useState } from "react";
import Fade from 'react-reveal/Fade';
import { Link, useHistory } from 'react-router-dom';

const Contact = () => {
  const history = useHistory();

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  let name, value;

  const InputEvent = (e) => {
    // const { name, value } = e.target;
    name = e.target.name;
    value = e.target.value;

    setData({ ...data, [name]: value });


    // setData((preVal) => {
    //   return {
    //     ...preVal,
    //     [name]: value,
    //   };
    // });
  };

  const formSubmit = async (e) => {
    e.preventDefault();


    const { name, email, phone, message } = data;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
      })
    });



    const response = await res.json();

    if (response.status === 400 || !response) {
      window.alert("INvalid Registration");
      console.log("INvalid Registration");
    } else {
      window.alert(`Thank You ! ${data.name}. We will see your concern soon !`);
      console.log("Successfull Registration");

      history.push('/');
    }
  };

  const fbSoft = () => {
    window.open("https://www.facebook.com/softsolutionlive")
  }
  const instaSoft = () => {
    window.open("https://www.instagram.com/_softsolution")
  }
  const twitterSoft = () => {
    window.open("https://www.twitter.com/softsolution_")
  }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact US </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} method="post">
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="name"
                  value={data.name}
                  onChange={InputEvent}
                  placeholder="Enter your Name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Mobile number"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="message"
                  value={data.message}
                  onChange={InputEvent}
                ></textarea>
              </div>

              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Fade bottom cascade>
        <div className="smm">
          <Link to="#" onClick={fbSoft}><i className="fab fa-facebook-f"></i></Link>
          <Link to="#" onClick={instaSoft}><i className="fab fa-instagram"></i></Link>
          <Link to="#" onClick={twitterSoft}><i className="fab fa-twitter"></i></Link>
        </div>
      </Fade>
    </>
  );
};

export default Contact;
