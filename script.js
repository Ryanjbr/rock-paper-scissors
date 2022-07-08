function computerPlay() {
    const random = Math.floor(Math.random() * 100)
    if (random < 33) {
        return 'Rock';
    }
    else if (random >=33 && random <= 66) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}