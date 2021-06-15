import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import Header from './components/Header';
import logo from './logo.svg'
import './palette.css'
import React from 'react';
function App() {
  return (
    <Router>
      <Header Link={Link} Logo={logo} />
      <Route path="/" exact component={Home} />
      <Route path="/auth" component={Auth} />
    </Router>
  );
}

export default App;
