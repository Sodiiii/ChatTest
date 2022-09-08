import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import img from "../../assets/INITIALIZE_1_HQ.json";
import "./loading.css";

const Loading = () => {
  setTimeout(() => {
    document.location.href = "http://localhost:3000/start";
  }, 3000);

  return (
    <div className="container">
      <Player
        src={img}
        style={{ width: "300px" }}
        autoplay={true}
        loop
        speed={0.5}
      />
    </div>
  );
};

export default Loading;
