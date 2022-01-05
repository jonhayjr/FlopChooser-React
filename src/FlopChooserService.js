import { FLOP_DATA } from "./FLOP_DATA";

export const FlopChooserService = {
    getRandomMovies () {
    const randomNumber1 = Math.floor(Math.random() * FLOP_DATA.length);
    const randomMovie1 = FLOP_DATA[randomNumber1];
    
    let randomNumber2 = Math.floor(Math.random() * FLOP_DATA.length);
    
    while (randomNumber2 === randomNumber1) {
        randomNumber2 = Math.floor(Math.random() * FLOP_DATA.length);
    }
    
    const randomMovie2 = FLOP_DATA[randomNumber2];
    
    return [randomMovie1, randomMovie2];
    },
    
    getLowestIMDB(movie1, movie2) {
        return movie1.rating < movie2.rating ? movie1 : movie2;
    },
        
    checkIfCorrect(selected, correct) {
        return selected === correct;
    }
}