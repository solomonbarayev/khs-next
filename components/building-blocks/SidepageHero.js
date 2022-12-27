import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import { bodyTextColor, whiteColor } from '../../utils/style-variables';

const SidepageHero = ({ title, bgImg, className, darkBg }) => {
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
        <Title darkBg={darkBg}>{title}</Title>
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

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-block-end: 0;
  margin-block-start: 0;
  color: ${({ darkBg }) => (darkBg ? whiteColor : bodyTextColor)};
`;
