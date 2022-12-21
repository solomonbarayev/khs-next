import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../utils/style-variables';

export default function PrimaryButton({ className, buttonText }) {
  return <SecondaryBtn className={className}>{buttonText}</SecondaryBtn>;
}

const SecondaryBtn = styled.button`
  padding: 10px 16px;
  border-radius: 3px;
  cursor: pointer;
  background-color: transparent;
  color: ${primaryColor};
  border: 2px solid ${secondaryColor};
`;
