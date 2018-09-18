import React, { Component } from 'react';

export default class ImageSlider extends Component {
   constructor() {
    super()
    this.state = {
      currentSlideIndex: 0
    }
  }
  
  render() {
    return (
      <div className="bar" id="cat">
         'I am on slide <CURRENT_SLIDE>'
      </div>
    );
  }
}
