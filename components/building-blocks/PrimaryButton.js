import styled from 'styled-components';
import { primaryColor, whiteColor } from '../../utils/style-variables';

export default function PrimaryButton({ className, buttonText, type }) {
  return (
    <PrimaryBtn className={className} type={type || 'button'}>
      {buttonText}
    </PrimaryBtn>
  );
}

const PrimaryBtn = styled.button`
  background-color: ${primaryColor};
  border: 1px solid ${primaryColor};
  color: ${whiteColor};
  padding: 10px 16px;
  border-radius: 3px;
  cursor: pointer;
`;
