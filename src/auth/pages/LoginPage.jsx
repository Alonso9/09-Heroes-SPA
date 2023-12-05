import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const {login} = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    login("Alonso Giron"); // Llamamos al login y como espera el usuario o nombre le pasamos ese contexto

    const lastPath = localStorage.getItem('lastPath') || '/';  // Del localStorage sacamos el ultimo path que se vistio y si hace login lo mandamos ahi si existe
    navigate(lastPath, {
      replace: true
    })
  }
  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button
      className="btn btn-primary"
      onClick={onLogin}
      >
        Login
      </button>
    </div>
  )
}





