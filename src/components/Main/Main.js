import React from "react";
import { Link } from "react-router-dom";
import "./main.css";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Navbar,
  Nav,
} from "react-bootstrap";
import profilePic from "./imgs/profile-pic.JPG"; // with import
import projectPic1 from "./imgs/student-invest-pic.jpg";
import projectPic2 from "./imgs/eco-friend-pic.jpg";
import projectPic3 from "./imgs/deli-food-pic.jpg";

function Main() {
  return (
    <>
      {/* Jumbotron Container */}
      <section className="jumbotron d-flex justify-content-center align-items-start flex-column">
        <Navbar className="navbar-dark">
          <Container>
            <Navbar.Brand href="/" className="fs-5 p-3 mt-3">
              k-sterio
            </Navbar.Brand>
            <Nav>
              <Link className="nav-link fs-5 p-3 mt-3" to="/AllProjects">
                All Projects
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="jContainer text-center border p-4">
          <img src={profilePic} alt="Profile Picture" className="my-4" />
          <h1>Kirill Bondarenko</h1>
          <p className="lead">Full Stack Developer</p>
          <hr className="my-3" />
          <p className="lead">Toronto, CA | Moscow, RU</p>
          <Button
            href="https://hh.ru/applicant/resumes/view?resume=190fd32eff0983da9f0039ed1f61365864465a"
            variant="outline-primary"
            target="_blank"
            className="fs-5"
          >
            Résumé (RU)
          </Button>
        </div>
      </section>

      {/* <!-- About Section --> */}
      <section className="about_section">
        {/* <!-- About Container --> */}
        <Container>
          {/* <!-- Block Row --> */}
          <Row>
            {/* <!-- Col-1 --> */}
            <Col lg={8} className="my-2">
              <div className="about_section_personal">
                <p className="fs-3 fw-bold">About me</p>
                <p className="fs-5">
                  Hello there 👋 <br />
                  I'm a Full Stack Developer with a passion for building great
                  software. My mission is to build a product that makes you look
                  and feel incredible. Feel free to DM me!
                </p>
                {/* <!--Button to index_1.html--> */}
                <Link to="/AllProjects" className="btn btn-outline-secondary">
                  More Projects
                </Link>
              </div>
            </Col>

            {/* <!-- Col-2 --> */}
            <Col lg={4} className="my-2">
              <div className="about_section_contact">
                <p className="fs-3 fw-bold">Contact</p>
                <a
                  className="fs-5"
                  href="https://www.linkedin.com/in/sterio/"
                  target="_blank"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
                <br />
                <a
                  className="fs-5"
                  href="https://github.com/Sterioboy"
                  target="_blank"
                >
                  <i className="fab fa-github-square"></i> GitHub
                </a>
                <br />
                <a
                  className="fs-5"
                  href="https://t.me/k_sterio"
                  target="_blank"
                >
                  <i className="fab fa-telegram"></i> Telegram
                </a>
                <br />
                <a className="fs-5">
                  <i className="fas fa-envelope-square"></i>{" "}
                  bondarenkokirill.jobs@gmail.com
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* <!-- Dev Section --> */}
      <section className="dev_section">
        {/* <!-- Dev Container --> */}
        <Container>
          {/* <!-- Block Row --> */}
          <Row className="my-2">
            {/* <!-- Col-1 --> */}
            <Col lg={4} className="my-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={projectPic1} alt="Project#1" />
                <Card.Body>
                  <Card.Title>Student Invest</Card.Title>
                  <Card.Text>
                    Social network for students and investors. Connects creative
                    minds with Angel investors, that help them unlock their
                    potential.
                  </Card.Text>
                  <ListGroup variant="flush">
                    <strong>Stack:</strong>
                    <ListGroup.Item>
                      <em>Front</em>: JavaScript, React + Redux, Redux-Thunk,
                      Bootstrap
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <em>Back</em>: Node.js, Express, Sessions
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <em>DB</em>: PostgreSQL, Sequelize ORM
                    </ListGroup.Item>
                  </ListGroup>
                  <Button
                    style={{ width: "100%" }}
                    href="https://github.com/Sterioboy/Student-Invest"
                    target="_blank"
                    variant="outline-primary"
                    className="mt-2"
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* <!-- Col-2 --> */}
            <Col lg={4} className="my-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={projectPic2} alt="Project#1" />
                <Card.Body>
                  <Card.Title>Eco Friend</Card.Title>
                  <Card.Text>
                    Web-application for Ecological Activities and Communities.
                  </Card.Text>
                  <ListGroup variant="flush">
                    <strong>Stack:</strong>
                    <ListGroup.Item>
                      <em>Front</em>: JavaScript, React + Redux, Redux-Thunk,
                      Tailwind
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <em>Back</em>: Node.js, Express, Sessions
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <em>DB</em>: PostgreSQL, Sequelize ORM
                    </ListGroup.Item>
                  </ListGroup>
                  <Button
                    style={{ width: "100%" }}
                    href="https://github.com/Sterioboy/Eco-Friend"
                    target="_blank"
                    variant="outline-primary"
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            {/* <!-- Col-3 --> */}
            <Col lg={4} className="my-4">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={projectPic3} alt="Project#1" />
                <Card.Body>
                  <Card.Title>Deli Food</Card.Title>
                  <Card.Text>
                    Helps restaurants to improve quality of food, while
                    optimizing some food preparation processes.
                  </Card.Text>
                  <ListGroup variant="flush">
                    <strong>Stack:</strong>
                    <ListGroup.Item>
                      <em>Front</em>: JavaScript, React + Redux, Redux-Thunk,
                      Yandex.Maps API
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <em>Back</em>: Node.js, Express, Sessions
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <em>DB</em>: PostgreSQL, Sequelize ORM
                    </ListGroup.Item>
                  </ListGroup>
                  <Button
                    style={{ width: "100%" }}
                    href="https://github.com/vladmilko/delifood"
                    target="_blank"
                    variant="outline-primary"
                  >
                    GitHub
                  </Button>
                </Card.Body>
              </Card>
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

export default Main;
