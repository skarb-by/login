import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./Form";
import { setUser } from "store/slices/userSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
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
        const errorMessagePassword = "пароль должен быть больше 6 символов";
        const errorMessageEmail = "email такой уже есть";
        const errorMessage = "Поле email или пароль не должны быть пустыми";
      
        if (errorCode === "auth/weak-password") {
          alert(errorMessagePassword);
        }
        if (errorCode === "auth/email-already-in-use") {
          alert(errorMessageEmail);
        }
        if (errorCode === "auth/invalid-email") {
          alert(errorMessage);
        }
      });
  };

  return <Form title="Регистрация" handleClick={handleRegister} />;
};

export default SignUp;
