import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Navigation from "./components/Navigation.jsx";
import Home from './components/Home.jsx';
import Section2 from './components/Section2.jsx';
import Section3 from './components/Section3.jsx';
import About from './components/About.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';

function App() {
  return (
      <Router>
          <Navigation />
          <Route path="/" exact={true} component={Home} />
          <Route path="/section2" component={Section2} />
          <Route path="/section3" component={Section3} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Redirect to={"/"}/>
      </Router>
  );
}

export default App;