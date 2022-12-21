import React from 'react';
import styled from 'styled-components';
import ProblemCard from './ProblemCard';
import moneyIcon from '../../../public/money-icon.svg';
import supportIcon from '../../../public/support-icon.svg';
import educationIcon from '../../../public/education-icon.svg';
import HeaderTwo from '../../building-blocks/HeaderTwo';
import BodyText from '../../building-blocks/BodyText';

const Problem = () => {
  return (
    <Wrapper className="problem">
      <WrapperContent>
        <ProblemContent>
          <HeaderTwo
            text="The Problem We're Solving"
            className="problem__title"
          />
          <BodyText
            className="problem__text"
            text="Young Jewish couples either forgo professional or graduate school to
            get married or start a family, or pursue further education but push
            off getting married or starting a family due to:"
          />
        </ProblemContent>
        <ProblemCards>
          <ProblemCardList>
            <ProblemCard
              text="Exorbitant long-term school loans"
              icon={moneyIcon}
            />
            <ProblemCard
              text="No financial support from immediate family members"
              icon={supportIcon}
            />
            <ProblemCard
              text="First generation Americans and college graduates"
              icon={educationIcon}
            />
          </ProblemCardList>
        </ProblemCards>
      </WrapperContent>
    </Wrapper>
  );
};

export default Problem;

const Wrapper = styled.section``;

const WrapperContent = styled.div`
  padding: 7em;
  box-sizing: border-box;
  max-width: 1400px;
  margin: 0 auto;
  font-family: 'Montserrat', sans-serif;
  display: flex;
  gap: 20px;
  justify-content: baselined;
  color: #4f4f4f;

  @media (max-width: 1361px) {
    padding: 6rem;
    flex-direction: column;
  }

  @media (max-width: 650px) {
    padding: 6rem 4rem;
  }

  @media (max-width: 500px) {
    padding: 4rem 2rem;
  }

  .problem__title {
    max-width: 284px;

    @media (max-width: 1361px) {
      min-width: 230px;
      width: 100%;
    }

    @media (max-width: 814px) {
      max-width: none;
      min-width: 100%;
    }
  }

  .problem__text {
    max-width: 360px;

    @media (max-width: 1361px) {
      max-width: 100%;
    }
  }
`;

const ProblemContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  flex: 1;

  @media (max-width: 1361px) {
    flex-direction: row;
  }

  @media (max-width: 814px) {
    flex-direction: column;
  }
`;

const ProblemCards = styled.div`
  flex: 2;
`;

const ProblemCardList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  flex-basis: 33%;
  padding: 0;
  list-style: none;

  @media (max-width: 798px) {
    flex-direction: column;
    gap: 20px;
  }
`;
