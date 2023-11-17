import React from "react";
import "./sign.css";
import { useState } from "react";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiLogoGmail } from "react-icons/bi";
import {
  MdOutlineDriveFileRenameOutline,
  MdOutlinePassword,
} from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import Log from "./logIn";
function Sign() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
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
    if (!values.username) {
      errors.username = "Please enter name feild";
    }

    if (!values.email) {
      errors.email = "Please enter emai feildl";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Please enter password";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };
  function check() {
    let passwords = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let mass = document.getElementById("massege");
    if (passwords.length != 0) {
      if (passwords == confirm) {
        mass.textContent = "password match";
      } else {
        mass.textContent = "password is not match";
      }
    }
  }

  return (
    <div className="sign">
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <MdOutlineDriveFileRenameOutline className="name-sign" />
            <input
              type="text"
              name="username"
              id="name"
              placeholder="Username"
              value={formValues.username}
              onChange={change}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <BiLogoGmail className="name-sign" />{" "}
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={change}
            />
          </div>
          <br />
          <p>{formErrors.email}</p>
          <div className="field">
            <RiLockPasswordLine className="name-sign" />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={change}
            />
          </div>
          <br></br>
          <p>{formErrors.password}</p>
          <div className="field">
            <MdOutlinePassword className="name-sign" />{" "}
            <input
              type="password"
              id="confirm"
              placeholder="Confirm Password"
              onChange={change}
            />
          </div>
          <p id="massege"></p>
          <br />
          <br />
          <button onClick={check} className="fluid">
            Submit
          </button>
          <p>or</p>
        </div>
      </form>
      <NavLink to={"/login"} className="fluid  btn" id="log">
        log in
      </NavLink>
    </div>
  );
}

export default Sign;
