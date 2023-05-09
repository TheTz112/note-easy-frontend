import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import '../../styles/LandingPage.css';
const LandingPage = () => {
  return (
    <div className="main">
      <Container>
        <Row>
          <div className="intro-text">
            <div>
              <h1 className="title">Note Easy</h1>
              <p className="subtitle"></p>
            </div>
            <div className="bth-container">
              <a href="/mynotes">
                <Button size="lg" className="landingbutton">
                  Notes
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
