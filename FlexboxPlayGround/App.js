import React from "react";
import "./styles.css";
import Top from "./Top";
import Bottom from "./Bottom";
import LeftRail from './LeftRail'; 
import RightRail from './RightRail'
export default function App() {
  return (
    <div className="container">
      <div className="left-section">left section</div>
      <div className="middle-section">middle section</div>
      <div className="middle-section-two">second middle section</div>
      <div className="right-section">right section</div>
      <Top />
      <Bottom />
      <LeftRail />
      <RightRail />
    </div>
  );
}
