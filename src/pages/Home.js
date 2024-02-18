import React from "react";
import "./Home.css"; // Import CSS file for styling

export default function Home() {
    return (
        <div className="home-container">
            <h1>Welcome to My Website!</h1>
            <p>Hello and thank you for visiting my site. I'm thrilled to have you here!</p>
            <div className="navigation">
                <CustomLink href="/About">About</CustomLink>
                <CustomLink href="/Resume">Resume</CustomLink>
            </div>
        </div>
    );
}


function CustomLink({href,children,...props}) {
    //path is the current pathname, compare this to the 
    //href to see if the href is active, if so set the href to "active"
    //otherwise set it to an empty string
    const path = window.location.pathname
    return(
      <li className = {(path === href ? "active" : "")}>
        <a href={href} {...props} > {children}</a>
      </li>
    )
}