import React from 'react';
import SidepageHero from '../components/building-blocks/SidepageHero';
import ButtonSetPrimarySecondary from '../components/building-blocks/ButtonSetPrimarySecondary';
import styled from 'styled-components';
import HeaderTwo from '../components/building-blocks/HeaderTwo';
import BodyText from '../components/building-blocks/BodyText';
import { secondaryColor } from '../utils/style-variables';
import PrimaryButton from '../components/building-blocks/PrimaryButton';
import Link from 'next/link';

const initiatives = () => {
  return (
    <>
      <SidepageHero
        title="Initiatives"
        bgImg="/get-involved-hero-bg.jpg"
        className="initiatives__hero"
        darkBg={true}
      />
      <CommunityBuilding>
        <CBIHeader>
          <Divider />
          <HeaderTwo
            text="Community Building Fellowship"
            className="cbi__header"
          />
        </CBIHeader>
        <div className="text-container">
          <BodyText text="Young Jewish couples are often faced with a dilemma: on one hand, putting down their roots in large, established Jewish communities is enticing for professional and social reasons; on the other hand, the cost of living in these communities is usually much higher than they can afford. Moreover, lesser known, small and mid-size Jewish communities around the country may be hidden gems that many couples would thrive in given the opportunity. Addressing these concerns, Kochvei HaShamayim seeks to work with and connect communities of all sizes with young couples from different backgrounds. Young couples joining a given community are expected to become active members, and invest in the community by, for example," />
          <ul>
            <li>
              <BodyText text="offering classes for adults, teens or children" />
            </li>
            <li>
              <BodyText text="organizing social events for adults, teens or children" />
            </li>
            <li>
              <BodyText text="leading services and leining" />
            </li>
            <li>
              <BodyText text="organizing special holiday events" />
            </li>
            <li>
              <BodyText text="leading or supporting shul initiatives and programs" />
            </li>
            <li>
              <BodyText text="volunteer services related to the career path they are pursuing in graduate/professional school" />
            </li>
          </ul>
          <BodyText text="The community would, in turn, support the young family by providing, for example," />
          <ul>
            <li>
              <BodyText text="free or subsidized housing" />
            </li>
            <li>
              <BodyText text="free or subsidized daycare services" />
            </li>
            <li>
              <BodyText text="free or subsidized car" />
            </li>
            <li>
              <BodyText text="free synagogue membership" />
            </li>
          </ul>
          <BodyText text="Of course, the above lists are just examples. Communities who partner with KHS are expected to make their own lists of incentives they are willing and able to offer couples, as well as a list of responsibilities they would like incoming couples to undertake." />
          <ButtonSetPrimarySecondary
            primaryButtonText="Community Sign Up"
            primaryButtonLink="/community-signup"
            secondaryButtonText="Applicant Sign Up"
            secondaryButtonLink="/application"
            className="cbi__button-set"
          />
        </div>
      </CommunityBuilding>
      <CBIcta>
        <CBIctaWrapper>
          <HeaderTwo
            text="With your help we can make a difference"
            className="cbi__cta-header"
          />
          <BodyText
            text="Help us strengthen the Jewish future!"
            className="cbi__cta-text"
          />
          <Link href="/community-signup">
            <PrimaryButton
              buttonText="Sign Up Today!"
              className="cbi__cta-button"
            />
          </Link>
        </CBIctaWrapper>
      </CBIcta>
    </>
  );
};

export default initiatives;

const CommunityBuilding = styled.article`
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 6rem 2rem;

  .text-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .cbi__button-set {
      margin-top: 2rem;
    }
  }

  ul {
    list-style: disc;
    padding-inline-start: 2rem;
  }
`;

const CBIHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .cbi__header {
    font-weight: lighter;
  }
`;

const Divider = styled.div`
  width: 2rem;
  height: 3px;
  background-color: ${secondaryColor};
`;

const CBIcta = styled.section`
  background-color: #eff9ff;
  border-bottom: solid 5px #fff;
  padding: 6rem 2rem;
`;

const CBIctaWrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  text-align: center;

  .cbi__cta-button {
    background-color: ${secondaryColor};
    border-color: ${secondaryColor};
    font-weight: bold;
    letter-spacing: 1px;
  }
`;
