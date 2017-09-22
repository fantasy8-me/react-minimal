import React from 'react';
import propTypes from 'prop-types';

export default class SeatPlan extends React.PureComponent {
  static propTypes = {
    filed1: propTypes.string.isRequired,
  };
  render() {
    const { filed1 } = this.props;
    return <div>{filed1}-aa</div>;
  }
}
