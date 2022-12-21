import styled from 'styled-components';
import { primaryFont, bodyText } from '../../utils/style-variables';

const HeaderTwo = ({ text, className }) => {
  return <H2 className={className}>{text}</H2>;
};

export default HeaderTwo;

const H2 = styled.h2`
  font-family: ${primaryFont};
  color: ${bodyText};
  font-size: 1.8rem;
  line-height: 1.3;
  font-weight: 700;
  margin-block-end: 0;
  margin-block-start: 0;

  @media (max-width: 500px) {
    font-size: 1.6rem;
  }
`;
