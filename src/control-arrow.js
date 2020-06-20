import React from 'react';
import PropTypes from "prop-types";
import './assets/control-arrow.scss';

function ControlArrow({direction}) {
  const clickedArrow = () => {
    console.log("clicked the arrow!", direction);
  }
  return (
    <button onClick={() => clickedArrow()} className={`arrow absolute block ${direction === "up" ? "arrow-up" : "arrow-down"}`}>
      <div className="arrow-top"></div>
      <div className="arrow-bottom"></div>
    </button>
  );
}

ControlArrow.propTypes = {
  direction: PropTypes.string
}

export default ControlArrow;
