import React, { useState, useContext, useEffect } from "react";
import { handleTimerUI, handleSelectedTime } from "../utils/helpers";
import { globalState } from "../context/globalState";

function Timer() {
  const [timerMins, setTimerMins] = useState([25, 45, 60]);
  const MyContext = useContext(globalState);
  const { setTimerStatus, timerStatus } = MyContext;
  useEffect(() => {
    if (Array.isArray(timerMins)) setTimerStatus("timer is off 🕛");
    else setTimerStatus("timer in progress 🕛");
  }, [timerMins]);
  return (
    <div className="timers-container">
      <i
        className="fa-regular fa-hourglass toolbar-icons"
        onClick={handleTimerUI}
      ></i>
      {Array.isArray(timerMins) ? (
        timerMins.map((el, index) => (
          <div
            className="timer-selections"
            onClick={(e) =>
              handleSelectedTime(e, index, setTimerMins, timerMins)
            }
            key={index}
          >
            {el}
          </div>
        ))
      ) : (
        <div className="selected-time timer-selections">{timerMins}</div>
      )}
    </div>
  );
}

export default Timer;
