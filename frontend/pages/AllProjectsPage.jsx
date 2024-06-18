import Swal from "sweetalert2";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { Modal, Button, Form } from "react-bootstrap";

export function AllProjectsPage() {
  // archived show toggles
  const [showA, setShowA] = useState(false);
  function toggleClick() {
    setShowA(!showA);
  }

  // to extract username from URL
  const location = useLocation();
  const uname = location.state.mail;

  // to navigate to home page in sign out func
  const navigate = useNavigate();

  function out() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        navigate("/");
        Swal.fire("Signed out");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire("Signout unsuccessful");
      });
  }

  // for create project modal
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    desc: "",
    date: `${Date.now()}`,
    creator: uname,
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      ...(type === "radio" && { type: value }),
    }));
  };

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSubmit = (formData) => {
    console.log("Form submitted:", formData);
    Swal.fire("Form submitted successfully!");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(formData);
    handleCloseModal();
  };

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
      <br />
      <div className="container">
        <div id="currentProjects">
          <div className="d-flex align-items-center">
            <div className="fw-bolder fs-2">All Projects</div>
            <i
              className="px-2 fa-solid fa-square-plus fa-2x align-items-center justify-content-center ms-2"
              onClick={handleOpenModal}
              style={{ cursor: "pointer" }}
            ></i>
          </div>

          <br />
          <div
            className="card border border-warning"
            style={{ width: "22rem" }}
          >
            <div className="card-body">
              <div className="d-flex align-items-center">
                <div className="fw-bolder fs-5">Project-Name</div>
                <i className="px-2 fa-solid fa-pen-to-square justify-content-end ms-auto"></i>
              </div>
              <div className="card-text my-2">
                This is a dummy project hardcoded to test UI.
              </div>
              <div className="fw-light fs-6 py-2">Managerial-Team</div>
              <div className="card-footer px-0">
                <small className="text-muted">From 1st June, 2024.</small>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div id="archivedProjects">
          <div className="d-flex align-items-center mt-3">
            <div className="fw-bold" style={{ color: "#f07b0e" }}>
              Archived
            </div>
            <div onClick={toggleClick}>
              {showA ? (
                <i
                  id="ddtoggle-up"
                  style={{ color: "#f07b0e" }}
                  className="px-2 fa-solid fa-caret-up fa-1x align-items-center justify-content-center ms-2"
                ></i>
              ) : (
                <i
                  id="ddtoggle-down"
                  style={{ color: "#f07b0e" }}
                  className="px-2 fa-solid fa-caret-down fa-1x align-items-center justify-content-center ms-2"
                ></i>
              )}
            </div>
          </div>
          <br />

          {showA ? (
            <div
              className="card border border-success"
              style={{ width: "22rem" }}
            >
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <div className="fw-bolder fs-5">Project-Name</div>
                </div>
                <div className="card-text my-2">
                  This is a dummy project hardcoded to test UI.
                </div>
                <div className="fw-light fs-6 py-2">Managerial-Team</div>
                <div className="card-footer px-0">
                  <small className="text-muted">From 1st June, 2024.</small>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
      <Modal show={showModal} onHide={handleCloseModal} className="m-3">
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold">Create a new project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="name">
              <Form.Label className="fw-bold">Name</Form.Label>
              <Form.Control
                className="mb-3"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="type">
              <div className="d-flex align-items-center">
                <Form.Label className="mr-2 pe-3 fw-bold">Type</Form.Label>
                <Form.Check
                  inline
                  value="in"
                  type="radio"
                  aria-label="radio 1"
                  label="Individual"
                  name="type"
                  onChange={handleChange}
                  checked={formData.type === "in"}
                />
                <Form.Check
                  inline
                  value="te"
                  type="radio"
                  aria-label="radio 2"
                  label="Team"
                  name="type"
                  onChange={handleChange}
                  checked={formData.type === "te"}
                />
              </div>
            </Form.Group>
            <Form.Group controlId="desc">
              <Form.Label className="fw-bold">Description</Form.Label>
              <Form.Control
                className="mb-3"
                as="textarea"
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                rows={3}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
