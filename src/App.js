import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";

export default function App() {
  const [mode, setMode] = React.useState(true);

  function toggleDarkMode() {
    setMode((prevState) => !prevState);
  }

  return (
    <div className="container">
      <Navbar darkMode={mode} toggleDarkMode={toggleDarkMode} />
      <Main darkMode={mode} />
    </div>
  );
}
