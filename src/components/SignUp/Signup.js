import React from "react";
import "./Signup.css";
// import "../SignUp/goog.png";
import contact from "./assets/contact.png";
import Email from "./assets/Email.png";
import facebook from "./assets/Facebook.png";
import globe from "./assets/globe.png";
import LinkedIn from "./assets/LinkedIn.png";
import microsoft from "./assets/microsoft.png";
import name from "./assets/name.png";
import password from "./assets/password.png";
import Twitter from "./assets/Twitter.png";
import yahoo from "./assets/yahoo.png";
import goog from "./assets/goog.png";
const Signup = () => {
  return (
    <div>
      <div className="wrapper">
        <div className="w-left">
          {/* <div className="w-signup">SIGNUP PAGE</div> */}
          <div className="w-desc">
            <h5 className="w-pr">Crud Payroll</h5>
            <p>
              Crud payroll is online payroll software that helps businesses in
              india manage their payroll operations and pay employees on time
            </p>
            <h6>We built Crud payroll so you can:</h6>
            <ul>
              <li>streamline your payroll process end-to-end</li>
              <li>Define clear roles for your payroll staff</li>
              <li>
                Create salary components allowances and more,the way you want
              </li>
              <li>compute your emplloyees' paycheck accurately every time</li>
              <li>Distribute salaries and payslips online</li>
              <li>Automatic payroll accounting with Zoho Books</li>
              <li>
                Reduce payroll staff workload with collaborative self-service
                portal
              </li>
            </ul>
          </div>
        </div>
        <div className="w-right">
          <div className="w-r-dts">
            <form>
              <div className="w-r-desc">
                <h4>lets get started</h4>
                <p>Explore all the features with a 30day free trial</p>
              </div>
              <label>
                <div className="div">
                  <img src={name} alt="" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="inp"
                  />
                </div>
              </label>{" "}
              <br />
              <label>
                <div className="div">
                  <img src={Email} alt="" />
                  <input
                    type="text"
                    name="Email"
                    placeholder="Email"
                    className="inp"
                  />
                </div>
              </label>
              <br />
              <label>
                <div className="div">
                  <img src={contact} alt="" />
                  <input
                    type="text"
                    name="contact number"
                    placeholder="Contact Number"
                    className="inp"
                  />
                </div>
              </label>
              <br />
              <label>
                <div className="div">
                  <img src={password} alt="" />
                  <input
                    type="password"
                    name="name"
                    placeholder="Password"
                    className="inp"
                  />
                </div>
              </label>
              <br />
              <label>
                <div className="div">
                  <img src={globe} alt="" />
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    className="inp"
                  />
                </div>
              </label>
              <div>
                <div className="i-agree">
                  <input type="checkbox" id="agree" />
                  <label htmlFor="agree" className="terms">
                    {" "}
                    I agree to the <b className="blue">
                      terms of service
                    </b> and <b className="blue">private policy</b>
                  </label>
                </div>
                <div className="submit">
                  <button className="btn">SIGN UP NOW</button>
                </div>
                <div className="bottoms">
                  <div className="b-text">
                    <h6>or signup using</h6>
                  </div>
                  <div className="b-g-logo">
                    <img src={goog} alt="" />
                    Google
                  </div>
                  <div className="b-s-icons">
                    <ul className="social-icons">
                      <li className="icons">
                        <img src={yahoo} alt="" />
                      </li>
                      <li className="icons">
                        <img src={facebook} alt="" />
                      </li>
                      <li className="icons">
                        <img src={Twitter} alt="" />
                      </li>
                      <li className="icons">
                        <img src={LinkedIn} alt="" />
                      </li>
                      <li className="icons">
                        <img src={microsoft} alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </form>
            <div className="w-r-already-acc">
              <p>
                <b>Already have an account?</b>
                <b
                  className="blue"
                  style={{
                    marginLeft: "5px",
                  }}
                >
                  Sign In
                </b>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
