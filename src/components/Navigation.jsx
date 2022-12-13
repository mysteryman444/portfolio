import React from "react";
import { NavLink } from "react-router-dom";
import './App.css';
import './bootstrap.css';
import "./fonts/Montserrat-VariableFont_wght.ttf"


function Navigation() {
  return (
    <div className="navigation container-fluid">
      <nav className="navbar navbar-expand navbar-light">
        <div className="container">
          <NavLink className="navbar-brand name " to="/">
            Anonymous
          </NavLink>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse me-auto" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  WORK
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  ABOUT
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;