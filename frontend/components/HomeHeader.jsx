import React from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";

export function HomeHeader() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container container-fluid">
          <Link className="navbar-brand" to="/">
            Spread
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar2"
            aria-controls="navbar2"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar2">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/help">
                  Help
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
