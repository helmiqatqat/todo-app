import "./Login.scss";
import { useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "./LoginContext";

const SignUp = () => {
  const state = useContext(LoginContext);

  const [signUpInfo, setSignUpInfo] = useState({
    username: "",
    password: "",
    role: "User",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    const data = await axios
      .post(`http://localhost:3005/signup`, signUpInfo)
      .then(state.setShowSignup(false));
    console.log(data.data);
  }
  function handleChange(e) {
    setSignUpInfo({ ...signUpInfo, [e.target.name]: e.target.value });
  }

  return (
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
        <label className="input_box">
          <select name="role" required={true} onChange={handleChange}>
            <option value="User">User</option>
            <option value="Editor">Editor</option>
            <option value="Writer">Writer</option>
            <option value="Administrator">Administrator</option>
          </select>
        </label>
        <button className="loginBtn" type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
