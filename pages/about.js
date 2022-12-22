import SidepageHero from '../components/building-blocks/SidepageHero';
import styled from 'styled-components';
import QuestionAnswer from '../components/pages/about/QuestionAnswer';
import { questions } from '../content/about-questions';

const About = () => {
  return (
    <>
      <SidepageHero
        title="About Us"
        bgImg="https://images.unsplash.com/photo-1543361431-5ab4878e4b26?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw&auto=format&fit=crop&w=2250&q=80"
      />
      <Wrapper>
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
