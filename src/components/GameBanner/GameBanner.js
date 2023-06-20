import React from "react";

function GameBanner({ winner = false, tries = 0, answer = ""}) {
  return (
    winner ?
      (<div className="happy banner">
        <p>
          <strong>Congratulations!</strong> Got it in
          <strong> {tries} {tries > 1 ? 'guesses' : 'guess'}</strong>.
        </p>
      </div>)
    : 
      (<div claclassName="sad banner">
        <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
      </div>)
  );
}

export default GameBanner;
