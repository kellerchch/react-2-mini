import React, { Component } from 'react';

export default class ColorChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allowEdit: this.props.allowEdit
    };
  }

  componentWillReceiveProps(props){
    this.setState({allowEdit: props.allowEdit})
  }

  render() {
    return (
      <select onChange={(event) => this.props.update(event.target.value)} disabled = {this.state.allowEdit === 'false'}
      className="dropDownContainer">
        <option value="black"> Black </option>
        <option value="blue"> Blue </option>
        <option value="green"> Green </option>
      </select>
    )
  }
}