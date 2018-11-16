import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.css";

let CONF = {
  tip: [
    {
      text: "未提交X人",
      fillStyle: "#ccc"
    },
    {
      text: "已提交X人",
      fillStyle: "#9c3"
    },
    {
      text: "已批改X人",
      fillStyle: "#080"
    }
  ],
};

class YanProgress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      donePercent:
        props.done === 0
          ? 0
          : (props.done >= props.total ? 1 : props.done / props.total) * 100,
      modifyPercent:
        props.modify === 0
          ? 0
          : (props.modify >= props.done ? 1 : props.modify / props.done) * 100,
      tip: props.tip instanceof Array ? props.tip : CONF.tip,
    };
  }
  componentWillReceiveProps({ done, modify }) {
    if (this.props.done !== done) {
      this.setState({
        donePercent:
          done === 0
            ? 0
            : (done >= this.props.total ? 1 : done / this.props.total) * 100
      });
    }
    if (this.props.modify !== modify) {
      this.setState({
        donePercent:
          modify === 0
            ? 0
            : (modify >= this.props.done ? 1 : modify / this.props.done) * 100
      });
    }
  }
  render() {
    return (
      <div
        className="y-progress"
        style={{
          backgroundColor: this.props.tip[0].fillStyle || "#ccc"
        }}
      >
        <a
          className="y-progress_text"
          style={{ width: `${100 - this.state.donePercent}%` }}
        >
          <span className="y-tooltip">
            {this.props.tip[0].text.replace(
              "X",
              this.props.total < this.props.done
                ? 0
                : this.props.total - this.props.done
            )}
          </span>
        </a>
        <div
          className="y-progress_bar"
          style={{
            width: `${this.state.donePercent}%`,
            backgroundColor: this.props.tip[1].fillStyle || "#9c3"
          }}
        >
          <a
            className="y-progress_text"
            style={{ width: `${100 - this.state.modifyPercent}%` }}
          >
            <span className="y-tooltip">
              {this.props.tip[1].text.replace(
                "X",
                this.props.done > this.props.total
                  ? this.props.total
                  : this.props.done
              )}
            </span>
          </a>
          <div
            className="y-progress_bar"
            style={{
              width: `${this.state.modifyPercent}%`,
              backgroundColor: this.props.tip[2].fillStyle || "#080"
            }}
          >
            <a className="y-progress_text" style={{ width: "100%" }}>
              <span className="y-tooltip">
                {this.props.tip[2].text.replace(
                  "X",
                  this.props.modify > this.props.done
                    ? this.props.done
                    : this.props.modify
                )}
              </span>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

YanProgress.propTypes = {
  total: PropTypes.number.isRequired,
  done: PropTypes.number.isRequired,
  modify: PropTypes.number.isRequired,
  tip: PropTypes.array,
};

export default YanProgress;
