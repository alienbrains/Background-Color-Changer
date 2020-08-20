import React from "react";

import ColorPicker from "../ColorPicker/index";

import "./style.css";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "white"
    };
  }

  //  executed when a color is selected in color picker
  onColorChange = (e) => {
    //  here e refers to an event which has been occured when a color is selected

    //  whenever we update the color in state then the UI also re-renders to show thw color
    this.setState({
      color: e.target.value // the current color value selected is stored in e.target.value
    });
  };

  render = () => {
    return (
      <div
        style={{
          // setting the current selected color in background
          backgroundColor: this.state.color
        }}
        className="bg-container">
        <ColorPicker
          onChange={this.onColorChange}
          currentColor={this.state.color}
        />
      </div>
    );
  };
}

export default Background;
