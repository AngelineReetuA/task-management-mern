import React from "react";
import "../styles/styles.css";
import { useState } from "react";
import { HomeHeader } from "../components/HomeHeader";

export function Onboarding() {
  const [selectedOp, setSelectedOp] = useState(1);

  return (
    <>
      <div className="container d-flex flex-column flex-lg-row align-items-start pt-4 vh-95">
        <div className="flex-column text-center text-lg-start align-items-start align-items-lg-start vh-50 vh-lg-100">
          <div className="fs-1 fw-bolder sourceCodePro">Spread.</div>
          <div className="fs-4 sourceCodePro">
            Spread out your tasks, schedules, meetings, timeline etc in a shared
            dashboard and never lag or forget again!
          </div>
          <br />
          <img
            src="./assets/checklist.png"
            className="img-fluid my-3"
            alt="Checklist"
            style={{ height: "300px", width: "300px" }}
          />
        </div>

        <div className="flex-column flex-grow-1 pt-0 p-3 mx-3 align-self-center justify-content-center w-100 w-lg-50">
          <div
            className="card shadow-lg p-3"
            style={{ width: "400px", margin: "auto" }}
          >
            <div className="d-flex bd-highlight">
              <button
                id="signinB"
                className={`btn btn-light p-2 flex-fill bd-highlight ${
                  selectedOp === 1 ? "fw-bold" : ""
                }`}
                onClick={() => setSelectedOp(1)}
              >
                Sign-in
              </button>
              <button
                id="regB"
                className={`btn btn-light p-2 flex-fill bd-highlight ${
                  selectedOp === 2 ? "fw-bold" : ""
                }`}
                onClick={() => setSelectedOp(2)}
              >
                Register
              </button>
            </div>
            <div className="card-body">
              <div
                id="signin"
                style={{ display: selectedOp === 1 ? "block" : "none" }}
              >
                <div className="fw-light fw-bold my-3">
                  Welcome back hustler !!
                </div>
                <div className="fw-light fst-italic my-3">Username:</div>
                <input
                  className="form-control rounded my-3"
                  type="text"
                  placeholder="Type username"
                  required
                />
                <div className="fw-light fst-italic my-3">Password:</div>
                <input
                  className="form-control rounded my-3"
                  type="password"
                  placeholder="Type password"
                  required
                />
                <div className="text-center">
                  <button className="btn btn-dark my-3">Login</button>
                </div>
              </div>
              <div
                id="register"
                style={{ display: selectedOp === 2 ? "block" : "none" }}
              >
                <div className="fw-light fw-bold my-3">Sign up here !!</div>
                <div className="fw-light fst-italic my-3">Name:</div>
                <input
                  className="form-control rounded my-3"
                  type="text"
                  placeholder="Your name"
                  required
                />
                <div className="fw-light fst-italic my-3">Mail ID:</div>
                <input
                  className="form-control rounded my-3"
                  type="email"
                  placeholder="Your mail ID"
                  required
                />
                <div className="fw-light fst-italic my-3">Password:</div>
                <input
                  className="form-control rounded my-3"
                  type="password"
                  placeholder="Type password"
                  required
                />
                <div className="fw-light fst-italic my-3">
                  Confirm password:
                </div>
                <input
                  className="form-control rounded my-3"
                  type="password"
                  placeholder="Retype password again"
                  required
                />
                <div className="text-center">
                  <button className="btn btn-dark my-3">Register</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
