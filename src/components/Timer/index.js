import { Component } from "react";

const maxDesktopSize = 1250;
const maxMobileSize = 550;

const fontSize = {
  desktop: {
    div: window.innerWidth > maxDesktopSize ? 12 : window.innerWidth / 95,
  },
  mobile: {
    div: window.innerWidth > maxMobileSize ? 12 : window.innerWidth / 30,
  },
};
export default class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: {
        h: 0,
        m: 0,
        s: 0,
      },
      seconds : props.seconds,
      flag: true,
    };
    this.timer = 0;
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    let obj = {
      h: hours,
      m: minutes,
      s: seconds,
    };
    return obj;
  }

  componentDidMount() {
    this.startTimer();
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
    if (this.timer === 0 && this.state.seconds > 0) {
      this.timer = setInterval(this.countDown, 1000);
    }
  }

  countDown = async () => {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds,
    });
    if (seconds === 0) {
      this.props.refresh(true);
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <>
        <div className="timer text-greenBA text-sm inline">
          {this.state.time ? this.state.time.m : ''}:{this.state.time ? this.state.time.s : ''} 
        </div>
      </>
    );
  }
}
