import Recording from "react-native-recording";
import PitchFinder from "pitchfinder";

export default class Tuner {
  middleA = 440;
  semitone = 69;
  noteStrings = [
    "C",
    "C♯",
    "D",
    "D♯",
    "E",
    "F",
    "F♯",
    "G",
    "G♯",
    "A",
    "A♯",
    "B",
  ];

  constructor(sampleRate = 22050, bufferSize = 2048) {
    this.sampleRate = sampleRate;
    this.bufferSize = bufferSize;
    this.pitchFinder = new PitchFinder.YIN({ sampleRate: this.sampleRate });
  }


  // Request recording for from the device and start the react recording system to take in sound 
  // adds an event listener to run the sound detection from pitch Finder
  start() {
    Recording.init({
      sampleRate: this.sampleRate,
      bufferSize: this.bufferSize,
    });
    Recording.start();
    Recording.addRecordingEventListener((data) => {
      const frequency = this.pitchFinder(data);
      if (frequency && this.onNoteDetected) {
        const note = this.getNote(frequency);
        console.log("note is "+note)
        this.onNoteDetected({
          name: this.getNoteName(note),
          value: note,
          cents: this.getCents(frequency, note),
          octave: parseInt(note / 12) - 1,
          frequency: frequency,
        });
      }
    });
  }

  /**
   * 
   * @param {*} note a the name value that we wnt to find the name of
   * @returns  the name of the Note atactched the note value
   */

  getNoteName( note ){
    return this.noteStrings[note % 12]
  }

  /**
   * get musical note from frequency
   *
   * @param {number} frequency
   * @returns {number}
   */
  getNote(frequency) {
    const note = 12 * (Math.log(frequency / this.middleA) / Math.log(2));
    return Math.round(note) + this.semitone;
  }

  /**
   * get the musical note's standard frequency
   *
   * @param note
   * @returns {number}
   */
  getStandardFrequency(note) {
    return this.middleA * Math.pow(2, (note - this.semitone) / 12);
  }

  /**
   * get cents difference between given frequency and musical note's standard frequency
   *
   * @param {float} frequency
   * @param {int} note
   * @returns {int}
   */
  getCents(frequency, note) {
      console.log("example of note is: "+note);
    return Math.floor(
      (1200 * Math.log(frequency / this.getStandardFrequency(note))) /
        Math.log(2)
    );
  }
}

