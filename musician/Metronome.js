/** Contains the functionality of subdivisions
*/

import React from 'react';


class Notes{
    constructor(time=0, click =0) {
        this.time = time;
        this.click = click;
    }
}

function functionality(displays){
    return(
        <div className="setting-row">
            <div className="select-wrapper">
                <select
                    value = {displays.clicksPerBeat}
                    onChange = {displays.handleChange}
                    name = "click-select">

                    <option value = "1">1</option>
                    <option value = "2">2</option>
                    <option value = "3">3</option>
                    <option value = "4">4</option>
                    <option value = "5">5</option>
                    <option value = "6">6</option>
                </select>
            </div>
    </div>
    );
}

export default class Metronome extends React.Component{
    constructor(displays) {
        super(displays);

        this.state = {

            noteLength:0.05,

            nextBeat: 0,
            nextBeatTime: 0,

            nextClick: 0,
            nextClickTime: 0,

            beatsPerBar: 4,
            clicksPerBeat: 1,
        };

        this.handleClick = this.handleClick.bind(this);

        var AudioContext = window.AudioContext || window.webkitAudioContext || false;
        this.audioContext = new AudioContext({sampleRate: 44100});
    }

        scheduleNote(note) {
            var osc = this.audioContext.createOscillator();

            if(note.click!==0){
                osc.frequency.value=330.0;
            }

            osc.start(this.state.nextClickTime);
            osc.stop(this.state.nextClickTime+ this.state.noteLength*2);
        }

    handleTick() {
        if (!this.state.isPlaying) return;

        while (this.state.nextClickTime < this.audioContext.currentTime + this.state.scheduleAheadTime) {
            let nextBeat = this.state.nextBeat;
            let nextClick = this.state.nextClick;
            let secondsPerBeat = 60.0 / this.state.tempo;
            let nextBeatTime = this.state.nextBeatTime;

            let nextNote = new Notes(this.state.nextClickTime, nextBeat, nextClick);
            if (nextNote.click === 0) {
                nextBeatTime = nextNote.time + secondsPerBeat;
            }
            this.scheduleNote(nextNote);

            if (this.state.clicksPerBeat > 1) {
                nextClick++;
                if (nextClick >= this.state.clicksPerBeat) {
                    nextClick = 0;
                    nextBeat++;
                    if (nextBeat >= this.state.beatsPerBar) {
                        nextBeat = 0;
                    }
                }
            } else {
                nextBeat++;
                nextClick = 0;
                if (nextBeat >= this.state.beatsPerBar) {
                    nextBeat = 0;
                }
            }

            this.setState((state) => {
                const queue = state.noteQueue.concat(nextNote);
                return {
                    noteQueue: queue,
                    nextClickTime: state.nextClickTime + 1/this.state.clicksPerBeat * secondsPerBeat,
                    nextBeatTime: nextBeatTime,
                    nextBeat: nextBeat,
                    nextClick: nextClick
                };
            });
        }
    }

    handleChange(e){
        if (e.target.name === "click-select") {
            this.setState({ clicksPerBeat: e.target.value });
            return;
        }
    }

    render(){
        return(
            <>
                <functionality
                    beatsPerBar={this.state.beatsPerBar}
                    clicksPerBeat={this.state.clicksPerBeat}
                    handleChange={this.handleChange}
                />
            </>
        );
    }
}