import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './view/navbar/Navbar';
import Home from './view/home/Home';
import Surah from './view/surah/Surah';
import NoMatch from './view/nomatch/NoMatch';
import TopButton from './view/topButton/TopButton';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        darkMode: false,
        busrainCss: ['busrain']
    }

    this.toggleDarkMode = this.toggleDarkMode.bind(this)
  }

  toggleDarkMode(){
      this.setState((state) => ({
        darkMode: !state.darkMode,
        busrainCss: ['busrain', !state.darkMode ? 'dark' : '']
      }))
  }

  render(){
    return (
      <div className={this.state.busrainCss.join(" ")}>
        <div className="basic-background"></div>
        
        
        {/* <Home/> */}
        
        {/* <Surah /> */}
  
        <Router>
          <Navbar title="Quran" onClick={this.toggleDarkMode} darkmode={this.state.darkMode}/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/surah/:id" exact component={Surah}/>
            <Route component={NoMatch}/>
          </Switch>
        </Router>
  
        <TopButton/>
        
      </div>
    );
  }
}

export default App;
