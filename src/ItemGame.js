import React from 'react';
import {
  ROCK,
  SCISSORS,
  PAPER
} from "./constants";

const ItemGame = (props) => {
  const { choice = ROCK } = props;

  if (choice === ROCK) {
    return (
      <div className="animated jackInTheBox">
        <img src="/images/rock.png" alt="rock" />
      </div>
    );
  }

  if (choice === SCISSORS) {
    return (
      <div className="animated jackInTheBox">
        <img src="/images/scissors.png" alt="scissors" />
      </div>
    );
  }

  if (choice === PAPER) {
    return (
      <div className="animated jackInTheBox">
        <img src="/images/paper.png" alt="paper" />
      </div>
    );
  }
  return <div />;
};

export default ItemGame;
