import React from "react";
import { useSpring } from "framer-motion";
import "./App.css";
import Spinner from "./components/Spinner";
import ScrollText from "./components/ScrollText";

function App() {
  //   const spring = {
  //     stiffness: 150,
  //     damping: 15,
  //     mass: 0.1,
  //   };

  //   const mousePosition = {
  //     x: useSpring(0, spring),
  //     y: useSpring(0, spring),
  //   };

  //   const mouseMove = (event) => {
  //     const { clientX, clientY } = event;
  //     mousePosition.x.set(clientX - 85);
  //     mousePosition.y.set(clientY - 100);
  //   };
  return (
    <div className="app h-screen">
      <div className="h-screen"></div>
      {/* <Spinner position={mousePosition} isMovable={true} /> */}
      {/* <Spinner /> */}
      <ScrollText />
      <div className="h-screen"></div>
    </div>
  );
}

export default App;
