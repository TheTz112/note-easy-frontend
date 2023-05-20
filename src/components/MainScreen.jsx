import React from 'react';
import { Container, Row } from 'react-bootstrap';
import '../styles/MainScreen.css';
const MainScreen = ({ title, children }) => {
  return (
    <div className="mainback">
      <Container>
        <Row>
          <div className="page">
            {title && (
              <>
                <h1 className="heading">{title}</h1>
                <hr />
              </>
            )}
            {children}
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Blanditiis porro voluptatibus quisquam cupiditate impedit! Ab
              necessitatibus velit exercitationem incidunt, error ipsam, debitis
              quidem nemo officiis praesentium laboriosam et eaque ratione!
            </p>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default MainScreen;
