import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { setUser } from "store/slices/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessageEmailPassword = "Неверный email или пароль";
        const errorMessage = "Поле email или пароль не должны быть пустыми";

        if (errorCode === "auth/invalid-credential") {
          alert(errorMessageEmailPassword);
        }
        if (errorCode === "auth/invalid-email") {
          alert(errorMessage);
        }
      });
  };

  return <Form title="Войти" handleClick={handleLogin} />;
};

export default Login;
