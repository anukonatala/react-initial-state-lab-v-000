import React, { Component } from 'react';

export default class ImageSlider extends Component {
   constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  
  render() {
    return (
      <div className="bar" id="cat">
        <img src="/cat.gif" />
      </div>
    );
  }
}
