import React from 'react';
import ReactDOM from 'react-dom';
// import React from "react";
import propTypes from 'prop-types';

export default class Index extends React.PureComponent {
  static propTypes = {
    filed1: propTypes.string.isRequired,
  };
  render() {
    const { filed1 } = this.props;
    return <div>{filed1}</div>;
  }
}

ReactDOM.render(<Index filed1="hello world" />, document.getElementById('root'));
