import Tuner from "./Tuner";

export default class Automatic_Tuner extends Tuner{
    constructor() {
        super();
        this.targetNote;
    }

    setTargetNote( targetNote ){
        this.targetNote = targetNote;
    }

    getNoteName( note ){ 
        return super.getNoteName(this.targetNote);
    }

    getCents(frequency, note) {
        console.log("using automatic get cents method")
        super.getCents(frequency, this.targetNote);
    }   
}