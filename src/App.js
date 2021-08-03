import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navigation from "./components/Navigation";
import Home from './components/Home';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';

function App() {
  return (
      <Router>
          <Navigation />
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Redirect to={"/"}/>
      </Router>
  );
}

export default App;