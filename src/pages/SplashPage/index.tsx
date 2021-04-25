import React from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import { Link } from 'react-router-dom';

interface SplashPageProps {

}

class SplashPage extends React.Component<SplashPageProps> {
  render() {
    return (
      <Container className="h-100">
        <Row className="h-100">
          <Col sm={6} className="mx-auto my-auto">
            <Card>
              <Card.Body className="text-center">
                <h1>World of Casus</h1>
                <br />
                <Link to="/apply" className="btn btn-success btn-lg" role="button">Apply</Link>
                <br /><br />
                <Link to="/login">I'm an existing player</Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SplashPage;