import React from 'react';
import styled from 'styled-components';

const GameStart = ({ toggle }) => {
  return (
    <Container>
      <div>
        <Image src="/img/dices 1.png" alt="Dice Game" />
      </div>
      <Content>
        <Title>Dice Game</Title>
        <PlayButton onClick={toggle}>🎲 Play Now</PlayButton>
      </Content>
    </Container>
  );
};

export default GameStart;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  gap: 20px;
`;

const Image = styled.img`
  width: 650px;
  height: auto;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
`;

const Title = styled.h1`
  font-size: 96px;
  white-space: nowrap;
  font-weight: 800;
`;

const PlayButton = styled.button`
  background-color: #000;
  color: white;
  font-size: 16px;
  padding: 10px 18px;
  min-width: 220px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: #000;
    border: 1px solid black;
    transform: scale(1.05);
  }
`;