import React from "react";

import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

import "./styles.css";

// import video
import videoBg from "../src/assets/video2.mp4";

const App = () => {
  return (
    <section className="page">
      {/* overlay */}
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div className="page__content">
        <h1>Countdown</h1>
        <h3>Until our happily ever after begins</h3>
        <FlipClockCountdown
          className="flip-clock"
          to={new Date("2023-7-1").getTime()}
        />
      </div>
    </section>
  );
};

export default App;
