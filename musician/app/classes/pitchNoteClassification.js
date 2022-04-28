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

        this.pitch = pitch;

        // #region Notes with Octave = 0
        // note = C0
        if (pitch >= 15.89 && pitch <= 16.83) {
            this.note = "C0";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(15.89);
            this.noteClass.setPitchTune(16.35);
            this.noteClass.setPitchSharp(16.83);
        }
        // note = C0#
        else if (pitch >= 16.84 && pitch <= 17.83) {
            this.note = "C0#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(16.84);
            this.noteClass.setPitchTune(17.32);
            this.noteClass.setPitchSharp(17.83);
        }
        // note = D0
        else if (pitch >= 17.84 && pitch <= 18.89) {
            this.note = "D0";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(17.84);
            this.noteClass.setPitchTune(18.35);
            this.noteClass.setPitchSharp(18.89);
        }
        // note = D0#
        else if (pitch >= 18.90 && pitch <= 20.02) {
            this.note = "D0#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(18.90);
            this.noteClass.setPitchTune(19.45);
            this.noteClass.setPitchSharp(20.02);
        }
        // note = E0
        else if (pitch >= 20.03 && pitch <= 21.20) {
            this.note = "E0";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(20.03);
            this.noteClass.setPitchTune(20.60);
            this.noteClass.setPitchSharp(21.20);
        }
        // note = F0
        else if (pitch >= 21.21 && pitch <= 22.46) {
            this.note = "F0";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(21.21);
            this.noteClass.setPitchTune(21.83);
            this.noteClass.setPitchSharp(22.46);
        }
        // note = F0#
        else if (pitch >= 22.47 && pitch <= 23.80) {
            this.note = "F0#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(22.47);
            this.noteClass.setPitchTune(23.12);
            this.noteClass.setPitchSharp(23.80);
        }
        // note = G0
        else if (pitch >= 23.81 && pitch <= 25.21) {
            this.note = "G0";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(23.81);
            this.noteClass.setPitchTune(24.50);
            this.noteClass.setPitchSharp(25.21);
        }
        // note = G0#
        else if (pitch >= 25.22 && pitch <= 26.71) {
            this.note = "G0#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(25.22);
            this.noteClass.setPitchTune(25.96);
            this.noteClass.setPitchSharp(26.71);
        }
        // note = A0
        else if (pitch >= 26.72 && pitch <= 28.31) {
            this.note = "A0";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(26.72);
            this.noteClass.setPitchTune(27.50);
            this.noteClass.setPitchSharp(28.31);
        }
        // note = A0#
        else if (pitch >= 28.32 && pitch <= 29.99) {
            this.note = "A0#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(28.32);
            this.noteClass.setPitchTune(29.14);
            this.noteClass.setPitchSharp(29.99);
        }
        // note = B0
        else if (pitch >= 30 && pitch <= 31.78) {
            this.note = "B0";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(30);
            this.noteClass.setPitchTune(30.87);
            this.noteClass.setPitchSharp(31.78);
        }

        // note = C6
        else if (pitch >= 1016.57 && pitch <= 1077.01) {
            this.note = "C6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(1016.57);
            this.noteClass.setPitchTune(1046.50);
            this.noteClass.setPitchSharp(1077.01);
        }
        // note = C6#
        else if (pitch >= 1077.02 && pitch <= 1141.05) {
            this.note = "C6#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(1077.02);
            this.noteClass.setPitchTune(1108.73);
            this.noteClass.setPitchSharp(1141.05);
        }
        // note = D6
        else if (pitch >= 1141.06 && pitch <= 1208.90) {
            this.note = "D6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(1141.06);
            this.noteClass.setPitchTune(1174.66);
            this.noteClass.setPitchSharp(1208.90);
        }
        // note = D6#
        else if (pitch >= 1208.91 && pitch <= 1280.79) {
            this.note = "D6#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(1208.91);
            this.noteClass.setPitchTune(1244.51);
            this.noteClass.setPitchSharp(1280.79);
        }
        // note = E6
        else if (pitch >= 1280.80 && pitch <= 1356.95) {
            this.note = "E6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(1280.80);
            this.noteClass.setPitchTune(1318.51);
            this.noteClass.setPitchSharp(1356.95);
        }
        // note = F6
        else if (pitch >= 1356.96 && pitch <= 1437.63) {
            this.note = "F6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(1356.96);
            this.noteClass.setPitchTune(1396.91);
            this.noteClass.setPitchSharp(1437.63);
        }
        // note = F6#
        else if (pitch >= 1437.64 && pitch <= 1523.12) {
            this.note = "F6#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(1437.64);
            this.noteClass.setPitchTune(1479.98);
            this.noteClass.setPitchSharp(1523.12);
        }
        // note = G6
        else if (pitch >= 1523.13 && pitch <= 1613.69) {
            this.note = "G6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(1523.13);
            this.noteClass.setPitchTune(1567.98);
            this.noteClass.setPitchSharp(1613.69);
        }
        // note = G6#
        else if (pitch >= 1613.70 && pitch <= 1709.64) {
            this.note = "G6#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(1613.70);
            this.noteClass.setPitchTune(1661.22);
            this.noteClass.setPitchSharp(1709.64);
        }
        // note = A6
        else if (pitch >= 1709.65 && pitch <= 1811.30) {
            this.note = "A6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(1709.65);
            this.noteClass.setPitchTune(1760.00);
            this.noteClass.setPitchSharp(1811.30);
        }
        // note = A6#
        else if (pitch >= 1811.31 && pitch <= 1919.01) {
            this.note = "A6#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(1811.31);
            this.noteClass.setPitchTune(1864.66);
            this.noteClass.setPitchSharp(1919.01);
        }
        // note = B6
        else if (pitch >= 1919.02 && pitch <= 2033.11) {
            this.note = "B6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(1919.02);
            this.noteClass.setPitchTune(1975.53);
            this.noteClass.setPitchSharp(2033.11);
        }


        // note = C7
        else if (pitch >= 2033.12 && pitch <= 2154.01) {
            this.note = "C6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(2033.12);
            this.noteClass.setPitchTune(2093.00);
            this.noteClass.setPitchSharp(2154.01);
        }
        // note = C7#
        else if (pitch >= 2154.02 && pitch <= 2282.10) {
            this.note = "C6#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(2154.02);
            this.noteClass.setPitchTune(2217.46);
            this.noteClass.setPitchSharp(2282.10);
        }
        // note = D7
        else if (pitch >= 2282.11 && pitch <= 2417.81) {
            this.note = "D6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(2282.11);
            this.noteClass.setPitchTune(2349.32);
            this.noteClass.setPitchSharp(2417.81);
        }
        // note = D7#
        else if (pitch >= 2417.82 && pitch <= 2561.58) {
            this.note = "D6#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(2417.82);
            this.noteClass.setPitchTune(2489.02);
            this.noteClass.setPitchSharp(2561.58);
        }
        // note = E7
        else if (pitch >= 2561.59 && pitch <= 2713.89) {
            this.note = "E6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(2561.59);
            this.noteClass.setPitchTune(2637.02);
            this.noteClass.setPitchSharp(2713.89);
        }
        // note = F7
        else if (pitch >= 2713.90 && pitch <= 2875.27) {
            this.note = "F6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(2713.90);
            this.noteClass.setPitchTune(2793.83);
            this.noteClass.setPitchSharp(2875.27);
        }
        // note = F7#
        else if (pitch >= 2875.28 && pitch <= 3046.24) {
            this.note = "F6#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(2875.28);
            this.noteClass.setPitchTune(2959.96);
            this.noteClass.setPitchSharp(3046.24);
        }
        // note = G7
        else if (pitch >= 3046.25 && pitch <= 3227.38) {
            this.note = "G6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(3046.25);
            this.noteClass.setPitchTune(3135.96);
            this.noteClass.setPitchSharp(3227.38);
        }
        // note = G7#
        else if (pitch >= 3227.39 && pitch <= 3419.29) {
            this.note = "G6#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(3227.39);
            this.noteClass.setPitchTune(3322.44);
            this.noteClass.setPitchSharp(3419.29);
        }
        // note = A7
        else if (pitch >= 3419.30 && pitch <= 3622.60) {
            this.note = "A6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(3419.30);
            this.noteClass.setPitchTune(3520.00);
            this.noteClass.setPitchSharp(3622.60);
        }
        // note = A7#
        else if (pitch >= 3622.61 && pitch <= 3838.03) {
            this.note = "A6#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(3622.61);
            this.noteClass.setPitchTune(3729.31);
            this.noteClass.setPitchSharp(3838.03);
        }
        // note = B7
        else if (pitch >= 3838.04 && pitch <= 4066.24) {
            this.note = "B6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(3838.04);
            this.noteClass.setPitchTune(3951.07);
            this.noteClass.setPitchSharp(4066.24);
        }

        // note = C8
        else if (pitch >= 4066.25 && pitch <= 4308.04) {
            this.note = "C6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(4066.25);
            this.noteClass.setPitchTune(4186.01);
            this.noteClass.setPitchSharp(4308.04);
        }
        // note = C8#
        else if (pitch >= 4308.05 && pitch <= 4564.20) {
            this.note = "C6#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(4308.05);
            this.noteClass.setPitchTune(4434.92);
            this.noteClass.setPitchSharp(4564.20);
        }
        // note = D8
        else if (pitch >= 4564.21 && pitch <= 4835.60) {
            this.note = "D6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(4564.21);
            this.noteClass.setPitchTune(4698.63);
            this.noteClass.setPitchSharp(4835.60);
        }
        // note = D8#
        else if (pitch >= 4835.61 && pitch <= 5123.15) {
            this.note = "D6#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(4835.61);
            this.noteClass.setPitchTune(4978.03);
            this.noteClass.setPitchSharp(5123.15);
        }
        // note = E8
        else if (pitch >= 5123.16 && pitch <= 5427.79) {
            this.note = "E6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(5123.16);
            this.noteClass.setPitchTune(5274.04);
            this.noteClass.setPitchSharp(5427.79);
        }
        // note = F8
        else if (pitch >= 5427.80 && pitch <= 5750.54) {
            this.note = "F6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(5427.80);
            this.noteClass.setPitchTune(5587.65);
            this.noteClass.setPitchSharp(5750.54);
        }
        // note = F8#
        else if (pitch >= 5750.55 && pitch <= 6092.50) {
            this.note = "F6#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(5750.55);
            this.noteClass.setPitchTune(5919.91);
            this.noteClass.setPitchSharp(6092.50);
        }
        // note = G8
        else if (pitch >= 6092.51 && pitch <= 6454.79) {
            this.note = "G6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(6092.51);
            this.noteClass.setPitchTune(6271.93);
            this.noteClass.setPitchSharp(6454.79);
        }
        // note = G8#
        else if (pitch >= 6454.80 && pitch <= 6838.61) {
            this.note = "G6#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(6454.80);
            this.noteClass.setPitchTune(6644.88);
            this.noteClass.setPitchSharp(6838.61);
        }
        // note = A8
        else if (pitch >= 6838.62 && pitch <= 7245.25) {
            this.note = "A6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(6838.62);
            this.noteClass.setPitchTune(7040.00);
            this.noteClass.setPitchSharp(7245.25);
        }
        // note = A8#
        else if (pitch >= 7245.26 && pitch <= 7676.05) {
            this.note = "A6#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(7245.26);
            this.noteClass.setPitchTune(7902.13);
            this.noteClass.setPitchSharp(7676.05);
        }
        // note = B8
        else if (pitch >= 7676.06 && pitch <= 8132.52) {
            this.note = "B6";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(7676.06);
            this.noteClass.setPitchTune(7902.13);
            this.noteClass.setPitchSharp(8132.52);
        }
        

    }

    // this function will classify the pitch of the note
    // whether it is in tune, flat or sharp
    classifyPitch(pitch) {

        this.pitch = pitch;

        if (pitch >= this.noteClass.getFlatPitch() && pitch < this.noteClass.getTunePitch()) {
            this.classification = "The Note is Flat";
        }
        else if (pitch > this.noteClass.getTunePitch() && pitch <= this.noteClass.getSharpPitch()) {
            this.classification = "The Note is Sharp";
        }
        else {
            this.classification = "The Note is In-Tune";
        }

    }

    //function that gets the note value given the pitch (as a parameter)
    getNote(p) {
        this.classifyNote(p);

        return this.note;
    }

    //function to get the classification of the pitch given the pitch (as a parameter)
    getClassification(p) {
        this.classifyPitch(p);

        return this.classification;
    }
}