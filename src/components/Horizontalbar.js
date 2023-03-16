import React from 'react';

const ThreeColorProgressBar = ({ value }) => {
  const greenWidth = value * 0.232; // 20% of the progress bar width will be green
  const yellowWidth = value * 0.467; // 60% of the progress bar width will be yellow
  const redWidth = value * 0.301; // 20% of the progress bar width will be red

  return (
    <div className="progress-bar">
      <div className="progress-bar-green" style={{ width: `${greenWidth}%` }} />
      <div className="progress-bar-yellow" style={{ width: `${yellowWidth}%` }} />
      <div className="progress-bar-red" style={{ width: `${redWidth}%` }} />
    </div>
  );
};

export default ThreeColorProgressBar;