import React from "react";
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";
import "@leenguyen/react-flip-clock-countdown/dist/index.css";
import VideoBg from "../src/assets/video2.mp4";

import "./styles.css";

const App = () => {
  return (
    <section className="page">
      <div className="overlay"></div>
      <video src={VideoBg} autoPlay loop muted></video>
      <div className="page__content">
        <h1>Countdown</h1>
        <h3>Until our happily ever after begins</h3>
        <FlipClockCountdown
          to={new Date("2023-7-1").getTime()}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          labelStyle={{
            fontSize: 10,
            fontWeight: 500,
            textTransform: "uppercase",
          }}
          className="flip-clock"
          dividerStyle={{ color: "white", height: 1 }}
          separatorStyle={{ color: "red", size: "6px" }}
          duration={0.5}
        />
      </div>
    </section>
  );
};

export default App;
