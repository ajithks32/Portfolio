import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import '@fontsource/montserrat';
import '@fontsource/poppins';
import './Resume.css';
import Footer from './Footer';

const Resume = () => {
  return (
    <div className="resume-container" id="resume">
      <Container>
        {/* Education Section */}
        <h5 className="section-educationtitle ">EDUCATION</h5>
        <Row className="g-4 d-flex flex-column">
          <Col xs={12} md={6}>
            <Card className="resume-card">
              <Card.Body>
                <Card.Title  className="section-heading orangecolour text-primary  mb-lg-4"><h5>B.Tech in Information Technology</h5></Card.Title>
                <Card.Subtitle className="section-subheading  mb-lg-2"><h5>Mookambigai College of Engineering, Pudukkottai</h5></Card.Subtitle>
                <Card.Text className="section-description text-dark">
                  Graduated in 2024 with a focus on front-end development, web technologies, and computer science fundamentals.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="resume-card">
              <Card.Body>
                <Card.Title className="section-heading orangecolour text-primary mb-lg-4"><h5>Front-End Development Course</h5></Card.Title>
                <Card.Subtitle className="section-subheading mb-lg-2"><h5>Besant Technologies,Velachery</h5></Card.Subtitle>
                <Card.Text className="section-description text-dark">
                  Completed a comprehensive course in front-end development, learning technologies like HTML, CSS, JavaScript, React.js, and more.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Projects Section */}
        <h5 className="section-title text-white text-center">PROJECTS</h5>
        <Row className="g-4 mb-5">
          <Col xs={12} md={6}>
            <Card className="resume-card">
              <Card.Body>
                <Card.Title className="section-heading orangecolour">Portfolio Website</Card.Title>
                <ListGroup variant="flush" className="project-details">
                  <ListGroup.Item>Developed a personal portfolio website showcasing projects, skills, and achievements.</ListGroup.Item>
                  <ListGroup.Item>Used React.js for dynamic rendering, providing a smooth user experience.</ListGroup.Item>
                  <ListGroup.Item>Designed with a modern UI using Bootstrap and custom CSS for responsiveness.</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6}>
            <Card className="resume-card">
              <Card.Body>
                <Card.Title className="section-heading orangecolour">Admin Dashboard - Grace Academy</Card.Title>
                <ListGroup variant="flush" className="project-details">
                  <ListGroup.Item>Developed an admin control panel for managing staff, students, and academic data.</ListGroup.Item>
                  <ListGroup.Item>Integrated React.js for efficient state management and routing.</ListGroup.Item>
                  <ListGroup.Item>Collaborated with back-end developers for seamless API integration.</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>

       
      </Container>
      <Footer />
    </div>
  );
};

export default Resume;
