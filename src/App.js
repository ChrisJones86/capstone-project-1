import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Specials from "./components/Specials"
import Main from "./components/Main"
import Testimonials from "./components/Testimonials"
import About from './components/About';
import Footer from "./components/Footer"

function App() {
  return (
    <div>
    <React.Fragment>
      <Nav />
      <Main />
      <Specials />
      <Testimonials/>
      <About/>
      <Footer />
    </React.Fragment>
    </div>
  );
}

export default App;
