import React,{Component} from 'react';
import './css/Style.css';
import './css/responsive.css';
import Navigation from './components/Navigation';
import Logo from './components/Logo';
import Features from './components/Features';
import Footer from './components/Footer';


class App extends Component {
 render(){
  return (
    <div className="home-page">
    <Navigation/>
    <Logo/>
    <Features/>
    <Footer/>
     </div>
  );
 }
  
}

export default App;
