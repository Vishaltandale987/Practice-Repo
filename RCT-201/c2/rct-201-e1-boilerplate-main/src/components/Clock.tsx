import React from "react";
import { setInterval } from "timers/promises";
import useClock from "../hooks/useClock";

type Props = {
  //  TODO
};

const Clock = (props: Props) => {

const {hours,minutes,seconds}=useClock()

  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        {/* Label */ }
        24 Hours Live components Clock
      </h4>
      <span data-testid="clock-hours">
        {/* Hours */ hours}
        </span>
        :
      <span data-testid="clock-minutes">
        {/* Minutes */ minutes}
      </span>
       :
      <span data-testid="clock-seconds">
        {/* Seconds */ seconds}
        </span>
    </div>
  );
};

export default Clock;
