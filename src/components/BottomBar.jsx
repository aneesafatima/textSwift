import React, { useContext } from "react";
import { globalState } from "../context/globalState";
function BottomBar() {
  const MyContext = useContext(globalState);
  const { currentText, timerStatus } = MyContext;
  console.log(currentText);

  const numWords = currentText
    .trim()
    .split(" ")
    .filter((word) => word.trim() !== "").length;

  const timeTakenToRead = (avgtime) => {
    let hours = 0,
      mins = 0;
    mins = Math.round((avgtime * numWords) % 60);
    if (Math.round(avgtime * numWords) / 60 > 0) {
      hours = Math.round((avgtime * numWords) / 60);
      return `${hours}h ${mins}m`;
    }
    return `${mins}m`;
  };
  return (
    <div className="bottom-bar">
      <div className="general-text-info">
        <div>
          {numWords === 0 ? 0 : numWords} <span>words</span>
        </div>
        <div>
          {currentText.length} <span>characters</span>
        </div>
        <div>
          <span>{timeTakenToRead(0.0044)} read</span>
        </div>
      </div>

      <div className="task-info">{timerStatus}</div>
    </div>
  );
}

export default BottomBar;
