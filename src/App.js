import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Specials from "./components/Specials"
import Main from "./components/Main"
import About from './components/About';
import Footer from "./components/Footer"

function App() {
  return (
    <div>
    <React.Fragment>
      <Nav />
      <Main />
      <Specials />
      <About/>
      <Footer />
    </React.Fragment>
    </div>
  );
}

export default App;
