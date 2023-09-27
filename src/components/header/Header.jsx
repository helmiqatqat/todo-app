import { When } from "react-if";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../Auth/LoginContext";
import "./header.scss";
import Auth from "../Auth/Auth";

const Header = () => {
  const state = useContext(LoginContext);
  return (
    <>
      <div className="headerContainer">
        <h1 className="title">
          <div className="logo">
            <b>
              T<span>oD</span>o <span>L</span>ist
            </b>
          </div>
        </h1>
        <When condition={state.loggedIn}>
          <div className="tabContain">
            <Link to="/">
              <button className="homeTab">Home</button>
            </Link>
            <Auth capability="update">
              <Link to="/settings">
                <button className="settingsTab">Settings</button>
              </Link>
            </Auth>
          </div>
          <div className="containBTNs">
            <button onClick={state.logout} className="settingsTab">
              Log Out
            </button>
          </div>
        </When>
      </div>
    </>
  );
};

export default Header;
