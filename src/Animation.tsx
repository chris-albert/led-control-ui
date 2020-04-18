import React, {FormEvent, useState} from "react";
import {Button, Card, FormControl, InputGroup} from "react-bootstrap";
import API from "./API";
import Panel from "./Panel";

const onGo = (n: string, o: object) => {
  API.animate(n.toLowerCase(), o);
}

interface DurationAnimationProps {
  name: string
}

const DurationAnimation = (props: DurationAnimationProps) => {
  const [duration, setDuration] = useState('50ms');
  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">{props.name}</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="duration"
        aria-label="Duration"
        aria-describedby="basic-addon1"
        onChange={(e: FormEvent<FormControl & HTMLInputElement>) => setDuration(e.currentTarget.value)}
        value={duration}
      />
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={() => onGo(props.name, {duration: duration})}>Go</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

const TheaterAnimation = () => {

  const [duration, setDuration] = useState('50ms');
  const [color, setColor] = useState('red');
  const [bgColor, setBgColor] = useState('blue');
  const [channels, setChannels] = useState(3);
  const [flip, setFlip] = useState(false);
  const [count, setCount] = useState(1);

  return (
    <InputGroup className="mb-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Theater</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="duration"
        aria-label="Duration"
        aria-describedby="basic-addon1"
        onChange={(e: FormEvent<FormControl & HTMLInputElement>) => setDuration(e.currentTarget.value)}
        value={duration}
      />
      <InputGroup.Append>
        <Button
          variant="outline-secondary"
          onClick={() => onGo('theater', {
            duration: duration,
            color: color,
            backgroundColor: bgColor,
            channels: channels,
            flip: flip,
            count: count
          })}>Go</Button>
      </InputGroup.Append>
    </InputGroup>
  );
}

function Animation() {

  function onStop() {
    API.stopAnimate()
  }

  return (
    <Panel name='Animation'>
      <DurationAnimation name='Sequence'/>
      <DurationAnimation name='Wipe'/>
      <DurationAnimation name='Rainbow'/>
      <TheaterAnimation />
    <InputGroup className="mb-3">
      <InputGroup.Append>
        <Button variant="outline-secondary" onClick={onStop}>Stop Animations</Button>
      </InputGroup.Append>
    </InputGroup>
    </Panel>
  )
}

export default Animation;