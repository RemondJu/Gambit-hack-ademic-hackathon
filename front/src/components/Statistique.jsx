import React, { Component } from "react";
import "../css/statistique.css";
import NavBarNavigate from "./NavBarNavigate";
import Progress from "./Progress";

class Statistique extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widthStatsEcology: "100",
      widthStatsCulture: "50",
      widthStatsHealth: "30",
      widthStatsSport: "20",
      widthStatsEducation: "70",
      widthStatsGastronomy: "35",
      widthStatsNumberEcology: "100",
      widthStatsNumberCulture: "50",
      widthStatsNumberHealth: "30",
      widthStatsNumberSport: "20",
      widthStatsNumberEducation: "70",
      widthStatsNumberGastronomy: "35"
    };
  }

  render() {
    return (
      <div>
        <Progress />
        <NavBarNavigate />
        <div className="containerStats">
          <h2 style={{ marginLeft: "50px" }}>
            Statistics {this.state.currentCount}
          </h2>
          <div className="rowEcology">
            <img
              src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-ecology.png"
              alt=""
            />
            <div
              className="Ecology"
              style={{
                height: "15px",
                backgroundColor: "blue",
                borderRadius: "10px",
                width: this.state.widthStatsEcology + "px"
              }}
            />
            <p style={{ marginLeft: "50px", fontWeight: "bold" }}>
              {this.state.widthStatsNumberEcology}%
            </p>
          </div>

          <div className="rowCulture">
            <img
              src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-ticket.png"
              alt=""
            />
            <div
              style={{
                height: "15px",
                width: this.state.widthStatsCulture + "px",
                backgroundColor: "blue",
                borderRadius: "10px"
              }}
            />
            <p style={{ marginLeft: "50px", fontWeight: "bold" }}>
              {this.state.widthStatsNumberCulture}%
            </p>
          </div>

          <div className="rowHealth">
            <img
              src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-heart.png"
              alt=""
            />
            <div
              style={{
                height: "15px",
                width: this.state.widthStatsHealth + "px",
                backgroundColor: "blue",
                borderRadius: "10px"
              }}
            />
            <div className="progressStats" />
            <p style={{ marginLeft: "50px", fontWeight: "bold" }}>
              {this.state.widthStatsNumberHealth}%
            </p>
          </div>

          <div className="rowSport">
            <img
              src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-basketball.png"
              alt=""
            />
            <div
              style={{
                height: "15px",
                width: this.state.widthStatsSport + "px",
                backgroundColor: "blue",
                borderRadius: "10px"
              }}
            />
            <p style={{ marginLeft: "50px", fontWeight: "bold" }}>
              {this.state.widthStatsNumberSport}%
            </p>
          </div>

          <div className="rowEducation">
            <img
              src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-mortarboard.png"
              alt=""
            />
            <div
              style={{
                height: "15px",
                width: this.state.widthStatsEducation + "px",
                backgroundColor: "blue",
                borderRadius: "10px"
              }}
            />
            <p style={{ marginLeft: "50px", fontWeight: "bold" }}>
              {this.state.widthStatsNumberEducation}%
            </p>
          </div>

          <div className="rowGastronomy">
            <img
              src="http://image.noelshack.com/fichiers/2018/47/6/1543050898-curry.png"
              alt=""
            />
            <div
              style={{
                height: "15px",
                width: this.state.widthStatsGastronomy + "px",
                backgroundColor: "blue",
                borderRadius: "10px"
              }}
            />
            <p style={{ marginLeft: "50px", fontWeight: "bold" }}>
              {this.state.widthStatsNumberGastronomy}%
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Statistique;
