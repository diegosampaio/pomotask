import React, { Component } from "react";
import { BsAlarm, BsPlayFill } from "react-icons/bs";
import { FiCoffee } from "react-icons/fi";

export default class Timer extends Component {

    timer = () => {
        if (this.props.timerRunning === true) {
            clearInterval(this.props.timerId)
            this.props.setCurrentTime("25 : 00")
            this.props.setTimerRunning()
        } else {
            this.props.cycle === "Session" ?
                this.props.startTimer(this.props.workTime) :
                this.props.startTimer(this.props.breakTime)

        }


    }


    render() {
        let descSession;
        if (this.props.cycle === "Session") {
            descSession = <BsAlarm className="iconTimer" />;
        }
        if (this.props.cycle === "Break") {
            descSession = <FiCoffee className="iconTimer" />;
        }

        return (
            <div className="timer">
                <span className="count-down" onClick={this.timer}>
                    {this.props.currentTime}
                </span>

                <p onClick={this.timer}>{ descSession }</p>

            </div>
        )
    }
}