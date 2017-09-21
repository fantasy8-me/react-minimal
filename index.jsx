import React from 'react';
// import React from "react";
import propTypes from 'prop-types';

export default class Index extends React.PureComponent {
  static propTypes = {
    filed1: propTypes.bool.isRequired,
  };
  render() {
    const { filed1 } = this.props;
    return <div>{filed1}</div>;
  }
}
