import React from "react";
import { Link } from "react-router-dom";
import "./css/Navigation.css";

function Navigation () {
    return (
        <div className="nav">
            <Link to="/">Home</Link>
            <Link to="/section2">Section 2</Link>
            <Link to="/section3">Section 3</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
        </div>
    );
}

export default Navigation;