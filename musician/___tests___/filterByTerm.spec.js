const metronome = require('../app/classes/metronome')

  describe("Metronome tests", () => {

    let TestMetronome = new metronome();

    test("Testing the metronome's abilty to update beats per measure", () => {

      const input = [
        { id: 0, beatsPerMeasure: 1 },
        { id: 1, beatsPerMeasure: 2 },
        { id: 2, beatsPerMeasure: 3 },
        { id: 3, beatsPerMeasure: 4 },
      ];
  
      expect(TestMetronome.setBeatPerMeasure(input)).toEqual(input);
  
    });

    test("Testing the metronome's ability to update the BPM", () => {
        const input = [
            { id: 0, BPM: 20 },
            { id: 1, BPM: 60 },
            { id: 2, BPM: 100 },
            { id: 3, BPM: 120 },
          ];

        expect(TestMetronome.setBPM(input)).toEqual(input)
    });

    test("Testing the metronome's ability to calculate the Tempo text", () => {
        const values = [ 
            {tempoText: "Larghissimo (very, very slow)", input:10},
            {tempoText: "Grave (slow and solemn)", input:30},
            {tempoText: "Lento (slowly)", input:50},
            {tempoText: "Largo (slowly)", input:63},
            {tempoText: "Adagio (slow and stately)", input:70},
            {tempoText: "Andante (walking pace)", input:82},
            {tempoText: "Moderato (moderately)", input:100},
            {tempoText: "Allegro (fast)", input:130},
            {tempoText: "Vivace (very fast)", input:150},
            {tempoText: "Presto (really fast)", input:190}, 
            {tempoText: "Prestissimo (that's reeeally fast dude!)", input:210}
        ];

        values.forEach((e) => {
            expect(TestMetronome.calcTempoText(e.input)).toEqual(e.tempoText);
        });
        
    });

    test("Testing the metronome's ability to set the state of playing", () => {
        let playing = TestMetronome.getPlaying();

        expect(TestMetronome.setPlaying()).toEqual(!playing);
    });

    test("Testing the metronome's ability to set the count", () => {
        input = [
            {id: 0, count: 0},
            {id: 1, count: 1},
            {id: 2, count: 2},
            {id: 3, count: 3}
        ]

        expect(TestMetronome.setCount(input)).toEqual(input);
    });
  });