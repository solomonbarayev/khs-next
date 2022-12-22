import styled from 'styled-components';
import { secondaryColor, bodyTextColor } from '../../../utils/style-variables';

const QuestionAnswer = ({ question, answer, className }) => {
  return (
    <Wrapper className={!className ? `section` : `section ${className}`}>
      <QuestionContent>
        <QuestionWrapper>
          <h3 className="question__header">{question}</h3>
          <span className="question__line"></span>
        </QuestionWrapper>
        <div className="answer">{answer}</div>
      </QuestionContent>
    </Wrapper>
  );
};

export default QuestionAnswer;

const Wrapper = styled.article`
  padding: 6rem 2rem;

  @media screen and (max-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const QuestionContent = styled.div`
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
  gap: 3rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const QuestionWrapper = styled.div`
  display: flex;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }

  .question__line {
    width: 1px;
    height: 100%;
    background-color: ${secondaryColor};
    opacity: 0.7;

    @media screen and (max-width: 768px) {
      width: 100%;
      height: 1px;
    }
  }

  .question__header {
    font-size: 2rem;
    font-weight: 700;
    margin-block-end: 0;
    margin-block-start: 0;
    color: ${bodyTextColor};
  }
`;
