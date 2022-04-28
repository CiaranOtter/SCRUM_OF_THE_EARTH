module.exports = class noteClass {
    constructor() {
        this.noteName
        this.pitchFlat
        this.pitchSharp
        this.pitchTune
    }

    // sets the name of the note
    setNoteName(n){
        this.noteName = n;
        return this.noteName;
    }

    // set the lowest value in the range of the note frequency
    // this lowest value will be the starting point of the note being flat
    setPitchFlat(n){
        this.pitchFlat = n;
        return this.pitchFlat;
    }

    // set the in-tune value of the note frequency
    // this is the value that the note is considered to be in tune
    setPitchTune(n){
        this.pitchTune = n;
        return this.pitchTune;
    }

    // set the highest value in the range of the note frequency
    // this lowest value will be the ending point of the note being sharp
    setPitchSharp(n){
        this.pitchSharp = n;
        return this.pitchSharp;
    }

    // the next set of functions returns the constructor values of this class
    
    // get the note name
    getNoteName(){
        return this.noteName;
    }

    // get flat pitch
    getFlatPitch(){
        return this.pitchFlat;
    }

    // get tune pitch
    getTunePitch(){
        return this.pitchTune;
    }

    // get sharp pitch
    getSharpPitch(){
        return this.pitchSharp;
    }
}