import React, {Component} from 'react';
import './App.css';
import TextSection from './TextSection';
import Footer from './Footer';
import Header from './Header';
import Header1 from './ClassHeader';
import TextSection1 from './ClassTextSection';
import Footer1 from './ClassFooter';
import Console from './Console';
import AlertInfo from './AlertInfo';
import LicznikPlus from './LicznikPlus';
import Menu from './Menu';
import ColorChanger from './ColorChanger';
import Consoleplus from './Consoleplus';
import MenuFunkcje from './MenuRozwijaneFunction';


class App extends Component {
  render(){
  return (
    <div class="container">
    <Header 
      header = 'Tu jest Header - stała wyniesiona poza klasę - później wyniesiona do APP'
    />
    <Header1 />
    <div>
      Siemaneczko!
    </div>
    <TextSection />
    <TextSection1 />
    <Console 
      handleClick = {() => { console.log('kliknąłeś w button ')}}/>
    <Consoleplus />  
    <AlertInfo />
    <Footer 
      footer="Tu jest nasz Pierwszy Footer - stała wyniesiona do APP"/>
    <Footer1 />
    <LicznikPlus />
    <Menu />
    <ColorChanger />

    <MenuFunkcje />
    </div>    
     
  );
}}

export default App;
