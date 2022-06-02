import React, { useContext, useState } from "react";
import { AuthContext } from "./Context/AuthContext";

export default function LoginStatus() {
  const { isAuth, setIsAuth, toggleAuth, setData, token } =
    useContext(AuthContext);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <div className="div">
      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />{" "}
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button className="btn"
        onClick={() => {
          setData({
            "Enter Email": email,
            "Enter Password": password,
          });
        }}
      >
        Login
      </button>
    </div>
  );
}
