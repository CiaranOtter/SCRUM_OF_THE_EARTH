
module.exports = class metronome {
    constructor() {
        this.playing = false;
        this.count = 0;
        this.bpm = 100;
        this.beatsPerMeasure = 4,
        this.tempoText = "Moderato (moderately)"
    }

    setBeatPerMeasure(b) {
        this.beatsPerMeasure = b;
        console.log(b)
        return this.beatsPerMeasure;
    }

    setBPM(bpm) {
        this.bpm = bpm;
        console.log(this.bpm)
        return this.bpm;
    }

    calcTempoText(bpm) {
        if (bpm < 20) {

            // 0
            this.tempoText = "Larghissimo (very, very slow)";

          } else if (bpm >= 20 && bpm < 40) {

            //1
            this.tempoText = "Grave (slow and solemn)";

          } else if (bpm >= 40 && bpm < 60) {

            //2
            this.tempoText = "Lento (slowly)";

          } else if (bpm >= 60 && bpm < 66) {

            //3
            this.tempoText = "Largo (slowly)";

          } else if (bpm >= 66 && bpm < 76) {

            //4
            this.tempoText = "Adagio (slow and stately)";

          } else if (bpm >= 76 && bpm < 90) {

            //5
            this.tempoText = "Andante (walking pace)";

          } else if (bpm >= 90 && bpm < 110) {

            //6
            this.tempoText = "Moderato (moderately)";
            
          } else if (bpm >= 110 && bpm < 140) {

            //7
            this.tempoText = "Allegro (fast)";

          } else if (bpm >= 140 && bpm < 160) {

            //8
            this.tempoText = "Vivace (very fast)";

          } else if (bpm >= 180 && bpm < 200) {

            //9
            this.tempoText = "Presto (really fast)";

          } else if (bpm > 200) {

            //10
            this.tempoText = "Prestissimo (that's reeeally fast dude!)";

          }

          return this.tempoText;
    } 

    setPlaying(b) {
      this.playing = b;
      console.log(this.playing)
      return this.playing;
    } 

    setCount(count) {
        this.count = count;
        return this.count;
    }

    updateCount(){
      this.count = (this.count + 1) % this.beatsPerMeasure
      return this.count
    }

    isPlaying() {
        return this.playing;
    }

    getBPM() {
      return this.bpm;
    }

    getCount() {
      return this.count
    }

    getBeatsPerMeasure(){
      return this.beatsPerMeasure
    }

    getTempoText() {
      return this.tempoText;
    }
    
}