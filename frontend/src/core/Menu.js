import { Link, withRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const Menu = () => {
    
    return(
        <div>
          <nav className="navbar navbar-expand-lg navbar-default">
             <a className="navbar-brand">ThoughtClan</a>
               <button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
             <ul className="navbar-nav mr-auto mt-2 mt-lg-0 header-left"></ul>
             <ul className="nav navbar-nav mr-auto header-centre">
              <li><a href = "https://www.linkedin.com/in/ruchitha-deshpande-88b05a141/" target="_blank">MY LINKEDIN PROFILE</a></li>
            </ul>
             <ul className="nav navbar-nav header-right"></ul>
        </nav>
      </div>
    );
};
export default Menu;
