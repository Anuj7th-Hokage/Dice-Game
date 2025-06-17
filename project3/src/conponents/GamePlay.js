import React, { useState } from 'react';
import Score from './Score';
import Selector from './Selector';
import RollDice from './RollDice';
import styled from 'styled-components';

const GamePlay = () => {
  const [selectedNumber, setSelectedNumber] = useState(undefined);
  const [currentDice, setCurrentDice] = useState(1);
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [isRolling, setIsRolling] = useState(false);
  const [error, setError] = useState('');

  const rollDice = () => {
    if (isRolling) return;
    if (selectedNumber === undefined) {
      setError('Please select a number first!');
      return;
    }

    setIsRolling(true);
    setError('');

    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 6) + 1;
      setCurrentDice(randomNumber);

      if (randomNumber === selectedNumber) {
        setScore((prev) => prev + randomNumber);
      } else {
        setScore((prev) => Math.max(0, prev - 2));
      }

      setSelectedNumber(undefined);
      setIsRolling(false);
    }, 1000); // Animation duration
  };

  const resetGame = () => {
    setScore(0);
    setSelectedNumber(undefined);
    setCurrentDice(1);
    setError('');
  };

  return (
    <MainContainer>
      <TopSection>
        <Score score={score} />
        <Selector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </TopSection>

      <RollDice currentDice={currentDice} onRoll={rollDice} isRolling={isRolling} />

      <ControlButtons>
        <OutlineButton onClick={resetGame}>Reset Score</OutlineButton>
        <Button onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? 'Hide' : 'Show'} Rules
        </Button>
      </ControlButtons>

      {showRules && <Rules />}
    </MainContainer>
  );
};

const Rules = () => (
  <RulesContainer>
    <h2>🎲 How to Play Dice Game</h2>
    <ul>
      <li>Select any number (1–6).</li>
      <li>Click on the dice image to roll.</li>
      <li>If your selected number matches the dice → 🎉 you get points equal to the dice number.</li>
      <li>If your guess is wrong → ❌ 2 points will be deducted.</li>
    </ul>
  </RulesContainer>
);

export default GamePlay;

const MainContainer = styled.main`
  padding: 40px;
  max-width: 1280px;
  margin: 0 auto;
`;

const TopSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

const ControlButtons = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const Button = styled.button`
  min-width: 220px;
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  color: white;
  border: 1px solid transparent;
  font-size: 16px;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
  }
`;

const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: #fbf1f1;
  border-radius: 10px;
  h2 {
    font-size: 24px;
  }
  ul {
    margin-top: 24px;
    list-style: disc inside;
    line-height: 1.8;
  }
`;