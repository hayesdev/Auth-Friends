import React from "react";

const Login = props => {
  return (
    <div>
      <form>
        <input type="text" name="username" value={value}></input>
        <input type="text" name="password" value={value}></input>
      </form>
    </div>
  );
};

export default Login;
