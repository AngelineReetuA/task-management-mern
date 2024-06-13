import React from "react";
import "../styles/styles.css";
import { HomeHeader } from "../components/HomeHeader";

const Help = () => {
  return (
    <>
      <HomeHeader />
      <div className="container p-5">
        <h4 className="sourceCodePro fw-bold">
          Help to navigate through Spread
        </h4>
        <p>
          Welcome to the Help Center for Spread! We're here to help you get the
          most out of our app and streamline your project management process.
        </p>
        <p>
          This Help Center is organized to make finding the information you need
          as easy as possible. Here's a quick rundown of what you'll find:
        </p>
        <ol>
          <li>Register for a free account (takes seconds!). </li>
          <li>Sign in with your new account. </li>
          <li>Join a Team: Enter the Team ID provided by your team leader. </li>
          <li>Welcome to your Dashboard!</li>
        </ol>
      </div>
    </>
  );
};

export default Help;
