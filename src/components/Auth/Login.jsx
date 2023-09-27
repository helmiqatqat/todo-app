import { useState, useContext } from "react";
import { When } from "react-if";
import { LoginContext } from "./LoginContext";
import "./Login.scss";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

const Login = () => {
  const state = useContext(LoginContext);

  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    state.login(user.username, user.password);
  };
  return (
    <>
      <When condition={!state.loggedIn}>
        {!state.showSignup && (
          <div className="logContain">
            <form onSubmit={handleSubmit} className="loginForm">
              <label className="input_box">
                <input
                  name="username"
                  required={true}
                  onChange={handleChange}
                />
                <span>Username</span>
              </label>
              <label className="input_box">
                <input
                  name="password"
                  required={true}
                  onChange={handleChange}
                />
                <span>Password</span>
              </label>
              <button className="loginBtn">Login</button>
              <span>
                If you dont have an account you can sign up
                <Link onClick={() => state.setShowSignup(true)}>here</Link>
              </span>
            </form>
          </div>
        )}
        {state.showSignup && <SignUp />}
      </When>
    </>
  );
};

export default Login;
