import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navigation from "./components/Navigation.jsx";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';

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