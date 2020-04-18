import * as React from 'react';
import {
  SliderItem,
  GetHandleProps,
  GetTrackProps
} from 'react-compound-slider';

// *******************************************************
// HANDLE COMPONENT
// *******************************************************
interface IHandleProps {
  domain: number[];
  handle: SliderItem;
  getHandleProps: GetHandleProps;
}

export const Handle: React.SFC<IHandleProps> = ({
                                                  domain: [min, max],
                                                  handle: { id, value, percent },
                                                  getHandleProps
                                                }) => (
  <div
    role="slider"
    aria-valuemin={min}
    aria-valuemax={max}
    aria-valuenow={value}
    style={{
      left: `${percent}%`,
      position: 'absolute',
      marginLeft: '-18px',
      marginTop: '-6px',
      zIndex: 2,
      width: 24,
      height: 24,
      cursor: 'pointer',
      borderRadius: '50%',
      boxShadow: '1px 1px 1px 1px rgba(0, 0, 0, 0.2)',
      backgroundColor: '#34568f',
      fontSize: 10,
      paddingTop: 4
    }}
    {...getHandleProps(id)}
  >{value}</div>
);

// *******************************************************
// TRACK COMPONENT
// *******************************************************
interface ITrackProps {
  source: SliderItem;
  target: SliderItem;
  getTrackProps: GetTrackProps;
}

export const Track: React.SFC<ITrackProps> = ({
                                                source,
                                                target,
                                                getTrackProps
                                              }) => (
  <div
    style={{
      position: 'absolute',
      height: 14,
      zIndex: 1,
      backgroundColor: '#7aa0c4',
      borderRadius: 7,
      cursor: 'pointer',
      left: `${source.percent}%`,
      width: `${target.percent - source.percent}%`
    }}
    {...getTrackProps()}
  />
);

// *******************************************************
// TICK COMPONENT
// *******************************************************
interface ITickProps {
  key: string;
  tick: SliderItem;
  count: number;
}

export const Tick: React.SFC<ITickProps> = ({ tick, count }) => (
  <div>
    <div
      style={{
        position: 'absolute',
        marginTop: 0,
        width: 1,
        height: 0,
        backgroundColor: 'rgb(200,200,200)',
        left: `${tick.percent}%`
      }}
    />
    <div
      style={{
        position: 'absolute',
        marginTop: -1,
        fontSize: 10,
        color: 'white',
        textAlign: 'center',
        // marginLeft: `${-(100 / count) / 3}%`,
        marginLeft: -40,
        marginRight: 40,
        width: `${100 / count}%`,
        left: `${tick.percent}%`
      }}
    >
      {tick.value}
    </div>
  </div>
);