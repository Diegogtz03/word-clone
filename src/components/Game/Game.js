import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput'
import GuessResults from '../GuessResults'
import GameBanner from '../GameBanner'
import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const initialGuesses = [];
  range(0, NUM_OF_GUESSES_ALLOWED).map((i) =>
    initialGuesses.push({
      guess: (new Array(5).fill({ letter: '', status: false })),
      id: crypto.randomUUID()
    }
  ));

  const [guess, setGuess] = React.useState('');
  const [guessHistory, setGuessHistory] = React.useState(initialGuesses);
  const [currGuess, setCurrGuess] = React.useState(0);
  const [disabledInput, setDisabledInput] = React.useState(false);
  const [showBanner, setShowBanner] = React.useState({
    show: false,
    winner: false,
  });

  function handleGuessSubmit() {
    if (currGuess !== NUM_OF_GUESSES_ALLOWED) {
      const historyCpy = [...guessHistory];
      historyCpy[currGuess] = {
        guess: checkGuess(guess, answer),
        id: crypto.randomUUID()
      }
      setGuessHistory(historyCpy);
      setCurrGuess(currGuess + 1);
      setGuess('');

      if (guess === answer) {
        setShowBanner({
          show: true,
          winner: true,
        });
        setDisabledInput(true);
      } else {
        if (currGuess === NUM_OF_GUESSES_ALLOWED - 1) {
          setShowBanner({
            show: true,
            winner: false,
          });
          setDisabledInput(true);
        }
      }
    }
  };
  
  return (
    <>
      <GuessResults guessHistory={guessHistory} />
      <GuessInput disabledInput={disabledInput} guess={guess} setGuess={setGuess} handleGuessSubmit={handleGuessSubmit} />
      {showBanner.show &&
        <GameBanner winner={showBanner.winner} tries={currGuess} answer={answer} />
      }
    </>
  );
}

export default Game;
