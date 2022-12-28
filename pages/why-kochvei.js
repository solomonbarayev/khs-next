import React from 'react';
import styled from 'styled-components';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import modelImage from '../public/why-khs-model.png';
import SidepageHero from '../components/building-blocks/SidepageHero';
import HeaderTwo from '../components/building-blocks/HeaderTwo';
import BodyText from '../components/building-blocks/BodyText';
import investmentIcon from '../public/why-khs-icons/investment.svg';
import charityIcon from '../public/why-khs-icons/tzedakah.svg';
import familyIcon from '../public/why-khs-icons/family.svg';
import cooperativityIcon from '../public/why-khs-icons/cooperativity.svg';
import networkingIcon from '../public/why-khs-icons/management.svg';
import Image from 'next/image';
import {
  primaryColor,
  secondaryColorRGBA,
  secondaryColor,
} from '../utils/style-variables';
import PrimaryButton from '../components/building-blocks/PrimaryButton';
import Link from 'next/link';

const WhyKochvei = () => {
  return (
    <>
      <SidepageHero
        title="Why Kochvei?"
        className="why-kochvei__hero"
        subtitle="What's unique about Kochvei's model is that, in one donation, it allows a donor to attain several important goals, essentially hitting five birds with one stone!"
      />

      <Timeline>
        <VerticalTimeline
          layout="2-columns"
          lineColor={secondaryColor}
          className="why-khs-timeline">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              boxShadow: '0px 20px 40px rgb(0 0 0 / 10%)',
              padding: '1.3rem',
            }}
            icon={
              <IconWrapper>
                <Image
                  src={investmentIcon}
                  alt="investment"
                  className="why-khs-card__icon"
                />
              </IconWrapper>
            }>
            <HeaderTwo text="INVESTMENT" className="why-khs-card__header" />
            <BodyText
              text="In this article, we outline a simple mathematical model that shows how a community that shares in the cost of an individual's education, will also share in its value later on. As shown in the figure below, the average success index (a measure defined in the article that accounts for an individual's personal value and the value of his or her network) of each member of the community increases fastest in a community that shares in the education costs of its newest members."
              className="why-khs-card__body"
            />
            <Image
              src={modelImage}
              alt="model"
              width="500px"
              className="why-khs-card__model"
            />

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
            contentStyle={{
              boxShadow: '0px 20px 40px rgb(0 0 0 / 10%)',
              padding: '1.3rem',
            }}
            icon={
              <IconWrapper>
                <Image
                  src={charityIcon}
                  alt="charity"
                  className="why-khs-card__icon"
                />
              </IconWrapper>
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

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              boxShadow: '0px 20px 40px rgb(0 0 0 / 10%)',
              padding: '1.3rem',
            }}
            icon={
              <IconWrapper>
                <Image
                  src={familyIcon}
                  alt="family"
                  className="why-khs-card__icon"
                />
              </IconWrapper>
            }>
            <HeaderTwo text="JEWISH FUTURE" className="why-khs-card__header" />
            <BodyText
              text="Applicants to the Kochvei Fellowship are engaged or married individuals who push off starting a family to pursue graduate or professional education, or conversely, individuals who defer or sacrifice further education in order to start a family. Our Fellowships are awarded to those who are most likely to not push off one for the other, given the requisite financial and professional support we offer. Since pushing off starting a family usually means a couple will ultimately have less children, Kochvei Donors support the birth of children who otherwise would not have been born. What is more, these children are born into more educated, successful families, who will have that much more to offer the next generation of Kochvei kids!"
              className="why-khs-card__body"
            />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              boxShadow: '0px 20px 40px rgb(0 0 0 / 10%)',
              padding: '1.3rem',
            }}
            icon={
              <IconWrapper>
                <Image
                  src={cooperativityIcon}
                  alt="cooperativity"
                  className="why-khs-card__icon"
                />
              </IconWrapper>
            }>
            <HeaderTwo text="COOPERATIVITY" className="why-khs-card__header" />
            <BodyText
              text="By supporting young families financially and professionally, Kochvei allows the establishment of a close-knit, cooperative community. Instead of being shackled with long term loans, families can invest those same funds in themselves or pay them forward to others. Moreover, the faster economic growth those families will experience will allow them to help other families in the future, which contributes to the effects seen in the above figure."
              className="why-khs-card__body"
            />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              boxShadow: '0px 20px 40px rgb(0 0 0 / 10%)',
              padding: '1.3rem',
            }}
            icon={
              <IconWrapper>
                <Image
                  src={networkingIcon}
                  alt="networking"
                  className="why-khs-card__icon"
                />
              </IconWrapper>
            }>
            <HeaderTwo text="NETWORKING" className="why-khs-card__header" />
            <BodyText
              text="Through events such as the annual Thank You Gala, Kochvei promotes the growth of a professional network that may serve the donors in the long term as much as (or even more than) the funds support the young professional couples in the short term. These events also allow donors to meet each other, serving as a platform for successful professionals from different fields to meet and interact. We also support the growth and success of the Kochvei community through professional workshops, lectures, and trips abroad!"
              className="why-khs-card__body"
            />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Timeline>
      <WhyKHSCta>
        <CTAContent>
          <HeaderTwo text="GET INVOLVED" className="cta__title" />
          <BodyText text="We hope you join our community! For more information, feel free to contact us." />
          <Link href="/contact">
            <PrimaryButton buttonText="Get In Touch" className="cta__button" />
          </Link>
        </CTAContent>
      </WhyKHSCta>
    </>
  );
};

export default WhyKochvei;

const Timeline = styled.div`
  padding: 0 2rem 6rem;

  @media screen and (max-width: 600px) {
    padding: 0 0.5rem 6rem;
  }

  .why-khs-card__header {
    margin-top: 1rem;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    color: ${primaryColor};

    @media screen and (max-width: 600px) {
      margin-top: 0.3rem;
      margin-bottom: 1rem;
      font-size: 1.2rem;
    }
  }

  .why-khs-card__model {
    margin: 2rem 0;
    width: 100%;
    max-width: 650px;
  }
`;

const IconWrapper = styled.div`
  display: 'flex';
  justify-content: 'center';
  align-items: 'center';
  background-color: ${primaryColor};
  border-radius: 100px;
  border: 0px;
  box-sizing: border-box;
  padding: 10px;
`;

const WhyKHSCta = styled.section`
  background-color: aliceblue;
  border-bottom: 5px solid #fff;
  padding: 6rem 2rem;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 650px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 0 auto;

  .cta__button {
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: bold;
  }
`;
