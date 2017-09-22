import React from 'react';
import propTypes from 'prop-types';
import logo from '../../public/images/Optimus.png';
import './seatplan.css';

export default class SeatPlan extends React.PureComponent {
  static propTypes = {
    numOfSeat: propTypes.number,
  };
  static defaultProps = {
    numOfSeat: 30,
  };
  render() {
    const { numOfSeat } = this.props;

    return (
      <div>
        <img src={logo} alt="" srcSet="" width={80} />
        <div id="roomArea">
          {[...new Array(numOfSeat)].map((i, count) => <div className="seat">{count}</div>)}
        </div>
      </div>
    );
  }
}
