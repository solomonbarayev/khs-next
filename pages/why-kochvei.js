import React from 'react';
import styled from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import modelImage from '../public/why-khs-model.png';
import modelImage from '../public/why-khs-model.png';
import SidepageHero from '../components/building-blocks/SidepageHero';
import { GrMoney } from 'react-icons/gr';
import HeaderTwo from '../components/building-blocks/HeaderTwo';
import BodyText from '../components/building-blocks/BodyText';
import investmentIcon from '../public/why-khs-icons/investment.svg';
import charityIcon from '../public/why-khs-icons/tzedakah.svg';
import Image from 'next/image';
import { secondaryColor } from '../utils/style-variables';

const WhyKochvei = () => {
  return (
    <>
      <SidepageHero
        title="Why Kochvei?"
        className="why-kochvei__hero"
        subtitle="What's unique about Kochvei's model is that, in one donation, it allows a donor to attain several important goals, essentially hitting five birds with one stone!"
      />

      <Timeline>
        <VerticalTimeline layout="1-column" lineColor={secondaryColor}>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ boxShadow: '0px 20px 40px rgb(0 0 0 / 10%)' }}
            icon={
              <Image
                src={investmentIcon}
                alt="investment"
                className="why-khs-card__icon"
              />
            }>
            <HeaderTwo text="INVESTMENT" className="why-khs-card__header" />
            <BodyText
              text="In this article, we outline a simple mathematical model that shows how a community that shares in the cost of an individual's education, will also share in its value later on. As shown in the figure below, the average success index (a measure defined in the article that accounts for an individual's personal value and the value of his or her network) of each member of the community increases fastest in a community that shares in the education costs of its newest members."
              className="why-khs-card__body"
            />
            <img src="/why-khs-model.png" alt="model" width="500px" />

            <BodyText
              text={
                <p>
                  <strong>Note:</strong> The model assumes, among other things,
                  that we add 10 fellows a year. For more details, check out
                  this article, where we present this model.
                </p>
              }
              className="why-khs-card__body"
            />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ boxShadow: '0px 20px 40px rgb(0 0 0 / 10%)' }}
            icon={
              <Image
                src={charityIcon}
                alt="investment"
                className="why-khs-card__icon"
              />
            }>
            <HeaderTwo
              text="TZEDAKAH (CHARITY)"
              className="why-khs-card__header"
            />
            <BodyText
              text="In his code of Jewish law, Maimonides delineates eight levels of charity. Of these, the highest is giving someone an interest-free loan, a job, or more generally, enabling someone to get up on their feet by their own efforts. In doing so, the recipient is not embarrassed or belittled as may be the case with lower forms of charity, and the donor does not grow as haughty, since, ultimately, the recipient is responsible for his or her growth and success."
              className="why-khs-card__body"
            />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Timeline>
    </>
  );
};

export default WhyKochvei;

const Timeline = styled.div`
  .why-khs-card__icon {
    width: 70px;
    background-color: #000;
    padding: 10px;
    border-radius: 100px;
    border: 0px;
    box-sizing: border-box;
  }
`;
