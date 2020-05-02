import React, { Component } from 'react';

import Timer from './Timer';
import TimerControllers from './TimerControllers';
import Sound from './Sound';

import '../App.css';

export default class App extends Component {

    constructor() {
        super()
        this.state = {
            timerId: 0,
            timerRunning: false,
            currentTime: "25 : 00",
            cycle: "Session",
            workTime: 25,
            breakTime: 5,
            sound: "on"
        }
    }

    setSound = (sound) => {
        this.setState({
            sound: sound
        })
    }

    incrementWorkTime = () => {
        this.setState({
            workTime: this.state.workTime + 1
        })
    }

    decrementWorkTime = () => {
        this.setState({
            workTime: this.state.workTime - 1
        })
    }

    incrementBreakTime = () => {
        this.setState({
            breakTime: this.state.breakTime + 1
        })
    }

    decrementBreakTime = () => {
        this.setState({
            breakTime: this.state.breakTime - 1
        })
    }

    setCurrentTime = (currentTime) => {
        this.setState({
            // currentTime: this.state.currentTime
            currentTime: currentTime
        })
    }

    setTimerRunning = () => {
        this.setState({
            timerRunning: this.state.timerRunning
        })
    }

    startTimer = (duration) => {
        this.setState({timerRunning: true })
        let time = duration * 60
        let minutes;
        let seconds;
        let runningTimer = setInterval(() => {
            this.setState({
                timerId: runningTimer
            })
            time = time - 1;
            // console.log(time);

            minutes = Math.floor(time / 60)
            seconds = time - minutes * 60
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            this.setState({currentTime: minutes + ":" + seconds})

            if (time === 0) {
                if (this.state.cycle === "Session") {
                    this.setState({
                        cycle: "Break",
                        timerRunning: false
                    })
                    clearInterval(this.state.timerId)
                } else {
                    this.setState({
                        cycle:"Session",
                        timerRunning: false
                    })
                    clearInterval(this.state.timerId)
                    this.startTimer(this.state.workTime)
                }
            }
        }, 1000);



    }


    render() {
      return (
         <div className="main">
             <h1>PomoTask</h1>
             <Timer
                cycle={this.state.cycle}
                currentTime={this.state.currentTime}
                workTime={this.state.workTime}
                breakTime={this.state.breakTime}
                timerRunning={this.state.timerRunning}
                startTimer={this.startTimer}
                setTimerRunning={this.setTimerRunning}
                setCurrentTime={this.setCurrentTime}
             />
             <TimerControllers
                workTime={this.state.workTime}
                breakTime={this.state.breakTime}
                timerRunning={this.state.timerRunning}
                incrementWorkTime={this.incrementWorkTime}
                decrementWorkTime={this.decrementWorkTime}
                incrementBreakTime={this.incrementBreakTime}
                decrementBreakTime={this.decrementBreakTime}
             />
             <Sound setSound={this.setSound} sound={this.state.sound} />
         </div>
      );
}

}

