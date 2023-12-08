
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/use-auth";
import { removeUser } from "store/slices/userSlice";
import Header from "components/Header";

const HomePage = () => {
  const dispatch = useDispatch();

  const { isAuth, email } = useAuth();

  return isAuth ? (
    <div>
      <div className="title">Добро пожаловать</div>
      <div className="subtitle" style={{ paddingLeft: "20px" }}>
        Учетная запись: <p>{email}</p>{" "}
      </div>
      <div style={{ width: "320px", paddingLeft: "20px" }}>
        <button
          type="text"
          className="submit"
          onClick={() => dispatch(removeUser())}
        >
          Выйти
        </button>
      </div>
    </div>
  ) : (
    <>
      <div className="title">Главная страница</div>
     
     <Header title="Главная"/>
    </>
  );
};

export default HomePage;
