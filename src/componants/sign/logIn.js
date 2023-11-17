import React from "react";
import"./sign.css"
import { useState } from "react";
import {RiLockPasswordLine} from "react-icons/ri"
import {BiLogoGmail} from "react-icons/bi"
import { Link } from "react-router-dom";
function Log() {
    const initialValues = { email: "", password: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const change = (u) => {
      const { name, value } = u.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (u) => {
      u.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
    };
  

    const validate = (values) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if (!values.email) {
        errors.email = "Please enter emai feildl";
      } else if (!regex.test(values.email)) {
        errors.email = "This is not correct";
      }
      if (!values.password) {
        errors.password = "Please enter password";
      }
      return errors;
    };

    return (
      <div className="sign">
  
        <form onSubmit={handleSubmit}>
          <h1>Log In</h1>
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
            
             <BiLogoGmail  className="name-sign"/> <input
                type="text"
                name="email"
                placeholder="Email"
                value={formValues.email}
                onChange={change}
              />
            </div><br/>
            <p>{formErrors.email}</p>
            <div className="field">
           
              <RiLockPasswordLine className="name-sign"/><input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={change}
              />
            </div><br></br>
            <p>{formErrors.password}</p>
            <button className="fluid">Submit</button>
            <p>or</p>
          </div>
        </form>
            <Link to={"/sign"} className="fluid" id="log">Sign in</Link>
      </div>
    );
  }
  
  export default Log;