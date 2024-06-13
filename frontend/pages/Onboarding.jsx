import React from "react";
import "../styles/styles.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HomeHeader } from "../components/HomeHeader";
import Swal from "sweetalert2";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config/firebase.config";

export function Onboarding() {
  // selectionOp 1 - sign in, 2 - register
  const [selectedOp, setSelectedOp] = useState(1);

  const navigate = useNavigate();

  // sign in form, submit function
  const signin = async (event) => {
    event.preventDefault();
    const mail = event.target.mail.value;
    const pwd = event.target.pwd.value;
    try {
      const userCred = await signInWithEmailAndPassword(auth, mail, pwd);
      const user = userCred.user;

      if (user.emailVerified) {
        Swal.fire({
          title: "Welcome!",
          text: "You have successfully signed in.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(`/${mail.split("@")[0]}`, {
          state: { mail: mail.split("@")[0] },
        });
      } else {
        Swal.fire({
          title: "Email not verified!",
          text: "Please verify your email before signing in.",
          icon: "warning",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message,
        icon: "error",
      });
    }
  };

  // register form, submit function
  const register = async (event) => {
    event.preventDefault();

    if (event.target.pwd.value === event.target.conpwd.value) {
      try {
        const userCred = await createUserWithEmailAndPassword(
          auth,
          event.target.mail.value,
          event.target.pwd.value
        );
        const user = userCred.user;
        await sendEmailVerification(user);
        Swal.fire({
          title: "Yay!",
          text: "Please verify through email and proceed to sign in",
          icon: "success",
        });
      } catch (error) {
        Swal.fire({
          title: "Oops!",
          text: error.message,
        });
      }
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Your passwords do not match",
        icon: "error",
      });
    }
  };

  return (
    <>
      <HomeHeader />
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
                <form onSubmit={signin}>
                  <div className="fw-light fst-italic my-3">Email:</div>
                  <input
                    id="mail"
                    className="form-control rounded my-3"
                    type="email"
                    placeholder="Type Email"
                    required
                  />
                  <div className="fw-light fst-italic my-3">Password:</div>
                  <input
                    id="pwd"
                    className="form-control rounded my-3"
                    type="password"
                    placeholder="Type password"
                    required
                  />
                  <div className="text-center">
                    <button className="btn btn-dark my-3" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
              <div
                id="register"
                style={{ display: selectedOp === 2 ? "block" : "none" }}
              >
                <div className="fw-light fw-bold my-3">Sign up here !!</div>
                <form onSubmit={register}>
                  <div className="fw-light fst-italic my-3">Mail ID:</div>
                  <input
                    name="mail"
                    className="form-control rounded my-3"
                    type="email"
                    placeholder="Your mail ID"
                    required
                  />
                  <div className="fw-light fst-italic my-3">Password:</div>
                  <input
                    name="pwd"
                    className="form-control rounded my-3"
                    type="password"
                    placeholder="Type password"
                    required
                  />
                  <div className="fw-light fst-italic my-3">
                    Confirm password:
                  </div>
                  <input
                    name="conpwd"
                    className="form-control rounded my-3"
                    type="password"
                    placeholder="Retype password again"
                    required
                  />
                  <div className="text-center">
                    <button className="btn btn-dark my-3" type="submit">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
