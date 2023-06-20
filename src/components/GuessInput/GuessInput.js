import React from "react";

function GuessInput({ disabledInput, guess, setGuess, handleGuessSubmit }) {
  return (
    <form className="guess-input-wrapper" onSubmit={(e) => {
      e.preventDefault();
      handleGuessSubmit();
    }}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        disabled={disabledInput}
        value={guess}
        pattern="[A-Z]{5}"
        title="Please enter a 5-letter word in all caps."
        onChange={(e) => setGuess(e.target.value.toUpperCase())} 
      />
    </form>
  );
}

export default GuessInput;
