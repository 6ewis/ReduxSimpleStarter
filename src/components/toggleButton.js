import React, { Component } from 'react';

class Toggle extends Component {
  render() {
    const renderOptions = (option, i) => (
      <label key={i} className="toggle-container">
        <input onClick={this.props.toggle} name="toggle" type="radio" />
        <div className="toggle txt-s py3 toggle--active-white">{option}</div>
      </label>
    );

    return (
      <div className="toggle-group absolute top left ml12 mt12 border border--2 border--white bg-white shadow-darken10 z1">
        {['map', 'grid'].map(renderOptions)}
      </div>
    );
  }
}

export default Toggle;
