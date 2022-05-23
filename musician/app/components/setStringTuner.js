export default class setNoteTuner extends Tuner {
    constructor(freq) {
        super();
        this.Note = super.getNote(freq);
        this.targetFreq = freq;
    }
    
    setNote(Note){
        this.Note = Note;
    }

    getNote() {
        return this.Note;
    }

    setTargetFrequency(freq) {
        this.targetFreq = freq;
    }

    getTargetFrequency() {
        return this.targetFreq
    }
}