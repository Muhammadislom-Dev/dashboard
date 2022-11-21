import React, { useRef } from "react";
import Private from "../../Private";
import "./Login.css";

const Login = () => {
    
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (
      email.current.value == "abcde@gmail.com" &&
      password.current.value == "12345678"
    ) {
      localStorage.setItem("emailData", "abcde@gmail.com");
      localStorage.setItem("passwordData", "12345678");
    }
  };

  return (
    <div className="login">
      {getEmail && getPassword ? (
        <Private />
      ) : (
        <div className="login-page">
          <h1 className="login-name">Kirish</h1>
          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="">
              Email
              <input
                placeholder="Email..."
                className="login-input"
                type="email"
                required
                ref={email}
              />
            </label>
            <label htmlFor="">
              Password
              <input
                placeholder="Password..."
                className="login-input"
                type="password"
                required
                ref={password}
              />
            </label>
            <button className="login-btn">Login</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;