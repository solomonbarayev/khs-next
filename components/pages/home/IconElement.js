import React from 'react';
import styled from 'styled-components';
import { FaCheck } from 'react-icons/fa';
import { secondaryColor } from '../../../utils/style-variables';
export default function IconElement({ text }) {
  return (
    <Wrapper>
      <span className="who-we-help__icon">
        <FaCheck color={secondaryColor} fontSize="18px" />
      </span>
      <h3>{text}</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;

  h3 {
    margin-left: 1rem;
    margin-block-start: 0;
    margin-block-end: 0;
    font-size: 16px;
    font-weight: 400;
  }
`;
