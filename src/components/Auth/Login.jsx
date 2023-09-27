import { useState, useContext } from "react";
import { When } from "react-if";
import { LoginContext } from "./LoginContext";
import "./Login.scss";

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
        <div className="logContain">
          <form onSubmit={handleSubmit} className="loginForm">
            <label className="input_box">
              <input name="username" required={true} onChange={handleChange} />
              <span>Username</span>
            </label>
            <label className="input_box">
              <input name="password" required={true} onChange={handleChange} />
              <span>Password</span>
            </label>
              <button className="loginBtn">Login</button>
          </form>
        </div>
      </When>
    </>
  );
};

export default Login;
