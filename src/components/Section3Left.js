import { Container, Row, Col } from "react-bootstrap";

function Section3Left() {
  return (
    <div className="section-3">
      <Container>
        <Row>
          <Col lg={5}>1</Col>
          <Col lg={4}>2</Col>
          <Col lg={3}>3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Section3Left;
