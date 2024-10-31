import "./Signin.scss";
import { useState } from "react";
import { auth } from "../firebase";
import { useAuth } from "../AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loggedUser } = useAuth();
  const navigate = useNavigate();

  const signIn = (e) => {
    // todo sign in
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCradential) => {
        console.log(userCradential);
        navigate("/home");

        if (loggedUser) {
          setTimeout(() => {
            toast.success("Login successful!");
            navigate("/home");
          }, 4000);
        }
      })
      .catch((error) => {
        console.log(error);
        toast.error("Login failed. Please check your credentials.");
      });
  };
  return (
    <form className="signIn" onSubmit={signIn}>
      <h1 className="signIn__loginHeader">Log in form</h1>
      <input
        className="signIn__email"
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="enter your email"
      ></input>
      <input
        className="signIn__password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="enter your password"
      ></input>

      <button className="signIn__login" type="submit">
        Log in
      </button>
      <ToastContainer />
    </form>
  );
}

export default Signin;
