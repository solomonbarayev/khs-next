import SidepageHero from '../components/building-blocks/SidepageHero';
import styled from 'styled-components';
import QuestionAnswer from '../components/pages/about/QuestionAnswer';
import { questions } from '../content/about-questions';
import HeaderTwo from '../components/building-blocks/HeaderTwo';
import BodyText from '../components/building-blocks/BodyText';
import ourNameImage from '../public/our-names-img.jpg';
import Image from 'next/image';
import { secondaryColor, whiteColor } from '../utils/style-variables';

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
