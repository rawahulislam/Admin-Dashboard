import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Users } from "../api/usersapi";

export default function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  function LoginCheck(e) {
    setPassword(e.target.value);
  }


  async function PasswordHandler() {
  
    await Users(password);
    navigate("/admin")
  }


  return (
    <div>
      Welcome
      <p>Please Enter Password</p>
      <button onClick={PasswordHandler}>Login</button>
      <input type="text" value={password} onChange={LoginCheck} />
      
    </div>
  );
}
