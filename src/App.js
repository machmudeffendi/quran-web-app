import React from 'react';
import DocumentMeta from 'react-document-meta';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './view/navbar/Navbar';
import Home from './view/home/Home';
import Surah from './view/surah/Surah';
import NoMatch from './view/nomatch/NoMatch';
import TopButton from './view/topButton/TopButton';
import Footer from './view/footer';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
        darkMode: false,
        busrainCss: ['busrain']
    }
    this.toggleDarkMode = this.toggleDarkMode.bind(this)
  }

  componentDidMount(){
    // document.body.classList.add('d-flex');
    // document.getElementsByTagName("HTML").classList.add("h-100");
  }

  toggleDarkMode(){
      this.setState((state) => ({
        darkMode: !state.darkMode,
        busrainCss: ['busrain', !state.darkMode ? 'dark' : '']
      }))
  }

  render(){
    const meta = {
      title: 'Home - Quran Web',
      description: 'I am a description, and I can create multiple tags',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'react,meta,document,html,tags'
        }
      }
    };

    return (
      <div className={this.state.busrainCss.join(" ")}>
        <DocumentMeta {...meta}/>
        <Router>
          <Navbar title="Quran Web" onClick={this.toggleDarkMode} darkmode={this.state.darkMode}/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/surah/:id" exact component={Surah}/>
            <Route component={NoMatch}/>
          </Switch>
          <TopButton/>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
