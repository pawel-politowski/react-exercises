import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TextSection from './TextSection';
import Footer from './Footer';
import Header from './Header';
import Header1 from './ClassHeader';
import TextSection1 from './ClassTextSection';
import Footer1 from './ClassFooter';

function App() {
  return (
    <div class="container">
    <Header />
    <Header1 />
    <div>
      Siemaneczko!
    </div>
    <TextSection />
    <TextSection1 />
    <Footer />
    <Footer1 />
    </div>    
     
  );
}

export default App;
