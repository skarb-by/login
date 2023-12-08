import { Link } from "react-router-dom";
import React, { useEffect } from "react";
const Header = ({ title }) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  return title === "Главная" ? (
    <>
      <div className="subtitle">
        <Link to="/login" className="text" style={{ paddingLeft: "20px" }}>
          {" "}
          Войти{" "}
        </Link>

        <Link to="/register" style={{ paddingLeft: "20px" }} className="text">
          Пройти регистрацию
        </Link>
      </div>
    </>
  ) : (
    <div className="subtitle" style={{ paddingTop: "20px" }}>
      <Link to="/" style={{ paddingLeft: "20px" }} className="text">
        Главная
      </Link>

      <Link to="/login" style={{ paddingLeft: "20px" }} className="text">
        {" "}
        Войти{" "}
      </Link>

      <Link to="/register" style={{ paddingLeft: "20px" }} className="text">
        Пройти регистрацию
      </Link>
    </div>
  );
};

export default Header;
