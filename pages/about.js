import SidepageHero from '../components/building-blocks/SidepageHero';
import styled from 'styled-components';
import QuestionAnswer from '../components/pages/about/QuestionAnswer';
import { questions } from '../content/about-questions';
import HeaderTwo from '../components/building-blocks/HeaderTwo';
import BodyText from '../components/building-blocks/BodyText';
import ourNameImage from '../public/our-names-img.jpg';
import Image from 'next/image';
import {
  primaryColor,
  secondaryColor,
  whiteColor,
} from '../utils/style-variables';
import { ourTeam } from '../content/our-team';
import TeamMember from '../components/pages/about/TeamMember';
import PrimaryButton from '../components/building-blocks/PrimaryButton';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <SidepageHero
        title="About Us"
        bgImg="https://images.unsplash.com/photo-1543361431-5ab4878e4b26?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw&auto=format&fit=crop&w=2250&q=80"
      />
      <Wrapper>
        <section>
          {questions.map((question, index) => (
            <QuestionAnswer
              key={index}
              question={question.question}
              answer={question.answer}
              className={`question__type_${question.question
                .toLowerCase()
                .replace('?', '')}`}
            />
          ))}
        </section>
        <OurName>
          <OurNameContent>
            <OurNameText>
              <HeaderTwo text="Our Name" />
              {/* <span className="divider"></span> */}
              <Divider />
              <BodyText text="“Kochvei HaShamayim,” which literally translates as “stars of the sky” is an allusion to those same words used in God's promise to the Patriarchs, Avraham, Yitzhak and Yaakov, that their descendents would be plentiful like the stars (3).It also alludes to our mission of enabling Jewish students to continue their professional and graduate education to become tomorrow's “rising stars.” Our name thus encapsulates our three key values—family, community, and education." />

              <div className="footnotes">
                <hr />
                <span className="footnote">&#40;3&#41; Bereshit 26, 4</span>
              </div>
            </OurNameText>
            <OurNameImage>
              <Image
                src={ourNameImage}
                alt="Our Name"
                className="our-name__image"
              />
            </OurNameImage>
          </OurNameContent>
        </OurName>

        <OurTeam>
          <HeaderTwo text="Meet Our Team" />

          <ul className="our-team__list">
            {ourTeam.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </ul>
        </OurTeam>

        <AboutCTA>
          <AboutCTAContentWrapper>
            <AboutCTAContent className="half-section">
              <HeaderTwo
                text="With your help we can make a difference"
                className="about-cta__title"
              />
              <BodyText
                text="Help us strengthen the future of the Jewish up and coming."
                className="about-cta__text"
              />
              <Link href="/initiatives">
                <PrimaryButton
                  buttonText="Get Involved"
                  className="about-cta__button"
                />
              </Link>
            </AboutCTAContent>
          </AboutCTAContentWrapper>
          <AboutCTAImage>
            {/* <img
              // src={aboutCTAImage}
              src="/mission-statement-img.jpeg"
              alt="Our Mission"
              className="about-cta__image"
            /> */}
            <CTAImage src="/mission-statement-img.jpeg" />
          </AboutCTAImage>
        </AboutCTA>
      </Wrapper>
    </>
  );
};

export default About;

const Wrapper = styled.main`
  .question__type_who {
    background-color: #f7f7f7;
  }

  .footnotes {
    margin-top: 1rem;
  }

  .footnote {
    font-size: 0.8rem;
  }
`;

const OurName = styled.section`
  padding: 6rem 2rem;
  background-image: url('/about-us-bg.jpg');
  background-size: cover;
  background-position: center;

  @media (max-width: 600px) {
    padding: 3rem 2rem;
  }
`;

const OurNameContent = styled.div`
  display: flex;
  background-color: ${whiteColor};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1224px) {
    flex-direction: column;
  }
`;

const OurNameText = styled.div`
  width: 65%;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 1224px) {
    width: 100%;
    padding: 2rem;
  }
`;

const Divider = styled.div`
  width: 2rem;
  height: 2px;
  background-color: ${secondaryColor};
`;

const OurNameImage = styled.div`
  width: 35%;

  @media (max-width: 1224px) {
    width: 100%;
    height: 300px;
  }

  .our-name__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const OurTeam = styled.section`
  padding: 6rem 2rem;
  background-color: #fcfcfc;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  .our-team__list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const AboutCTA = styled.section`
  display: flex;
  align-items: center;
  background-color: ${primaryColor};
  position: relative;

  @media (max-width: 921px) {
    flex-direction: column;
  }
`;

const AboutCTAContentWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  padding: 3rem 2rem;

  @media (max-width: 921px) {
    width: 100%;
  }
`;

const AboutCTAContent = styled.div`
  /* width: 50%; */
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .about-cta__title {
    color: ${whiteColor};
  }

  .about-cta__text {
    color: ${whiteColor};
  }

  .about-cta__button {
    background-color: ${secondaryColor};
  }
`;

const AboutCTAImage = styled.div`
  width: 50%;

  @media (max-width: 921px) {
    width: 100%;
    height: 100%;
  }
`;

const CTAImage = styled.img`
  width: 100%;
  object-fit: cover;

  @media (max-width: 921px) {
    max-height: 300px;
    object-position: 0% 0%;
  }
`;
