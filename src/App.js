import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Header from "./components/Header"
import Specials from "./components/Specials"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  return (
    <div>
    <React.Fragment>
      <Nav />
      <Main />
      <Specials/>
      <Footer />
    </React.Fragment>
    </div>
  );
}

export default App;
