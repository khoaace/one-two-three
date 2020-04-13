import React, { useState, useEffect } from 'react';
import {
  ROCK,
  PAPER,
  SCISSORS
} from "./constants";

const useOneTwoThree = () => {
  const [playerChoice, setPlayerChoice] = useState('');
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (playerChoice) {
      const computerChoiceRandom = [ROCK, PAPER, SCISSORS][Math.floor(Math.random() * 3)];
      setResult(handlePlay(computerChoiceRandom));
      setComputerChoice(computerChoiceRandom);
    }
  }, [playerChoice]);

  useEffect(() => {
    if (result !== null) {
      if (result === 1) {
        setScore((prevScore) => {
          return Number(prevScore) + 1;
        });
      }
      if (result === -1) {
        setScore((prevScore) => {
          if (prevScore > 0) return Number(prevScore) - 1;
          return prevScore;
        });
      }
    } else {
      setScore(0);
    }
  }, [result]);

  const handlePlay = (_computerChoice) => {
    if (playerChoice === _computerChoice) return 0; //Draw

    if (playerChoice === ROCK && _computerChoice === PAPER) return -1; // Lose
    if (playerChoice === ROCK && _computerChoice === SCISSORS) return 1; // Win

    if (playerChoice === PAPER && _computerChoice === ROCK) return 1; // Win
    if (playerChoice === PAPER && _computerChoice === SCISSORS) return -1; // Lose

    if (playerChoice === SCISSORS && _computerChoice === ROCK) return -1; // Lose
    if (playerChoice === SCISSORS && _computerChoice === PAPER) return 1; // Win
  }

  async function handleChoice(choice) {
    await setPlayerChoice('');
    await setComputerChoice('');
    await setPlayerChoice(choice);
  }

  return {
    playerChoice,
    setPlayerChoice,
    result,
    setResult,
    score,
    choices: [ROCK, SCISSORS, PAPER],
    computerChoice,
    handleChoice
  }
}

export default useOneTwoThree;