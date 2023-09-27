import { useContext } from "react";
import { When } from "react-if";

import { LoginContext } from "./LoginContext";

const Auth = (props) => {
  const state = useContext(LoginContext);

  const isLoggedIn = state.loggedIn;
  const canDo = props.capability ? state.can(props.capability) : true;
  const okToRender = isLoggedIn && canDo;
  return <When condition={okToRender}>{props.children}</When>;
};

export default Auth;
