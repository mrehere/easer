import React, { useState } from "react";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    // todo sign in
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCradential) => {
        console.log(userCradential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="signUp">
      <form onSubmit={signUp}>
        <h1>Create an account</h1>
        <input
          className="signUp__email"
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="enter your email"
        ></input>
        <input
          className="signUp__password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter your password"
        ></input>

        <button className="signUp__signup" type="submit">
          SignUp
        </button>
      </form>
    </div>
  );
}

export default Signup;
