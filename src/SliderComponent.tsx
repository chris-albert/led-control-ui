import * as React from 'react';
import { Slider, Rail, Handles, Tracks, Ticks } from 'react-compound-slider';
import {Handle, Tick, Track} from "./SliderComponents";

const sliderStyle: React.CSSProperties = {
  margin: '5px',
  position: 'relative'
};

const railStyle: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: 14,
  borderRadius: 7,
  cursor: 'pointer',
  backgroundColor: 'rgb(155,155,155)'
};

interface SliderProps {
  values: Array<number>,
  value: number,
  onChange: (n: readonly number[]) => void,
  onUpdate?: (n: readonly number[]) => void
}

function MySlider(props: SliderProps) {

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Slider
        mode={1}
        step={1}
        domain={props.values}
        rootStyle={sliderStyle}
        onChange={props.onChange}
        onUpdate={props.onUpdate}
        values={[props.value]}
      >
        <Rail>
          {({ getRailProps }) => (
            <div style={railStyle} {...getRailProps()} />
          )}
        </Rail>
        <Handles>
          {({ handles, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map(handle => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={[props.value]}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
        <Ticks count={10}>
          {({ ticks }) => (
            <div className="slider-ticks">
              {ticks.map(tick => (
                <Tick key={tick.id} tick={tick} count={ticks.length} />
              ))}
            </div>
          )}
        </Ticks>
      </Slider>
    </div>
  );
}

export default MySlider;