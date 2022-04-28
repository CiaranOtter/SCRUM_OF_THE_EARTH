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

         // #region Notes with Octave = 1
        // note = C1
        if (pitch >= 31.78 && pitch <= 33.65){
            this.note = "C1";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(31.78);
            this.noteClass.setPitchTune(32.7);
            this.noteClass.setPitchSharp(33.65);
        }
        // note = C1#
        else if (pitch >= 33.66 && pitch <= 35.65){
            this.note = "C1#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(33.66);
            this.noteClass.setPitchTune(34.65);
            this.noteClass.setPitchSharp(35.65);
        }
        // note = D1
        else if (pitch >= 35.66 && pitch <= 37.77){
            this.note = "D1";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(35.66);
            this.noteClass.setPitchTune(36.71);
            this.noteClass.setPitchSharp(37.77);
        }
        // note = D1#
        else if (pitch >= 37.78 && pitch <= 40.02){
            this.note = "D1#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(37.78);
            this.noteClass.setPitchTune(38.89);
            this.noteClass.setPitchSharp(40.02);
        }
        // note = E1
        else if (pitch >= 40.03 && pitch <= 42.40){
            this.note = "E1";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(10.03);
            this.noteClass.setPitchTune(41.20);
            this.noteClass.setPitchSharp(42.40);
        }
        // note = F1
        else if (pitch >= 42.41 && pitch <= 44.92){
            this.note = "F1";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(42.41);
            this.noteClass.setPitchTune(43.65);
            this.noteClass.setPitchSharp(44.92);
        }
        // note = F1#
        else if (pitch >= 44.93 && pitch <= 47.59){
            this.note = "F1#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(44.93);
            this.noteClass.setPitchTune(46.25);
            this.noteClass.setPitchSharp(47.59);
        }
        // note = G1
        else if (pitch >= 47.6 && pitch <= 50.42){
            this.note = "G0";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(47.6);
            this.noteClass.setPitchTune(49.0);
            this.noteClass.setPitchSharp(50.42);
        }
        // note = G1#
        else if (pitch >= 50.43 && pitch <= 53.42){
            this.note = "G1#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(50.43);
            this.noteClass.setPitchTune(51.91);
            this.noteClass.setPitchSharp(53.42);
        }
        // note = A1
        else if (pitch >= 53.43 && pitch <= 56.6){
            this.note = "A1";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(53.43);
            this.noteClass.setPitchTune(55.0);
            this.noteClass.setPitchSharp(56.6);
        }
        // note = A1#
        else if (pitch >= 56.61 && pitch <= 59.97){
            this.note = "A1#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(56.61);
            this.noteClass.setPitchTune(58.27);
            this.noteClass.setPitchSharp(59.97);
        }
        // note = B1
        else if (pitch >= 59.98 && pitch <= 63.54){
            this.note = "B1";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(59.98);
            this.noteClass.setPitchTune(61.74);
            this.noteClass.setPitchSharp(63.54);
        }
        // #endregion

         // #region Notes with Octave = 2
        // note = C2
        if (pitch >= 63.55 && pitch <= 67.32){
            this.note = "C2";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(63.55);
            this.noteClass.setPitchTune(65.41);
            this.noteClass.setPitchSharp(67.32);
        }
        // note = C2#
        else if (pitch >= 67.33 && pitch <= 71.32){
            this.note = "C2#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(67.33);
            this.noteClass.setPitchTune(69.3);
            this.noteClass.setPitchSharp(71.32);
        }
        // note = D2
        else if (pitch >= 71.33 && pitch <= 75.56){
            this.note = "D2";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(71.33);
            this.noteClass.setPitchTune(73.42);
            this.noteClass.setPitchSharp(75.56);
        }
        // note = D2#
        else if (pitch >= 75.57 && pitch <= 80.05){
            this.note = "D2#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(75.57);
            this.noteClass.setPitchTune(77.78);
            this.noteClass.setPitchSharp(80.05);
        }
        // note = E2
        else if (pitch >= 80.06 && pitch <= 84.81){
            this.note = "E2";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(80.06);
            this.noteClass.setPitchTune(82.41);
            this.noteClass.setPitchSharp(84.81);
        }
        // note = F2
        else if (pitch >= 84.82 && pitch <= 89.85){
            this.note = "F2";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(84.82);
            this.noteClass.setPitchTune(87.31);
            this.noteClass.setPitchSharp(89.85);
        }
        // note = F2#
        else if (pitch >= 89.86 && pitch <= 95.19){
            this.note = "F2#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(89.86);
            this.noteClass.setPitchTune(92.5);
            this.noteClass.setPitchSharp(95.19);
        }
        // note = G2
        else if (pitch >= 95.2 && pitch <= 100.85){
            this.note = "G2";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(95.2);
            this.noteClass.setPitchTune(98.0);
            this.noteClass.setPitchSharp(100.85);
        }
        // note = G2#
        else if (pitch >= 100.86 && pitch <= 106.85){
            this.note = "G2#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(100.86);
            this.noteClass.setPitchTune(103.83);
            this.noteClass.setPitchSharp(106.85);
        }
        // note = A2
        else if (pitch >= 106.86 && pitch <= 113.20){
            this.note = "A2";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(106.86);
            this.noteClass.setPitchTune(110);
            this.noteClass.setPitchSharp(113.2);
        }
        // note = A2#
        else if (pitch >= 113.21 && pitch <= 119.93){
            this.note = "A2#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(113.21);
            this.noteClass.setPitchTune(116.54);
            this.noteClass.setPitchSharp(119.93);
        }
        // note = B2
        else if (pitch >= 119.94 && pitch <= 127.06){
            this.note = "B2";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(119.94);
            this.noteClass.setPitchTune(123.47);
            this.noteClass.setPitchSharp(127.06);
        }
        // #endregion

         // #region Notes with Octave = 3
        // note = C3
        if (pitch >= 127.07 && pitch <= 134.62){
            this.note = "C3";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(127.07);
            this.noteClass.setPitchTune(130.81);
            this.noteClass.setPitchSharp(134.62);
        }
        // note = C3#
        else if (pitch >= 134.63 && pitch <= 142.63){
            this.note = "C3#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(134.63);
            this.noteClass.setPitchTune(138.59);
            this.noteClass.setPitchSharp(142.63);
        }
        // note = D3
        else if (pitch >= 142.64 && pitch <= 151.11){
            this.note = "D3";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(142.64);
            this.noteClass.setPitchTune(146.83);
            this.noteClass.setPitchSharp(151.11);
        }
        // note = D3#
        else if (pitch >= 151.12 && pitch <= 160.09){
            this.note = "D3#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(151.12);
            this.noteClass.setPitchTune(155.56);
            this.noteClass.setPitchSharp(160.0);
        }
        // note = E3
        else if (pitch >= 160.11 && pitch <= 169.62){
            this.note = "E3";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(160.11);
            this.noteClass.setPitchTune(164.81);
            this.noteClass.setPitchSharp(169.62);
        }
        // note = F3
        else if (pitch >= 169.63 && pitch <= 179.71){
            this.note = "F3";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(169.63);
            this.noteClass.setPitchTune(174.61);
            this.noteClass.setPitchSharp(179.71);
        }
        // note = F3#
        else if (pitch >= 179.72 && pitch <= 190.4){
            this.note = "F3#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(179.72);
            this.noteClass.setPitchTune(185.0);
            this.noteClass.setPitchSharp(190.4);
        }
        // note = G3
        else if (pitch >= 190.41 && pitch <= 201.72){
            this.note = "G3";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(190.41);
            this.noteClass.setPitchTune(196.0);
            this.noteClass.setPitchSharp(201.72);
        }
        // note = G3#
        else if (pitch >= 201.73 && pitch <= 213.71){
            this.note = "G3#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(201.73);
            this.noteClass.setPitchTune(207.65);
            this.noteClass.setPitchSharp(213.71);
        }
        // note = A3
        else if (pitch >= 213.73 && pitch <= 226.42){
            this.note = "A3";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(213.73);
            this.noteClass.setPitchTune(220.0);
            this.noteClass.setPitchSharp(226.42);
        }
        // note = A3#
        else if (pitch >= 226.43 && pitch <= 239.88){
            this.note = "A3#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(226.43);
            this.noteClass.setPitchTune(233.08);
            this.noteClass.setPitchSharp(239.88);
        }
        // note = B3
        else if (pitch >= 239.89 && pitch <= 254.15){
            this.note = "B3";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(239.89);
            this.noteClass.setPitchTune(246.94);
            this.noteClass.setPitchSharp(254.15);
        }
        // #endregion

         // #region Notes with Octave = 4
        // note = C4
        if (pitch >= 254.16 && pitch <= 269.26){
            this.note = "C4";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(254.16);
            this.noteClass.setPitchTune(261.62);
            this.noteClass.setPitchSharp(169.26);
        }
        // note = C4#
        else if (pitch >= 269.27 && pitch <= 285.27){
            this.note = "C4#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(269.27);
            this.noteClass.setPitchTune(277.18);
            this.noteClass.setPitchSharp(285.27);
        }
        // note = D4
        else if (pitch >= 285.28 && pitch <= 302.22){
            this.note = "D4";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(285.28);
            this.noteClass.setPitchTune(293.66);
            this.noteClass.setPitchSharp(302.22);
        }
        // note = D4#
        else if (pitch >= 302.23 && pitch <= 320.19){
            this.note = "D4#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(302.23);
            this.noteClass.setPitchTune(311.13);
            this.noteClass.setPitchSharp(320.19);
        }
        // note = E4
        else if (pitch >= 320.20 && pitch <= 339.23){
            this.note = "E4";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(320.20);
            this.noteClass.setPitchTune(329.63);
            this.noteClass.setPitchSharp(339.23);
        }
        // note = F4
        else if (pitch >= 339.24 && pitch <= 359.40){
            this.note = "F4";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(339.24);
            this.noteClass.setPitchTune(349.23);
            this.noteClass.setPitchSharp(359.40);
        }
        // note = F4#
        else if (pitch >= 359.41 && pitch <= 380.77){
            this.note = "F4#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(359.41);
            this.noteClass.setPitchTune(369.99);
            this.noteClass.setPitchSharp(380.77);
        }
        // note = G4
        else if (pitch >= 380.78 && pitch <= 403.42){
            this.note = "G4";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(380.78);
            this.noteClass.setPitchTune(392.0);
            this.noteClass.setPitchSharp(403.42);
        }
        // note = G4#
        else if (pitch >= 403.43 && pitch <= 427.41){
            this.note = "G4#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(403.43);
            this.noteClass.setPitchTune(415.30);
            this.noteClass.setPitchSharp(427.41);
        }
        // note = A4
        else if (pitch >= 427.42 && pitch <= 452.83){
            this.note = "A4";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(427.42);
            this.noteClass.setPitchTune(440.0);
            this.noteClass.setPitchSharp(452.83);
        }
        // note = A4#
        else if (pitch >= 452.54 && pitch <= 479.76){
            this.note = "A4#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(452.54);
            this.noteClass.setPitchTune(466.16);
            this.noteClass.setPitchSharp(479.76);
        }
        // note = B4
        else if (pitch >= 479.77 && pitch <= 508.28){
            this.note = "B4";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(479.77);
            this.noteClass.setPitchTune(493.88);
            this.noteClass.setPitchSharp(508.28);
        }
        // #endregion

        // #region Notes with Octave = 5
        // note = C5
        if (pitch >= 508.29 && pitch <= 538.50){
            this.note = "C5";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(508.29);
            this.noteClass.setPitchTune(523.25);
            this.noteClass.setPitchSharp(538.50);
        }
        // note = C5#
        else if (pitch >= 538.51 && pitch <= 570.52){
            this.note = "C5#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(538.51);
            this.noteClass.setPitchTune(554.37);
            this.noteClass.setPitchSharp(570.52);
        }
        // note = D5
        else if (pitch >= 570.53 && pitch <= 604.45){
            this.note = "D5";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(570.53);
            this.noteClass.setPitchTune(587.33);
            this.noteClass.setPitchSharp(604.45);
        }
        // note = D5#
        else if (pitch >= 604.46 && pitch <= 640.39){
            this.note = "D5#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(604.46);
            this.noteClass.setPitchTune(622.25);
            this.noteClass.setPitchSharp(640.39);
        }
        // note = E5
        else if (pitch >= 640.40 && pitch <= 678.47){
            this.note = "E5";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(640.40);
            this.noteClass.setPitchTune(659.26);
            this.noteClass.setPitchSharp(678.47);
        }
        // note = F5
        else if (pitch >= 678.48 && pitch <= 718.82){
            this.note = "F5";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(678.48);
            this.noteClass.setPitchTune(698.46);
            this.noteClass.setPitchSharp(718.82);
        }
        // note = F5#
        else if (pitch >= 718.83 && pitch <= 761.56){
            this.note = "F4#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(718.83);
            this.noteClass.setPitchTune(739.99);
            this.noteClass.setPitchSharp(761.56);
        }
        // note = G5
        else if (pitch >= 761.57 && pitch <= 806.84){
            this.note = "G5";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(761.57);
            this.noteClass.setPitchTune(783.99);
            this.noteClass.setPitchSharp(806.84);
        }
        // note = G5#
        else if (pitch >= 806.85 && pitch <= 854.82){
            this.note = "G4#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(806.85);
            this.noteClass.setPitchTune(830.61);
            this.noteClass.setPitchSharp(854.82);
        }
        // note = A5
        else if (pitch >= 854.83 && pitch <= 905.65){
            this.note = "A5";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(854.83);
            this.noteClass.setPitchTune(880.0);
            this.noteClass.setPitchSharp(905.65);
        }
        // note = A5#
        else if (pitch >= 905.66 && pitch <= 959.50){
            this.note = "A5#";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(905.66);
            this.noteClass.setPitchTune(932.33);
            this.noteClass.setPitchSharp(959.50);
        }
        // note = B5
        else if (pitch >= 959.51 && pitch <= 1016.56){
            this.note = "B5";
            this.noteClass.setNoteName(this.note);
            this.noteClass.setPitchFlat(959.51);
            this.noteClass.setPitchTune(987.77);
            this.noteClass.setPitchSharp(1016.56);
        }
        // #endregion

        // #region Notes with Octave = 6
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
        // #endregion

        // #region Notes with Octave = 7
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
        // #endregion

        // #region Notes with Octave = 8
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
        // #endregion
    }

    // this function will classify the pitch of the note
    // whether it is in tune, flat or sharp
    classifyPitch(pitch) {

        this.pitch = pitch;

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

    //function that gets the note value given the pitch (as a parameter)
    getNote(p){
        this.classifyNote(p);

        return this.note;
    }

    //function to get the classification of the pitch given the pitch (as a parameter)
    getClassification(p){
        this.classifyPitch(p);

        return this.classification;
    }
}