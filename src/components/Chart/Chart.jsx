import React from "react";
import "./Chart.css";
import img1 from "../asests/img/1.png";
import img2 from "../asests/img/2.png";
import img3 from "../asests/img/3.png";
import img4 from "../asests/img/4.png";

const Chart = () => {
  return (
    <div className="chart">
      <div className="container">
        <h2 className="chart-name">Dashboard</h2>
        <div className="chart-page">
          <div className="chart-list">
            <img src={img1} alt="" className="chart-img" />
            <h3 className="chart-number">$0</h3>
            <div className="chart-item">
              <p className="chart-subname">Today Sales</p>
              <p className="chart-span">+ 0%</p>
            </div>
          </div>
          <div className="chart-list">
            <img src={img2} alt="" className="chart-img" />
            <h3 className="chart-number">$25,555.00</h3>
            <div className="chart-item">
              <p className="chart-subname">Today Expenses</p>
              <p className="chart-span">-10%</p>
            </div>
          </div>
          <div className="chart-list">
            <img src={img3} alt="" className="chart-img" />
            <h3 className="chart-number">$25,555.00</h3>
            <div className="chart-item">
              <p className="chart-subname">Today Visitors</p>
              <p className="chart-span">+0%</p>
            </div>
          </div>
          <div className="chart-list">
            <img src={img4} alt="" className="chart-img" />
            <h3 className="chart-number">$25,555.00</h3>
            <div className="chart-item">
              <p className="chart-subname">Today Orders</p>
              <p className="chart-span">+0%</p>
            </div>
          </div>
        </div>

        <div className="chart-box">
          <div className="chart-title">
            <h3 className="chart-subnames">Sales Overview</h3>
            <p style={{ marginTop: "50px" }} className="chart-names">
              14000
            </p>
            <p className="chart-names">10500</p>
            <p className="chart-names">7000</p>
            <p className="chart-names">3500</p>
            <p className="chart-names">0</p>
            <h5 className="chart-price">price</h5>
          </div>
          <div className="chart--title">
            <h3 className="chart-subnames">Analytics</h3>
            <p style={{ marginTop: "50px" }} className="chart-names">
              14000
            </p>
            <p className="chart-names">10500</p>
            <p className="chart-names">7000</p>
            <p className="chart-names">3500</p>
            <p style={{marginLeft:"45px"}} className="chart-names">
              0 
              <span className="chart-date">2022-11-12</span>{" "}
              <span className="chart-date">2022-11-12</span>{" "}
              <span className="chart-date">2022-11-12</span>{" "}
              <span className="chart-date">2022-11-12</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chart;
