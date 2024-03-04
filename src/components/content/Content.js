import React from "react";
import logo from "../../assest/moptro.png";
import "./styles.css";

function Content() {
  return (
    <div className="content">
      <img src={logo} />
      <p className="heading">Employee Productivity Dashboard</p>
      <div className="productivity">
        <div className="row">
          <div className="col">
            <p>Productivity on Mon</p>
            <p></p>
          </div>
          <p>4%</p>
        </div>
        <div className="row">
          <div className="col">
            <p>Productivity on Tue</p>
            <p></p>
          </div>
          <p>4%</p>
        </div>
        <div className="row">
          <div className="col">
            <p>Productivity on Wed</p>
            <p></p>
          </div>
          <p>4%</p>
        </div>
        <div className="row">
          <div className="col">
            <p>Productivity on Thr</p>
            <p></p>
          </div>
          <p>4%</p>
        </div>
        <div className="row">
          <div className="col">
            <p>Productivity on Fri</p>
            <p></p>
          </div>
          <p>4%</p>
        </div>
        <div className="row">
          <div className="col">
            <p>Productivity on Sat</p>
            <p></p>
          </div>
          <p>4%</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
