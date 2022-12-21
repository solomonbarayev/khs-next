import styled from 'styled-components';
import HeaderTwo from '../../building-blocks/HeaderTwo';
import BodyText from '../../building-blocks/BodyText';
import Step from './Step';
import { steps } from '../../../content/applicationProcess';
import PrimaryButton from '../../building-blocks/PrimaryButton';

const ApplicationProcess = () => {
  return (
    <Wrapper className="section">
      <Content>
        <HeaderTwo text="Our Application Process" className="process__title" />
        <BodyText
          text="We reward scholarships based on candidates' on financial needs, merits, and recommendations."
          className="process__text"
        />

        <HalfScreenSplit>
          <Image />
          <TextContent>
            <Steps>
              {steps.map((step) => (
                <Step
                  key={step.id}
                  i={step.id}
                  title={step.title}
                  text={step.text}
                />
              ))}
            </Steps>
            <div>
              <PrimaryButton buttonText="Apply Today" />
            </div>
          </TextContent>
        </HalfScreenSplit>
      </Content>
    </Wrapper>
  );
};

export default ApplicationProcess;

const Wrapper = styled.section`
  padding: 7em;
  text-align: center;

  @media (max-width: 1361px) {
    padding: 6rem;
  }

  @media (max-width: 650px) {
    padding: 6rem 4rem;
  }

  @media (max-width: 500px) {
    padding: 4rem 2rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  .process__text {
    max-width: 700px;
    margin: 0 auto;
  }
`;

const HalfScreenSplit = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 871px) {
    flex-direction: column;
  }
`;

const Image = styled.div`
  width: 50%;
  background-image: url('https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 5px;

  @media (max-width: 871px) {
    width: 100%;
    height: 300px;
    opacity: 0.8;
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 50%;
  text-align: left;

  @media (max-width: 871px) {
    width: 100%;
  }
`;

const Steps = styled.ul`
  list-style: none;
  padding-inline-start: 0;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
