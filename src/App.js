import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const sn = "Supper React";
const menu = ['Home', 'About', 'More'];
function App() {
  return (
    <div className="App">
      <Header name = {sn} menu = {menu}/>
      <Footer name = {sn} menu = {menu}/>
    </div>
  );
}

export default App;
