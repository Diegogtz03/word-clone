import React from "react";

function Guess({ guess }) {
  return (
    <p className="guess">
      {guess.map((letter, index) =>
        <span 
          key={index} 
          className={`cell ${letter.letter === '' ? '' : letter.status}`}
        >
          {letter.letter}
        </span>
      )}
    </p>
  );
}

export default Guess;
