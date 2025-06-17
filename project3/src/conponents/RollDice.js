import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const RollDice = ({ currentDice, onRoll, isRolling }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={onRoll}>
        <DiceImage
          isRolling={isRolling}
          src={`/img/dice/dice_${currentDice}.png`}
          alt={`Dice showing ${currentDice}`}
        />
      </div>
      <p>Click on Dice to roll</p>
    </DiceContainer>
  );
};

export default RollDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
    margin-top: 15px;
  }
`;

const DiceImage = styled.img`
  width: 200px;
  height: 200px;
  animation: ${({ isRolling }) =>
    isRolling
      ? css`
          ${spin} 1s ease-out
        `
      : 'none'};
`;