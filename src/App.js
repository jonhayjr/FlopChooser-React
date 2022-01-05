import {useState, useEffect} from 'react';

import './App.css';

import { FlopChooserService} from './FlopChooserService';

/* Import components */
import Layout from './components/Layout/Layout';
import MessageDisplay from './components/MessageDisplay/MessageDisplay';
import MovieContainer from './components/MovieContainer/MovieContainer';
import MovieTile from './components/MovieTile/MovieTile';

const App = () => {
  //Destructure functions from FlopChooserService object
  const {getLowestIMDB, getRandomMovies, checkIfCorrect} = FlopChooserService;

  //Define state
  const [isCorrect, setIsCorrect] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [randomMovies, setRandomMovies] = useState([]);

  //Get random movies on page load
  useEffect(() => {
    const movies = getRandomMovies();
    setRandomMovies(movies);
  }, [getRandomMovies]) 

  //Logic for Play Again button click
  const playAgain = () => {
    //Get new random movies   
    const newRandomMovies = getRandomMovies();

    //Add delay to updating state
    setTimeout(() => {
      //Reset isCorrect and isSelected variables   
      setIsCorrect(false);
      setIsSelected(false);

      //Update random movies
      setRandomMovies(newRandomMovies);
    }, 200)
  }

  //Logic to handle user movie selection
  const selectMovie = (selected) => {
    //Set isSelected variable to true 
    setIsSelected(true);

    //Get lowest IMDB rating  
    const lowestIMDB = getLowestIMDB(randomMovies[0], randomMovies[1]);

    //Check if answer is correct 
    const isSelectionCorrect = checkIfCorrect(selected, lowestIMDB);
    setIsCorrect(isSelectionCorrect);
  }

  return (
    <div className="App">
      <Layout>
        <MessageDisplay isSelected={isSelected} isCorrect={isCorrect} playAgain={playAgain}/>
        <MovieContainer>
          {
            randomMovies.map((movie, index) =>  (
              <MovieTile movie={movie} key={index} selectMovie={selectMovie}/>
            ))
          }
        </MovieContainer>
      </Layout>
    </div>
  );
}

export default App;
