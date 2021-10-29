import React, { Component, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

/*class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(authContext) => (
          <ThemeContext.Consumer>
            {(themeContext) => {
              const { isDarkTheme, darkTheme, lightTheme } = themeContext;
              const { isLoggedIn, changeAuthStatus } = authContext;
              const theme = isDarkTheme ? darkTheme : lightTheme;
              return (
                <nav
                  style={{
                    background: theme.background,
                    color: theme.text,
                    height: "120px",
                  }}
                >
                  <h2 style={{ textAlign: "center" }}>SDASD</h2>
                  <p style={{ textAlign: "center" }} onClick={changeAuthStatus}>
                    {isLoggedIn ? "Logged In" : "Logged out"}
                  </p>
                  <div className="ui three buttons">
                    <button className="ui button">Overview</button>
                    <button className="ui button">Contact</button>
                    <button className="ui button">Support</button>
                  </div>
                </nav>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </AuthContext.Consumer>
    );
  }
}*/ //consumer kullanımı ile context

const Navbar = () => {
  const { isDarkTheme, darkTheme, lightTheme } = useContext(ThemeContext);
  const theme = isDarkTheme ? darkTheme : lightTheme;

  const { isLoggedIn, changeAuthStatus } = useContext(AuthContext)
  return (
    <nav
      style={{
        background: theme.background,
        color: theme.text,
        height: "120px",
      }}
    >
      <h2 style={{ textAlign: "center" }}>SDASD</h2>
      <p style={{ textAlign: "center" }} onClick={changeAuthStatus}>
        {isLoggedIn ? "Logged In" : "Logged out"}
      </p>
      <div className="ui three buttons">
        <button className="ui button">Overview</button>
        <button className="ui button">Contact</button>
        <button className="ui button">Support</button>
      </div>
    </nav>
  );
};

export default Navbar;
