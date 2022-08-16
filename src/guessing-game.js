class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
        this.mid
    }

    guess() {
        return Math.round((this.max-this.min) / 2) + this.min;
    }

    lower() {
        return this.max = (Math.round((this.max-this.min) / 2) + this.min);
    }

    greater() {
        return this.min = (Math.round((this.max-this.min) / 2) + this.min);
    }
}

module.exports = GuessingGame;
