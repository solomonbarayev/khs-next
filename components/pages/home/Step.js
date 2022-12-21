import React from 'react';
import styled from 'styled-components';
import { secondaryColor } from '../../../utils/style-variables';

const Step = ({ i, title, text }) => {
  return (
    <Wrapper>
      <Number>{i}</Number>
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
    </Wrapper>
  );
};

export default Step;

const Wrapper = styled.li`
  display: flex;
  gap: 1rem;
  text-align: left;
`;

const Number = styled.div`
  border: ${secondaryColor} 1px solid;
  border-radius: 5px;
  height: 40px;
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Title = styled.h3`
  font-size: 1rem;
  margin-block-start: 0;
  margin-block-end: 0;
`;

const Text = styled.p`
  margin-block-start: 0;
  margin-block-end: 0;
`;
