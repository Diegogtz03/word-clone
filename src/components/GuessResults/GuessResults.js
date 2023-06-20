import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guessHistory }) {
  return (
    <div className="guess-results">
      {range(0, NUM_OF_GUESSES_ALLOWED).map((i) =>
        <Guess key={guessHistory[i].id} guess={guessHistory[i].guess} />
      )}
    </div>
  );
}

export default GuessResults;
