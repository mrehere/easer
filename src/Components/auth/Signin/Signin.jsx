import "./Signin.scss";
import { useState } from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    // todo sign in
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCradential) => {
        console.log(userCradential);
      })
      .catch((error) => {
        console.log(error);
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
    </form>
  );
}

export default Signin;
