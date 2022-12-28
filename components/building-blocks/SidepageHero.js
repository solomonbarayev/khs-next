import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import { bodyTextColor, whiteColor } from '../../utils/style-variables';
import BodyText from './BodyText';

const SidepageHero = ({ title, bgImg, className, darkBg, subtitle }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Kochvei HaShamayim champions the values of family, community, and education by supporting young Jewish couples, allowing them to minimize difficult compromises and to excel in both their family life and their early career or continued education."
        />
      </Head>
      <Wrapper bgImg={bgImg} className={className}>
        <TitleContent>
          <Title darkBg={darkBg}>{title}</Title>
          {subtitle && <BodyText text={subtitle} />}
        </TitleContent>
      </Wrapper>
    </>
  );
};

export default SidepageHero;

const Wrapper = styled.header`
  padding: 7rem 1rem;
  text-align: center;
  background-image: ${({ bgImg }) => (bgImg ? `url(${bgImg})` : 'none')};
  background-size: cover;
  background-repeat: no-repeat;
`;

const TitleContent = styled.div`
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-block-end: 0;
  margin-block-start: 0;
  color: ${({ darkBg }) => (darkBg ? whiteColor : bodyTextColor)};

  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;
