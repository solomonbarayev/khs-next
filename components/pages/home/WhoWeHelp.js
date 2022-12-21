import IconElement from './IconElement';
import React from 'react';
import styled from 'styled-components';
import SecondaryButton from '../../building-blocks/SecondaryButton';
import HeaderTwo from '../../building-blocks/HeaderTwo';
import BodyText from '../../building-blocks/BodyText';
import Image from 'next/image';
import img from '../../../public/who-we-help.jpg';

const WhoWeHelp = () => {
  return (
    <Wrapper className="section">
      <Content>
        <HeaderTwo text="Who We Help" className="help__title" />
        <TextWrapper>
          <BodyText text="Kochvei is set up to benefit young Jewish couples pursuing higher education. In order to be eligible for the scholarship at least one spouse needs to be pursuing graduate or professional education in one of the following fields:" />
          <IconGrid>
            <IconElement text="Medicine" />
            <IconElement text="Dentistry" />
            <IconElement text="Law" />
            <IconElement text="Nursing" />
            <IconElement text="Accounting" />
            <IconElement text="PT/OT" />
            <IconElement text="STEM" />
            <IconElement text="Finance" />
            <IconElement text="Information Technology" />
          </IconGrid>

          <BodyText text="Feel free to contact us if your intended degree is not on the list." />
          <ButtonWrapper>
            <SecondaryButton buttonText="Pre-qualification Questionnaire" />
          </ButtonWrapper>
        </TextWrapper>
      </Content>
      <Image
        className="who-we-help__image"
        alt="working on computers together"
        src={img}
      />
    </Wrapper>
  );
};

export default WhoWeHelp;

const Wrapper = styled.section`
  display: flex;
  padding: 7em;
  gap: 25px;
  justify-content: space-between;
  background-image: url('/who-we-help-bg.svg');
  background-size: 200px 400px;
  background-repeat: no-repeat;
  background-position: 103% 100%;

  @media (max-width: 1361px) {
    padding: 6rem;
    flex-direction: column;
  }

  @media (max-width: 1019px) {
    padding-top: 0;
    gap: 4rem;
  }

  @media (max-width: 650px) {
    padding: 0rem 4rem 6rem;
  }

  @media (max-width: 500px) {
    padding: 0 2rem 4rem;
  }

  .who-we-help__image {
    max-height: 350px;
    width: 100%;
    padding-left: 2rem;
    object-fit: cover;
    box-sizing: border-box;

    @media (max-width: 1361px) {
      padding-left: 0;
    }

    @media (max-width: 1019px) {
      order: -1;
    }
  }
`;

const Content = styled.div`
  .help__title {
    margin-bottom: 2rem;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ButtonWrapper = styled.div``;
const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  @media (max-width: 500px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

// const Image = styled.img`
//   max-height: 350px;
//   width: 100%;
//   padding-left: 2rem;
//   object-fit: cover;
//   box-sizing: border-box;

//   @media (max-width: 1361px) {
//     padding-left: 0;
//   }

//   @media (max-width: 1019px) {
//     order: -1;
//   }
// `;
