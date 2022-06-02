import React from "react";
import { useContext, useState } from "react";
import { AuthContext } from "./Context/AuthContext";

export default function Logout() {
  const { isAuth, setIsAuth, toggleAuth, data, setData, token } =
    useContext(AuthContext);
  console.log(data);
  console.log(isAuth);
  return (
    <div className="div">
      

      <h2>Email of user : {data.email}</h2>
      <h2>Token : {token}</h2>
      <button className="btn"
        onClick={() => {
          toggleAuth();
          setData(null);
        }}
      >
        Logout
      </button>
    </div>
  );
}
