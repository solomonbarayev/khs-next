import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

const ProblemCard = ({ text, icon }) => {
  return (
    <Card>
      {/* <img src={icon} alt={text} className="card__icon" /> */}
      <Image src={icon} alt={text} className="card__icon" />
      <p className="card__text">{text}</p>
    </Card>
  );
};

export default ProblemCard;

const Card = styled.li`
  box-shadow: -12px 10px 74px 1px rgb(206 206 206 / 31%);
  padding: 2em 1em;
  width: 33%;
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 14px;
  box-sizing: border-box;

  @media (max-width: 798px) {
    width: 100%;
    flex-direction: row;
    padding: 2em;
    gap: 2rem;
    text-align: left;
  }

  @media (max-width: 400px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .card__icon {
    max-width: 50px;
    height: 50px;
    margin-bottom: 1em;
    margin: 0 auto;

    @media (max-width: 798px) {
      margin: 0;
    }

    @media (max-width: 400px) {
      margin: 0 auto;
    }
  }
`;
