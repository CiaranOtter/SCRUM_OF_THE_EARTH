const metronome = require("../app/classes/metronome.js")
const TestMetronome = new metronome();

// Testing the metronome system for the app
  describe("Use case tests for the metronome", () => {
    test("When the user enter a time signature as a number the metronome's time signature value for the interval will change", () => {

      const input = [
        { id: 0, beatsPerMeasure: 1 },
        { id: 1, beatsPerMeasure: 2 },
        { id: 2, beatsPerMeasure: 3 },
        { id: 3, beatsPerMeasure: 4 },
      ];
  
      expect(TestMetronome.setBeatPerMeasure(input)).toEqual(input);
  
    });

    test("When the user presses the pause play button the state of play will be updated", () => {
      TestMetronome.setPlaying(false)
      expect(TestMetronome.isPlaying()).toEqual(false)

      TestMetronome.setPlaying(true)
      expect(TestMetronome.isPlaying()).toEqual(true)
    });

    test("When the user enters a number representing a BPM he metronome's BPM interval will change", () => {
        const input = [
            { id: 0, BPM: 20 },
            { id: 1, BPM: 60 },
            { id: 2, BPM: 100 },
            { id: 3, BPM: 120 },
          ];

        expect(TestMetronome.setBPM(input)).toEqual(input)
    });
  });

  describe("function tests for the metroneome class", () => {
    test("Testing the metronome's ability to retrieve the beats per measure", () => {
      const input = [
        { id: 0, beatsPerMeasure: 1 },
        { id: 1, beatsPerMeasure: 2 },
        { id: 2, beatsPerMeasure: 3 },
        { id: 3, beatsPerMeasure: 4 },
      ];
      
      input.forEach((e) => {
        TestMetronome.setBeatPerMeasure(e.beatsPerMeasure);
        expect(TestMetronome.getBeatsPerMeasure()).toEqual(e.beatsPerMeasure)
      })
    });

    test("Testing the metronome's ability to retrieve the BPM", () => {
      let input = [
        { id: 0, BPM: 20 },
        { id: 1, BPM: 60 },
        { id: 2, BPM: 100 },
        { id: 3, BPM: 120 },
      ];

      input.forEach((e) => {
          TestMetronome.setBPM(e.BPM)
          expect(TestMetronome.getBPM()).toEqual(e.BPM);
      })
    })

    test("Testing the metronome's ability to calculate, set and retrieve the Tempo text", () => {
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
            expect(TestMetronome.getTempoText()).toEqual(e.tempoText)
        });
        
    });


    test("Testing the metronome's ability to set the state of playing", () => {
        expect(TestMetronome.setPlaying(true)).toEqual(true);
        expect(TestMetronome.setPlaying(false)).toEqual(false);
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

    test("Testing the metronome's ability to retrieve the Count", () => {
      let input = [
        {id: 0, count: 0},
        {id: 1, count: 1},
        {id: 2, count: 2},
        {id: 3, count: 3}
      ]

      input.forEach((e) => {
        TestMetronome.setCount(e.count)
        expect(TestMetronome.getCount()).toEqual(e.count)
      })
    })

    test("Testing the metronome's ability to update the count", () => {
      TestMetronome.setCount(0)
      const count = TestMetronome.getCount()
      const beats = TestMetronome.getBeatsPerMeasure()

      expect(TestMetronome.updateCount()).toEqual((count + 1) % beats)
    
    });
  }) 