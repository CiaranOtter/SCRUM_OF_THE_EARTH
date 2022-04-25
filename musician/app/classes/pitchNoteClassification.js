const noteClass = require("../classes/noteClass.js");

module.exports = class pitchNoteClassification {
    constructor() {
        this.noteClass = new noteClass();

        this.note = "A4",
        this.pitch = 440,
        this.classification = "The Note is In-Tune"
    }

    // name the note that is being played, by using the pitch/frequency given
    // then set then classify the frequency of the note to flat, tune, and range
    // by setting these values in a note class (noteClass)
    classifyNote(pitch) {

        // #region Notes with Octave = 0
        // note = C0
        if (pitch >= 15.89 && pitch <= 16.83){
            this.note = "C0";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(15.89);
            this.noteClass.setPitchTune(16.35);
            this.noteClass.setPitchSharp(16.83);
        }
        // note = C0#
        else if (pitch >= 16.84 && pitch <= 17.83){
            this.note = "C0#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(16.84);
            this.noteClass.setPitchTune(17.32);
            this.noteClass.setPitchSharp(17.83);
        }
        // note = D0
        else if (pitch >= 17.84 && pitch <= 18.89){
            this.note = "D0";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(17.84);
            this.noteClass.setPitchTune(18.35);
            this.noteClass.setPitchSharp(18.89);
        }
        // note = D0#
        else if (pitch >= 18.90 && pitch <= 20.02){
            this.note = "D0#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(18.90);
            this.noteClass.setPitchTune(19.45);
            this.noteClass.setPitchSharp(20.02);
        }
        // note = E0
        else if (pitch >= 20.03 && pitch <= 21.20){
            this.note = "E0";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(20.03);
            this.noteClass.setPitchTune(20.60);
            this.noteClass.setPitchSharp(21.20);
        }
        // note = F0
        else if (pitch >= 21.21 && pitch <= 22.46){
            this.note = "F0";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(21.21);
            this.noteClass.setPitchTune(21.83);
            this.noteClass.setPitchSharp(22.46);
        }
        // note = F0#
        else if (pitch >= 22.47 && pitch <= 23.80){
            this.note = "F0#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(22.47);
            this.noteClass.setPitchTune(23.12);
            this.noteClass.setPitchSharp(23.80);
        }
        // note = G0
        else if (pitch >= 23.81 && pitch <= 25.21){
            this.note = "G0";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(23.81);
            this.noteClass.setPitchTune(24.50);
            this.noteClass.setPitchSharp(25.21);
        }
        // note = G0#
        else if (pitch >= 25.22 && pitch <= 26.71){
            this.note = "G0#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(25.22);
            this.noteClass.setPitchTune(25.96);
            this.noteClass.setPitchSharp(26.71);
        }
        // note = A0
        else if (pitch >= 26.72 && pitch <= 28.31){
            this.note = "A0";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(26.72);
            this.noteClass.setPitchTune(27.50);
            this.noteClass.setPitchSharp(28.31);
        }
        // note = A0#
        else if (pitch >= 28.32 && pitch <= 29.99){
            this.note = "A0#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(28.32);
            this.noteClass.setPitchTune(29.14);
            this.noteClass.setPitchSharp(29.99);
        }
        // note = B0
        else if (pitch >= 30 && pitch <= 31.78){
            this.note = "B0";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(30);
            this.noteClass.setPitchTune(30.87);
            this.noteClass.setPitchSharp(31.78);
        }
        // #endregion

    }

    // this function will classify the pitch of the note
    // whether it is in tune, flat or sharp
    classifyPitch(pitch) {

        if (pitch >= this.noteClass.getFlatPitch() && pitch < this.noteClass.getTunePitch()){
            this.classification = "The Note is Flat";
        }
        else if (pitch > this.noteClass.getTunePitch() && pitch <= this.noteClass.getSharpPitch()){
            this.classification = "The Note is Sharp";
        }
        else{
            this.classification = "The Note is In-Tune";
        }
        
    }
}