import React, { Component } from "react";
import PropTypes from "prop-types";
//import { HomeContext } from "../HomeState.context";
import { scaleLinear } from "d3-scale";

export default class Rectangle extends Component {
  constructor(props) {
    super(props);
  }
  getPosition(
    orientation,
    xScale,
    yScale,
    maxWidth,
    maxHeight,
    fWidth,
    fHeight
  ) {
    let position = { x: null, y: null };
    if (orientation.left !== null) {
      position["x"] = xScale(orientation.left);
    } else {
      position["x"] = xScale(maxWidth - orientation.right - fWidth);
    }
    if (orientation.top !== null) {
      position["y"] = yScale(orientation.top);
    } else {
      position["y"] = yScale(maxHeight - orientation.bottom - fHeight);
    }
    return position;
  }
  basicRoom() {
    const {
      pixelHeight,
      pixelWidth,
      roomHeight,
      roomWidth,
      roomStyle,
      featureWidth,
      featureHeight,
      orientation,
      label
    } = this.props;
    const xDomain = [0, roomWidth];
    const xRange = [0, pixelWidth];
    const xScale = scaleLinear()
      .domain(xDomain)
      .range(xRange);

    const yDomain = [0, roomHeight];
    const yRange = [0, pixelHeight];
    const yScale = scaleLinear()
      .domain(yDomain)
      .range(yRange);
    const position = this.getPosition(
      orientation,
      xScale,
      yScale,
      roomWidth,
      roomHeight,
      featureWidth,
      featureHeight
    );

    return [
      <rect
        className="room"
        x={position["x"]}
        y={position["y"]}
        width={xScale(featureWidth)}
        height={yScale(featureHeight)}
        style={roomStyle}
      >
        <title>{label}</title>
      </rect>
    ];
  }
  render() {
    const basicRoom = this.basicRoom();
    const { pixelHeight, pixelWidth } = this.props;
    return <g>{basicRoom}</g>;
  }
}

Rectangle.propTypes = {
  pixelHeight: PropTypes.number,
  pixelWidth: PropTypes.number,
  roomHeight: PropTypes.number,
  roomWidth: PropTypes.number,
  featureWidth: PropTypes.number,
  featureHeight: PropTypes.number,
  xPosition: PropTypes.number,
  yPosition: PropTypes.number,
  roomStyle: PropTypes.shape({
    fill: PropTypes.string
  })
};
