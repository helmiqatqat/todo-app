import React from "react";
import "./app.scss";

import ToDo from "./components/todo/Todo.jsx";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";
import Settings from "./context/settings/Settings";
import { Route, Routes } from "react-router-dom";
import Modification from "./components/Modification/Modification";
import Auth from "./components/Auth/Auth";
import Login from "./components/Auth/Login";
import LoginContext from "./components/Auth/LoginContext";

export default class App extends React.Component {
  render() {
    return (
      <>
        <LoginContext>
          <Settings>
            <div className="app">
              <div className="box">
                <img
                  src="https://images.unsplash.com/photo-1692678420673-ba7a27ad70cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1976&q=80"
                  alt=""
                  className="imgBackground"
                />
                <div className="shade"></div>
              </div>
              <Header />
              <Routes>
                <Route path="/settings" element={<Modification />} />
                <Route path="/" element={<Login />} />
              </Routes>
              <Auth>
                <ToDo />
              </Auth>
              <Footer />
            </div>
          </Settings>
        </LoginContext>
      </>
    );
  }
}
