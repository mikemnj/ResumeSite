import React from "react";
//a page with a "Welcome" text, acompanied by
//a button that says "ENTER" that will load 'HOME'
export default function navbar(){
    return <nav className="nav">
        <a href="/Home" className="site-title">Michael-McCully.com</a>
        <ul>
            <li>
                <CustomLink href = "/Home">Home</CustomLink>
            </li>

            <li>
                <CustomLink href = "/About">About</CustomLink>
            </li>

            <li>
                <CustomLink href = "/Resume">Resume</CustomLink>
            </li>
        </ul>
    
    </nav>
}


function CustomLink({href,children,...props}) {
    //path is the current pathname, we will compare this to the 
    //href to see if the href is active, if so set the href to "active"
    //otherwise set it to an empty string
    const path = window.location.pathname
    return(
      <li className = {(path === href ? "active" : "")}>
        <a href={href} {...props} > {children}</a>
      </li>
    )
  }