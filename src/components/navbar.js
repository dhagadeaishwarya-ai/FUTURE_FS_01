import { useState } from "react";
function Navbar() {
   const [dark, setDark] = useState(false);

    return (
      <nav className={dark ? "dark" : ""}>
      <button onClick={() => setDark(!dark)}>
        {dark ? "☀️" : "🌙"}
      </button>
      <h2>Aishwarya</h2>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    );
}

export default Navbar;