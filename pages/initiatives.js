import React from 'react';
import SidepageHero from '../components/building-blocks/SidepageHero';
import styled from 'styled-components';
import HeaderTwo from '../components/building-blocks/HeaderTwo';
import BodyText from '../components/building-blocks/BodyText';
import { secondaryColor } from '../utils/style-variables';

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
        <div className="container">
          <CBIHeader>
            <Divider />
            <HeaderTwo
              text="Community Building Fellowship"
              className="cbi__header"
            />
          </CBIHeader>
          <BodyText text="Young Jewish couples are often faced with a dilemma: on one hand, putting down their roots in large, established Jewish communities is enticing for professional and social reasons; on the other hand, the cost of living in these communities is usually much higher than they can afford. Moreover, lesser known, small and mid-size Jewish communities around the country may be hidden gems that many couples would thrive in given the opportunity. Addressing these concerns, Kochvei HaShamayim seeks to work with and connect communities of all sizes with young couples from different backgrounds. Young couples joining a given community are expected to become active members, and invest in the community by, for example," />
        </div>
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
      </CommunityBuilding>
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
