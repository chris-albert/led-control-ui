import React, {useState} from "react";
import {Col, Container, InputGroup, Row} from "react-bootstrap";
import API from "./API";
import Panel from "./Panel";
import MySlider from "./SliderComponent";

interface ColorBlockProps {
  r: number,
  g: number,
  b: number,
  onClick: (r: number, g: number, b: number) => void
}

const ColorBlock = (props: ColorBlockProps) => {
  return (
    <div
      className='color-block'
      style={{backgroundColor: `rgb(${props.r.toString()}, ${props.g.toString()}, ${props.b.toString()})`}}
      onClick={() => {
        props.onClick(props.r, props.g, props.b);
        onColorGo(props.r, props.g, props.b)
      }}
    />
  );
};

function onColorGo(r: number, g: number, b: number) {
  API.solid(r, g, b);
}

interface ColorSliderProps {
  name: string,
  onChange: (n: number) => void,
  value: number
}

const ColorSlider = (props: ColorSliderProps) => {

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">{props.name}</InputGroup.Text>
      </InputGroup.Prepend>
      <div className='input-group form-control'>
        <MySlider
          values={[0, 255]}
          value={props.value}
          onChange={(n) => {
            props.onChange(n[0]);
          }}
        />
      </div>
      <InputGroup.Append>
        <InputGroup.Text id="basic-addon1">{props.value}</InputGroup.Text>
      </InputGroup.Append>
    </InputGroup>
  )
};

const Color = () => {

  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);

  const grid = [
    [
      [255, 0, 0],
      [0, 255, 0],
      [0, 0, 255]
    ],
    [
      [255, 255, 0],
      [0, 255, 255],
      [255, 0, 255]
    ],
    [
      [0, 0, 0],
      [255, 255, 255]
    ]
  ];

  return (
    <Panel name='Color'>
      <div>
        <Container className='color-grid'>
          {grid.map(row => {
            return (
              <Row>
                {row.map(block => {
                  const [r, g, b] = block;
                  return (
                    <Col>
                      <ColorBlock r={r} g={g} b={b} onClick={(rr, gg, bb) => {
                        setRed(rr);
                        setGreen(gg);
                        setBlue(bb)
                      }}/>
                    </Col>
                  );
                })}
              </Row>
            )
          })}
        </Container>
      </div>
      <div className='mt-3'>
        <ColorSlider name='Red' onChange={setRed} value={red}/>
        <ColorSlider name='Green' onChange={setGreen} value={green}/>
        <ColorSlider name='Blue' onChange={setBlue} value={blue}/>
        <div
          onClick={() => onColorGo(red, green, blue)}
          style={{
            height: 50,
            backgroundColor: `rgb(${red.toString()}, ${green.toString()}, ${blue.toString()})`,
            cursor: 'pointer',
            border: '1px solid black',
            borderRadius: 5
          }}
        />
      </div>
    </Panel>
  );
};

export default Color;