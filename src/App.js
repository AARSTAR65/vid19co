import React, { Component } from "react";
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

class App extends Component {
  state = { cases_time_series: [], loaded: false };
  componentDidMount = () => {
    fetch("https://api.covid19india.org/data.json").then((response) => {
      response.json().then((data) => {
        this.setState({
          cases_time_series: data.cases_time_series,
          loaded: true,
        });
      });
    });
  };
  componentDidUpdate = () => {
    if (this.state.loaded) {
      this.setState({
        loaded: false,
        cases_time_series: this.state.cases_time_series.map((obj) => ({
          ...obj,
          totalconfirmed: parseInt(obj.totalconfirmed),
          totaldeceased: parseInt(obj.totaldeceased),
          totalrecovered: parseInt(obj.totalrecovered),
          totalactive:
            parseInt(obj.totalconfirmed) -
            parseInt(obj.totaldeceased) -
            parseInt(obj.totalrecovered),
          dailyconfirmed: parseInt(obj.dailyconfirmed),
          dailydeceased: parseInt(obj.dailydeceased),
          dailyrecovered: parseInt(obj.dailyrecovered),
          dailyactive:
            parseInt(obj.dailyconfirmed) -
            parseInt(obj.dailydeceased) -
            parseInt(obj.dailyrecovered),
        })),
      });
    }
  };
  render() {
    return (
      <>
        <div style={{ fontFamily: "Segoe UI" }}>
          <div
            style={{
              borderRadius: 5,
              backgroundColor: "#f5f5f5",
              padding: 20,
              display: "inline-block",
              margin: 10,
            }}
          >
            <div
              style={{
                fontSize: 15,
                padding: 20,
                fontWeight: "500",
                backgroundColor: "#FF073A",
                display: "flex",
                justifyContent: "space-between",
                margin: 20,
                borderRadius: 5,
                color: "#ffffff",
              }}
            >
              <div>Confirmed</div>
              <div>
                {this.state.cases_time_series[
                  this.state.cases_time_series.length - 1
                ] &&
                  this.state.cases_time_series[
                    this.state.cases_time_series.length - 1
                  ].totalconfirmed}
              </div>
            </div>
            <LineChart
              width={0.8 * window.innerWidth}
              height={0.4 * window.innerWidth}
              data={this.state.cases_time_series}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis />
              <YAxis />

              <Line
                type="monotone"
                dataKey="dailyconfirmed"
                stroke="#FF073A"
                dot={false}
                strokeWidth={3}
              />
            </LineChart>
          </div>
          <div
            style={{
              borderRadius: 5,
              backgroundColor: "#f5f5f5",
              padding: 20,
              display: "inline-block",
              margin: 10,
            }}
          >
            <div
              style={{
                fontSize: 15,
                padding: 20,
                fontWeight: "500",
                backgroundColor: "#007BFF",
                display: "flex",
                justifyContent: "space-between",
                margin: 20,
                borderRadius: 5,
                color: "#ffffff",
              }}
            >
              <div>Active</div>
              <div>
                {this.state.cases_time_series[
                  this.state.cases_time_series.length - 1
                ] &&
                  this.state.cases_time_series[
                    this.state.cases_time_series.length - 1
                  ].totalactive}
              </div>
            </div>
            <LineChart
              width={0.8 * window.innerWidth}
              height={0.4 * window.innerWidth}
              data={this.state.cases_time_series}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis />
              <YAxis />

              <Line
                type="monotone"
                dataKey="dailyactive"
                stroke="#007BFF"
                dot={false}
                strokeWidth={3}
              />
            </LineChart>
          </div>
          <div
            style={{
              borderRadius: 5,
              backgroundColor: "#f5f5f5",
              padding: 20,
              display: "inline-block",
              margin: 10,
            }}
          >
            <div
              style={{
                fontSize: 15,
                padding: 20,
                fontWeight: "500",
                backgroundColor: "#2A8745",
                display: "flex",
                justifyContent: "space-between",
                margin: 20,
                borderRadius: 5,
                color: "#ffffff",
              }}
            >
              <div>Deceased</div>
              <div>
                {this.state.cases_time_series[
                  this.state.cases_time_series.length - 1
                ] &&
                  this.state.cases_time_series[
                    this.state.cases_time_series.length - 1
                  ].totaldeceased}
              </div>
            </div>
            <LineChart
              width={0.8 * window.innerWidth}
              height={0.4 * window.innerWidth}
              data={this.state.cases_time_series}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis />
              <YAxis />

              <Line
                type="monotone"
                dataKey="dailydeceased"
                stroke="#2A8745"
                dot={false}
                strokeWidth={3}
              />
            </LineChart>
          </div>
          <div
            style={{
              borderRadius: 5,
              backgroundColor: "#f5f5f5",
              padding: 20,
              display: "inline-block",
              margin: 10,
            }}
          >
            <div
              style={{
                fontSize: 15,
                padding: 20,
                fontWeight: "500",
                backgroundColor: "#6C757D",
                display: "flex",
                justifyContent: "space-between",
                margin: 20,
                borderRadius: 5,
                color: "#ffffff",
              }}
            >
              <div>Recovered</div>
              <div>
                {this.state.cases_time_series[
                  this.state.cases_time_series.length - 1
                ] &&
                  this.state.cases_time_series[
                    this.state.cases_time_series.length - 1
                  ].totalrecovered}
              </div>
            </div>
            <LineChart
              width={0.8 * window.innerWidth}
              height={0.4 * window.innerWidth}
              data={this.state.cases_time_series}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <XAxis />
              <YAxis />

              <Line
                type="monotone"
                dataKey="dailyrecovered"
                stroke="#6C757D"
                dot={false}
                strokeWidth={3}
              />
            </LineChart>
          </div>
        </div>
      </>
    );
  }
}

export default App;
