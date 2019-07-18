import React, { Component } from 'react';
import prettyMillis from 'pretty-ms';
import slides from '../lessons/1.js';
import MarkdownRenderer from 'react-markdown-renderer';

class Timer extends Component {
    state = {
        time: 0,
        timerIsOn: false,
        timerStartTime: 0,
        timerMinutes: 5,

        currentSlideIndex: 0,
        slides,
    };

    previousSlide = () => {
        const { currentSlideIndex } = this.state;
        if (currentSlideIndex <= 0) return;

        this.setState(prevState => ({ currentSlideIndex: prevState.currentSlideIndex - 1 }));
    }

    nextSlide = () => {
        const { currentSlideIndex } = this.state;
        if (currentSlideIndex >= slides.length - 1) return;

        this.setState(prevState => ({ currentSlideIndex: prevState.currentSlideIndex + 1 }));
    }

    startTimer = () => {
        this.setState({
            timerIsOn: true,
            time: this.state.time,
            timerStartTime: Date.now() - this.state.time
        });
        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.timerStartTime
        }), 1);
    }
    stopTimer = () => {
        this.setState({timerIsOn: false});
        clearInterval(this.timer);
    }
    resetTimer = () => {
        this.setState({time: 0, timerIsOn: false});
    }
    changeTimerMinutes = (event) => this.setState({ timerMinutes: event.target.value });

    renderTime = () => {
        const { time } = this.state;
        const countdownTime = 60000 * this.state.timerMinutes;
        if (time > countdownTime) return 'MVP Finish icon';

        return prettyMillis(countdownTime - time, { secondsDecimalDigits: 0 });
    }

    render() {
        const { currentSlideIndex, slides, time, timerIsOn, timerMinutes } = this.state;
        const slide = slides[currentSlideIndex];

        let timerStartTime = time === 0 && <button onClick={this.startTimer}>⏯</button>;
        let stop = (time === 0 || !timerIsOn) ?
            null :
            <button onClick={this.stopTimer}>⏹</button>
        let resume = (time === 0 || timerIsOn) ?
            null :
            <button onClick={this.startTimer}>⏯</button>
        let reset = (time === 0 || timerIsOn) ?
            null :
            <button onClick={this.resetTimer}>🔄</button>

        return (
            <div className="timer-container">
                <div className="slide-content">
                    <h1 className="slide-title">Task {slides.indexOf(slide)}: {slide.title}</h1>
                    <ul className="slide-criteria">
                        {slide.criteria.map((el, index) => <li key={index}><MarkdownRenderer markdown={el} /></li>)}
                    </ul>
                </div>
                <div className="timer-time rainbow-text">{this.renderTime()}</div>
                <div className="timer-buttons">
                    {timerStartTime}
                    {resume}
                    {stop}
                    {reset}
                    <button onClick={this.previousSlide}>P</button>
                    <button onClick={this.nextSlide}>N</button>
                    <input className="timer-change-minutes" type="number" value={timerMinutes} onChange={this.changeTimerMinutes} />
                </div>
                <div>
                </div>
            </div>
        );
    }
}

export default Timer;
