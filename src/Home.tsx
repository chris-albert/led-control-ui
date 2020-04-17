import React, {FormEvent, useState} from "react";
import API from './API'
import {Button, FormControl, InputGroup} from "react-bootstrap";

function Home() {

  const [color, setColor] = useState('white');

  function onColorChange(e: FormEvent<FormControl & HTMLInputElement>) {
    const value = e.currentTarget.value;
    setColor(value);
  }

  function onColorGo(c: string) {
    API.solid(c)
  }

  return (
    <div>
      <div>
        <Button variant="outline-secondary" onClick={() => onColorGo('red')}>Red</Button>
        <Button variant="outline-secondary" onClick={() => onColorGo('green')}>Green</Button>
        <Button variant="outline-secondary" onClick={() => onColorGo('blue')}>Blue</Button>
        <Button variant="outline-secondary" onClick={() => onColorGo('white')}>White</Button>
        <Button variant="outline-secondary" onClick={() => onColorGo('black')}>Black</Button>
      </div>
      <div>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">Color</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Color"
            aria-label="Color"
            aria-describedby="basic-addon1"
            onChange={onColorChange}
            value={color}
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={() => onColorGo(color)}>Go</Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
      Home
    </div>
  )
}

export default Home;