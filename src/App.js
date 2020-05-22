import React from "react";
import "./App.css";
import Logo from "./components/Logo/Logo";
import Nav from "./components/Nav/Nav";
import CartLink from "./components/CartLink/CartLink";

function App() {
  return (
    <div className="App">
      <nav>
        <Logo />
        <Nav />
        <CartLink />
      </nav>
      <main>Accessories Shop by Adelia Dumukenova</main>
    </div>
  );
}

export default App;
