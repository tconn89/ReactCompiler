
import React from 'react'

export default class Container extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="wrapper">
          {this.props.children}
      </div>
    );
  }
}
