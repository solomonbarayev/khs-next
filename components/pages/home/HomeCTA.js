import styled from 'styled-components';
import HeaderTwo from '../../building-blocks/HeaderTwo';
import BodyText from '../../building-blocks/BodyText';
import SecondaryButton from '../../building-blocks/SecondaryButton';
import { secondaryColor, whiteColor } from '../../../utils/style-variables';

const HomeCTA = () => {
  return (
    <Wrapper>
      <Content>
        <HeaderTwo
          text="With your help we can make a difference"
          className="cta__title"
        />
        <BodyText
          text="Discover how you can help us enable young Jewish families achieve higher degrees."
          className="cta__text"
        />
        <SecondaryButton buttonText="Get Involved" className="cta__button" />
      </Content>
    </Wrapper>
  );
};

export default HomeCTA;

const Wrapper = styled.section`
  background-color: #070c3f;
  padding: 6em;

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
  align-items: center;
  gap: 1.5rem;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;

  .cta__title {
    color: ${whiteColor};
    font-size: 1.6rem;
  }

  .cta__text {
    color: ${whiteColor};
    font-weight: 300;
  }

  .cta__button {
    border-color: ${secondaryColor};
    background-color: ${secondaryColor};
    font-weight: 500;
  }
`;
