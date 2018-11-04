import React, { Component } from "react";
import Room from "./Room/index";
import { HomeContext } from "./HomeState.context";
import homeInfo from "./json/home_info.json";
import furnitureInfo from "./json/furniture.json";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomWidth: 140,
      roomHeight: 140,
      pixelWidth: 500,
      pixelHeight: 500
    };
  }

  render() {
    return (
      <HomeContext.Provider value={this.state}>
        <div>
          {homeInfo.map(room => {
            return <Room key={room.id} room={room} furniture={furnitureInfo} />;
          })}
        </div>
      </HomeContext.Provider>
    );
  }
}
