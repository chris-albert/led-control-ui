import React, {FunctionComponent} from "react";
import {Card} from "react-bootstrap";

interface PanelProps {
  name: string
}

const Panel: FunctionComponent<PanelProps> = (props) => {
  return (
    <Card>
      <Card.Header as="h5">{props.name}</Card.Header>
      <Card.Body>
        <Card.Text>
          {props.children}
        </Card.Text>
      </Card.Body>
    </Card>
  )
};

export default Panel;