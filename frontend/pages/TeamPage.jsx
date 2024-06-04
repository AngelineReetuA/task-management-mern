import React from "react";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";

export function TeamPage() {
  // to extract username from URL
  const location = useLocation();
  const uname = location.state.mail;

  // to navigate to home page in sign out func
  const navigate = useNavigate()

  // creating a team modal
  async function create() {
    const { value: formValues } = await Swal.fire({
      title: "Create a New Project",
      html: `
          <label>Enter Project ID:</label>
          <input id="projID" class="swal2-input">
          <label>Enter Project Password:</label>
          <input id="projPass" class="swal2-input">
        `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("projID").value,
          document.getElementById("projPass").value,
        ];
      },
    });
    if (formValues) {
      Swal.fire("save to DB" + JSON.stringify(formValues));
    }
  }

  // joining a team modal
  async function join() {
    const { value: formValues } = await Swal.fire({
      title: "Join an Existing Project",
      html: `
            <label>Project ID:</label>
            <input id="projID" class="swal2-input">
            <label>Password:</label>
            <input id="projPass" class="swal2-input">
          `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("projID").value,
          document.getElementById("projPass").value,
        ];
      },
    });
    // change if to if proj exists in DB
    if (formValues) {
      Swal.fire(
        "redirect if proj exists to dashboard" + JSON.stringify(formValues)
      );
    } else {
      Swal.fire("Project does not exist.");
    }
  }

  function out() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/")
        Swal.fire("Signed out")
      })
      .catch((error) => {
        console.log(error)
        Swal.fire("Signout unsuccessful")
      });
  }

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ height: "50px" }}
      >
        <div className="container" style={{ color: "white" }}>
          <div>{uname}</div>
          <div className="align-items-end" onClick={out}>
            Sign out
          </div>
        </div>
      </nav>
      <img
        src="./assets/teamPageHeaderImage.png"
        alt="hi"
        style={{ height: "500px", width: "800px" }}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-light border-dark mx-3" onClick={create}>
          Create Team
        </button>
        <button className="btn btn-light border-dark" onClick={join}>
          Join Team
        </button>
      </div>
    </>
  );
}
