import React from 'react';
import propTypes from 'prop-types';
import logo from '../../public/images/Optimus.png';

export default class SeatPlan extends React.PureComponent {
  static propTypes = {
    filed1: propTypes.string.isRequired,
  };
  render() {
    const { filed1 } = this.props;
    return (
      <div>
        <img src={logo} alt="" srcSet="" width={80} />
        {filed1}-a
      </div>
    );
  }
}
