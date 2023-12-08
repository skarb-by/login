import { useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
const Form = ({ title, handleClick }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const regist = (
    <div className="subtitle" style={{ paddingTop: "20px" }}>
      {" "}
      Пройти{" "}
      <Link to="/register" className="text">
        регистрацию
      </Link>
    </div>
  );
  const sing = (
    <div className="subtitle" style={{ paddingTop: "20px" }}>
      {" "}
      У вас уже есть учетная запись?{" "}
      <Link to="/login" className="text">
        Войти
      </Link>
    </div>
  );

  return (
    <div className="body">
      <div className="form">
        <div className="title"> {title} </div>
        <div className="input-container ic1">
          <input
            id="firstname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
            type="email"
            placeholder=" "
          />
          <div className="cut"></div>
          <label htmlFor="email" className="placeholder">
            email
          </label>
        </div>

        <div className="input-container ic2">
          <input
            id="email"
            className="input"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            type="pass"
            placeholder=" "
          />
          <div className="cut cut-short"></div>
          <label htmlFor="pass" className="placeholder">
            Email
          </label>
        </div>

        <button
          type="text"
          className="submit"
          onClick={() => handleClick(email, pass)}
        >
          {title}
        </button>

        {title === "Регистрация" ? sing : regist}
      </div>
    </div>
  );
};

export default Form;
