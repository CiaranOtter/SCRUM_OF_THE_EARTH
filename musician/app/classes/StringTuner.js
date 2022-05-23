import { Component } from "react";

export default class StringTuner extends Tuner{
    constructor(activeNote, noStrings) {
        super();
        this.activeNote = activeNote;
        this.noStrings = noStrings;
    }

    setActiveNote(activeNote) {
        this.activeNote = activeNote;
    }

    getActiveNote() {
        return this.activeNote;
    }

    setNoStrings(noStrings) {
        this.noStrings = noStrings;
    }

    getNoStrings() {
        return this.noStrings;
    }
}