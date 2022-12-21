import styled from 'styled-components';
import React from 'react';
import { bodyTextColor } from '../../utils/style-variables';

const BodyText = ({ text, className }) => {
  return <Text className={className}>{text}</Text>;
};

export default BodyText;

const Text = styled.p`
  margin-block-end: 0;
  margin-block-start: 0;
  font-size: 1.1rem;
  line-height: 1.5;
  color: ${bodyTextColor};
`;
