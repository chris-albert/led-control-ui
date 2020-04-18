import React from "react";
import Animation from "./Animation";
import Color from "./Color";
import Brightness from "./Brightness";
import {Col, Container, Row} from "react-bootstrap";

function Home() {
  return (
    <Container fluid className='mt-3'>
      <Row>
        <Col>
          <Color/>
        </Col>
        <Col>
          <div>
            <Brightness />
          </div>
          <div className='mt-3'>
            <Animation />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Home;