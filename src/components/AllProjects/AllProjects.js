import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  Navbar,
  Nav,
} from "react-bootstrap";
import pic1 from "./imgs/img_1_1.jpg" // with import
import pic2 from "./imgs/img_1_2.jpg"
import pic3 from "./imgs/img_1_3.jpg"
import pic4 from "./imgs/img_1_4.jpg"
import pic5 from "./imgs/img_1_5.jpg"
import pic6 from "./imgs/img_1_6.jpg"
import pic7 from "./imgs/img_1_7.jpg"
import pic8 from "./imgs/img_1_8.jpg"
import pic9 from "./imgs/img_1_9.jpg"


/* Заменить Bootstrap Components */

function AllProjects() {
  return (
    <>
      <section className="d-flex justify-content-center align-items-start flex-column">
        <Navbar className="navbar-light">
          <Container>
            <Navbar.Brand href="/" className="fs-5 p-3">
              k-sterio
            </Navbar.Brand>
            <Nav>
              <Link className="nav-link fs-5 p-3" to="/AllProjects">
                All Projects
              </Link>
            </Nav>
          </Container>
        </Navbar>
      </section>
      {/* /* <!-- Project Section --> */}
      <section className="dev_section">
        {/* <!-- Dev Container --> */}
        <Container>
          {/* <!-- Header --> */}
          <h1 className="h1 text-center my-3 py-4">
            Projects & Certifications
          </h1>
          {/* <!-- Block Row --> */}
          <Row className="my-2">
            {/* <!-- Col-1 --> */}
            <Col lg={4} className="my-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={pic1} alt="Project#1" />
                <Card.Body>
                  <Card.Title>Introduction to Cybersecurity</Card.Title>
                  <Card.Text>
                    Learned the basic concepts needed to identify and protect a
                    user against common cyber threats and attacks.
                  </Card.Text>
                  <Button
                    href="https://www.codecademy.com/profiles/Sterioboy/certificates/de0bd5c89521d004ce449a86b0ad3319"
                    target="_blank"
                    variant="outline-info"
                  >
                    Certificate
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* <!-- Col-2 --> */}
            <Col lg={4} className="my-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={pic2} alt="Project#1" />
                <Card.Body>
                  <Card.Title>Learn the Command Line</Card.Title>
                  <Card.Text>
                    Learned how to navigate, access, and modify files and
                    folders using the terminal.
                  </Card.Text>
                  <Button
                    href="https://www.codecademy.com/profiles/Sterioboy/certificates/c87ba0541f8be78bc2f4ba1128233f6f"
                    target="_blank"
                    variant="outline-info"
                  >
                    Certificate
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* <!-- Col-3 --> */}
            <Col lg={4} className="my-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={pic3} alt="Project#1" />
                <Card.Body>
                  <Card.Title>Roman Numeral Converter</Card.Title>
                  <Card.Text>
                    Convert the given number into a roman numeral.
                  </Card.Text>
                  <Button
                    href="https://loving-shirley-5931d8.netlify.app/"
                    target="_blank"
                    variant="outline-info"
                  >
                    Certificate
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <!-- Project Section 2 --> */}
      <section className="dev_section mt-5">
        {/* <!-- Dev Container --> */}
        <Container>
          {/* <!-- Block Row --> */}
          <Row className="my-2">
            {/* <!-- Col-1 --> */}
            <Col lg={4} className="my-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={pic4}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Technical Documentation Page</h5>
                  <p className="card-text">
                    Implementation of Responsive Web Design. <br />
                    Principles and concepts:{" "}
                    <strong>HTML, CSS, Visual Design, Accessibility</strong>.
                  </p>
                  <a
                    href="https://tchdoc.netlify.app/"
                    target="_blank"
                    className="btn btn-outline-info btn-block"
                  >
                    Link
                  </a>
                </div>
              </div>
            </Col>
            {/* <!-- Col-2 --> */}
            <Col lg={4} className="my-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={pic5}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Product Landing Page</h5>
                  <p className="card-text">
                    Landing Page for a Tech Store. <br />
                    Principles and concepts:{" "}
                    <strong>HTML, CSS, Visual Design, Accessibility</strong>.
                  </p>
                  <a
                    href="https://lndingpage.netlify.app/"
                    target="_blank"
                    className="btn btn-outline-info btn-block"
                  >
                    Link
                  </a>
                </div>
              </div>
            </Col>
            {/* <!-- Col-3 --> */}
            <Col lg={4} className="my-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={pic6}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">Layout Page</h5>
                  <p className="card-text">
                    Layout page for the film description. <br />
                    Principles and concepts:{" "}
                    <strong>
                      HTML, CSS, Visual Design, jQuery, Accessibility
                    </strong>
                    .
                  </p>
                  <a
                    href="https://lucid-engelbart-9d25e4.netlify.app/#"
                    target="_blank"
                    className="btn btn-outline-info btn-block"
                  >
                    Link
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <!-- Project Section 3 --> */}
      <section className="dev_section mt-5">
        {/* <!-- Dev Container --> */}
        <Container>
          {/* <!-- Block Row --> */}
          <Row className="my-2">
            {/* <!-- Col-1 --> */}
            <Col lg={4} className="my-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={pic7}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">"Guess an Author" Python Game</h5>
                  <p className="card-text">
                    Principles and concepts: <strong>Python and tkinter</strong>
                    .
                  </p>
                  <a
                    href="https://github.com/Sterioboy/GUI_Scraping"
                    target="_blank"
                    className="btn btn-outline-info btn-block"
                  >
                    Link
                  </a>
                </div>
              </div>
            </Col>
            {/* <!-- Col-2 --> */}
            <Col lg={4} className="my-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={pic8}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    6.00.1x: Introduction to Computer Science and Programming
                    Using Python
                  </h5>
                  <p className="card-text">
                    A course of study offered by MITx.
                  </p>
                  <a
                    href="https://courses.edx.org/certificates/8f771710b9e9417995f1d716fc958ad2"
                    target="_blank"
                    className="btn btn-outline-info btn-block"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </Col>
            {/* <!-- Col-3 --> */}
            <Col lg={4} className="my-4">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={pic9}
                  alt="Card image cap"
                />
                <div className="card-body">
                  <h5 className="card-title">
                    JavaScript Algorithms and Data Structures
                  </h5>
                  <p className="card-text">
                    Developer Certification, representing approximately 300
                    hours of coursework.
                  </p>
                  <a
                    href="https://freecodecamp.org/certification/sterioboy/javascript-algorithms-and-data-structures"
                    target="_blank"
                    className="btn btn-outline-info btn-block"
                  >
                    Certificate
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <!-- Footer --> */}
      <footer>
        <Container>
          <Row>
            <Col className="text-center">
              <p className="text-center">
                Developed by Kirill Bondarenko 2022{" "}
                <i className="fab fa-react"></i>{" "}
                <i className="fas fa-heart"></i>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default AllProjects;
