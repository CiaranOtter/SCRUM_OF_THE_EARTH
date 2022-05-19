export default class setNoteTuner extends Tuner {
    constructor(Note) {
        super();
        this.Note = Note;
    }
    
    setNote(Note){
        this.Note = Note;
    }

    getNote() {
        return this.Note;
    }

    getCents(frequency) {
        return 
    }
}