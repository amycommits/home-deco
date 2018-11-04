import React, { Component } from "react";
import PropTypes from "prop-types";
import Rectangle from "./Rectangle";

export default class RoomWrapper extends Component {
  render() {
    const { room, furniture } = this.props;

    return (
      <div>
        <h1>{room.label}</h1>

        <svg height={room.pixelHeight} width={room.pixelWidth}>
          <Rectangle
            pixelHeight={room.pixelHeight}
            pixelWidth={room.pixelWidth}
            roomWidth={room.roomWidth}
            roomHeight={room.roomHeight}
            featureWidth={room.roomWidth}
            featureHeight={room.roomHeight}
            roomStyle={room.roomStyle}
            orientation={room.orientation}
          />
          {room.features.map(feature => (
            <Rectangle
              pixelHeight={room.pixelHeight}
              pixelWidth={room.pixelWidth}
              roomWidth={room.roomWidth}
              roomHeight={room.roomHeight}
              featureWidth={feature.width}
              featureHeight={feature.height}
              roomStyle={feature.style}
              orientation={feature.orientation}
            />
          ))}
          {furniture.map(furniture => (
            <Rectangle
              pixelHeight={room.pixelHeight}
              pixelWidth={room.pixelWidth}
              roomWidth={room.roomWidth}
              roomHeight={room.roomHeight}
              featureWidth={furniture.width}
              featureHeight={furniture.depth}
              roomStyle={furniture.style}
              orientation={furniture.orientation}
              label={furniture.label}
            />
          ))}
        </svg>
      </div>
    );
  }
}

RoomWrapper.propTypes = {
  room: PropTypes.shape({
    pixelHeight: PropTypes.number,
    pixelWidth: PropTypes.number,
    roomHeight: PropTypes.number,
    roomWidth: PropTypes.number,
    roomStyle: PropTypes.shape({
      fill: PropTypes.string
    })
  })
};

RoomWrapper.defaultProps = {
  room: PropTypes.shape({
    pixelHeight: 1000,
    pixelWidth: 750,
    roomHeight: 200,
    roomWidth: 157,
    roomStyle: {
      fill: "red"
    }
  })
};
