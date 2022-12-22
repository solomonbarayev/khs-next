import PrimaryButton from '../../building-blocks/PrimaryButton';
import SecondaryButton from '../../building-blocks/SecondaryButton';
import React from 'react';
import styled from 'styled-components';
import { bodyTextColor } from '../../../utils/style-variables';
import BodyText from '../../building-blocks/BodyText';
import Link from 'next/link';

const Hero = () => {
  return (
    <HeroSection>
      <HeroImage />
      <HeroContent>
        <h1 className="hero__title">Empowering the Jewish Future</h1>
        <BodyText
          text="Enabling young Jewish families to pursue graduate and professional
          education"
          className="hero__subtitle"
        />
        <ButtonContainer>
          <Link href="/application">
            <PrimaryButton buttonText="Apply Today" />
          </Link>
          <Link href="/initiatives">
            <SecondaryButton buttonText="Get Involved" />
          </Link>
        </ButtonContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;

const HeroSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  height: 100vh;

  @media (max-width: 950px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    background-image: url('/hero-image.jpeg');
    background-size: cover;
    background-position: center;
  }

  @media (max-width: 650px) {
    height: 70vh;
  }
`;

const HeroContent = styled.div`
  background-image: radial-gradient(
    at 100% 100%,
    rgba(150, 200, 232, 0.75),
    rgba(239, 249, 255, 0.94)
  );
  padding: 4.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 950px) {
    padding: 6rem;
  }

  @media (max-width: 650px) {
    padding: 4rem;
  }

  @media (max-width: 500px) {
    padding: 2rem;
  }

  .hero__title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.3;
    max-width: 30rem;
    color: ${bodyTextColor};
    margin-bottom: 0.5em;

    @media (max-width: 650px) {
      font-size: 2.5rem;
    }

    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }

  .hero__subtitle {
    margin-bottom: 3em;
    font-size: 1.3em;
    max-width: 25em;
    line-height: 1.6;
    color: ${bodyTextColor};
  }
`;

const HeroImage = styled.div`
  background-color: gray;
  height: 100%;
  background-image: url('/hero-image.jpeg');
  background-size: cover;
  background-position: center;
  opacity: 0.8;

  @media (max-width: 950px) {
    display: none;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;
