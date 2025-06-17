import React from 'react';
import styled from 'styled-components';

const Selector = ({ error, setError, selectedNumber, setSelectedNumber }) => {
  const numberArray = [1, 2, 3, 4, 5, 6];

  const handleNumberClick = (value) => {
    setSelectedNumber(value);
    setError(''); // Clear error when a number is selected
  };

  return (
    <SelectorContainer>
      <ErrorMessage>{error}</ErrorMessage>
      <div className="flex">
        {numberArray.map((value, i) => (
          <Box
            isSelected={value === selectedNumber}
            key={i}
            onClick={() => handleNumberClick(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </SelectorContainer>
  );
};

export default Selector;

const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  p {
    margin-top: 15px;
    font-size: 24px;
    font-weight: 700;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 16px;
  font-weight: 500;
  height: 24px; /* Reserve space to prevent layout shift */
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
  transition: all 0.3s ease-in-out;
`;