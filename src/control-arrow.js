import React from 'react';
import PropTypes from "prop-types";
import './assets/control-arrow.scss';

function ControlArrow({ direction, fromTopValue, setFromTopValue }) {
  const clickedArrow = () => {
    console.log("tell me what the from top value is!", fromTopValue);
    if (direction === "up" && fromTopValue >= -470) {
      setFromTopValue(fromTopValue - 26);
    } else if (direction === "down" && fromTopValue <= -32) {
      setFromTopValue(fromTopValue + 26);
    }
  }

  return (
    <button onClick={() => clickedArrow()} className={`arrow block self-center ${direction === "up" ? "arrow-up" : "arrow-down"}`}>
      <div className="arrow-top"></div>
      <div className="arrow-bottom"></div>
    </button>
  );
}

ControlArrow.propTypes = {
  direction: PropTypes.string,
  fromTopValue: PropTypes.number,
  setFromTopValue: PropTypes.func
}

export default ControlArrow;
