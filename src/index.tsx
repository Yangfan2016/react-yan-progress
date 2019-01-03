import * as React from "react";
import * as cssStyle from "./index.css";

interface ITip {
  text: string,
  fillStyle: string,
}

interface IPropTypes {
  total: number,
  done: number,
  modify: number,
  tip: Array<ITip>,
};

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

// 0-100(%)
function calcDonePercent({ total, done }: any): number {
  if (done <= 0 || total <= 0) {
    return 0;
  }
  if (done > total) {
    return 1e2;
  }
  return done / total * 1e2;
}
// 0-100(%)
function calcModifyPercent({ total, done, modify }: any): number {
  let donePercent = calcDonePercent({ total, done });
  if (donePercent === 0) {
    return 0;
  }
  if (modify > done) {
    return 1e2;
  }
  return modify / done * 1e2;
}

class YanProgress extends React.Component<IPropTypes> {
  state: any;
  constructor(props: IPropTypes) {
    super(props);
    this.state = {
      donePercent: calcDonePercent(props),
      modifyPercent: calcModifyPercent(props),
      tip: props.tip instanceof Array ? props.tip : CONF.tip,
    };
  }
  componentWillReceiveProps({ done, modify }: any) { // watch props
    if (this.props.done !== done) {
      this.setState({
        donePercent: calcDonePercent({ done, total: this.props.total }),
      });
    }
    if (this.props.modify !== modify) {
      this.setState({
        donePercent: calcModifyPercent({ modify, done: this.props.done }),
      });
    }
  }
  render() {
    return (
      <div
        className={cssStyle["y-progress"]}
        style={{
          backgroundColor: this.state.tip[0].fillStyle || "#ccc"
        }}>
        <a
          className={cssStyle["y-progress_text"]}
          style={{ width: `${100 - this.state.donePercent}%` }}>
          <span className={cssStyle["y-tooltip"]}>
            {this.state.tip[0].text.replace(
              "X",
              this.props.total < this.props.done
                ? 0
                : this.props.total - this.props.done
            )}
          </span>
        </a>
        <div
          className={cssStyle["y-progress_bar"]}
          style={{
            width: `${this.state.donePercent}%`,
            backgroundColor: this.state.tip[1].fillStyle || "#9c3"
          }}>
          <a className={cssStyle["y-progress_text"]}
            style={{ width: `${100 - this.state.modifyPercent}%` }}>
            <span className={cssStyle["y-tooltip"]}>
              {this.state.tip[1].text.replace(
                "X",
                this.props.done > this.props.total
                  ? this.props.total
                  : this.props.done
              )}
            </span>
          </a>
          <div className={cssStyle["y-progress_bar"]}
            style={{
              width: `${this.state.modifyPercent}%`,
              backgroundColor: this.state.tip[2].fillStyle || "#080"
            }}>
            <a className={cssStyle["y-progress_text"]} style={{ width: "100%" }}>
              <span className={cssStyle["y-tooltip"]}>
                {this.state.tip[2].text.replace(
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

export default YanProgress;
