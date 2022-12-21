import React from 'react';
import styled from 'styled-components';
import { bodyTextColor } from '../../../utils/style-variables';
// import Image from 'next/image';
import Link from 'next/link';
import solutionImg from '../../../public/mission-statement-image.jpeg';
import SecondaryButton from '../../building-blocks/SecondaryButton';
import HeaderTwo from '../../building-blocks/HeaderTwo';
import BodyText from '../../building-blocks/BodyText';

const Solution = () => {
  return (
    <Wrapper>
      <Image alt="" />
      <Content className="half-section">
        <HeaderTwo text="Our Solution" className="solution__header" />
        <BodyText
          text="Kochvei HaShamayim was founded to be the Jewish community's response to this problem, providing the social infrastructure to support young couples by running programs and initiatives that allow them to realize both their family and career goals. Check out our Initiatives page for more information!"
          className="solution__text"
        />
        <Link href="/initiatives">
          <SecondaryButton buttonText="See Initiatives" />
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Solution;

const Wrapper = styled.section`
  display: flex;
  color: ${bodyTextColor};

  @media (max-width: 1019px) {
    flex-direction: column;
  }
`;

const Image = styled.div`
  width: 50%;
  background-image: url('/mission-statement-image.jpeg');
  background-size: cover;
  background-position: center;
  opacity: 0.8;

  @media (max-width: 1019px) {
    width: 100%;
    padding-top: 350px;
  }
`;

const Content = styled.div`
  width: 50%;
  padding-top: 6em;
  padding-bottom: 7em;
  padding-right: 4.5em;
  padding-left: 4.5em;
  font-size: 1.1em;
  line-height: 1.8;
  box-sizing: border-box;

  @media (max-width: 1361px) {
    padding: 6rem;
  }

  @media (max-width: 1019px) {
    width: 100%;
  }

  @media (max-width: 650px) {
    padding: 4rem;
  }

  @media (max-width: 500px) {
    padding: 4rem 2rem;
  }

  .solution__header {
    margin-bottom: 1em;
  }

  .solution__text {
    margin-bottom: 2em;
  }
`;
