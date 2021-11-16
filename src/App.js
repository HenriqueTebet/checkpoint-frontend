import { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';
import './App.scss';

export default class App extends Component{

  nomePortfolio = 'Henrique Tebet';

  render(){
    return(
      <>
      <Header nomePortfolio={this.nomePortfolio}/>
      <Banner/>
      <Footer/>
      </>
    )
  }
}