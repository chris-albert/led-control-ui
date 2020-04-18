import React, {useState} from "react";
import {Card, InputGroup} from "react-bootstrap";
import MySlider from "./SliderComponent";
import API from "./API";
import Panel from "./Panel";

const Brightness = () => {

  const [brightness, setBrightness] = useState(255);

  const onBrightnessSet = (n: readonly number[]) => {
    const num = n[0];
    setBrightness(num);
    API.brightness(num);
  };

  return (
    <Panel name='Brightness'>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text id="basic-addon1">Brightness</InputGroup.Text>
        </InputGroup.Prepend>
        <div className='input-group form-control'>
          <MySlider
            values={[0, 255]}
            value={255}
            onChange={onBrightnessSet}
          />
        </div>
        <InputGroup.Append>
          <InputGroup.Text id="basic-addon1">{brightness}</InputGroup.Text>
        </InputGroup.Append>
      </InputGroup>
    </Panel>
  )
};

export default Brightness;