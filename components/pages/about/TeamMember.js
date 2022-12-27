import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { secondaryColor } from '../../../utils/style-variables';

const TeamMember = ({
  member: { name, image, linkedin, description, title },
}) => {
  return (
    <Member>
      <ImageContainer>{image}</ImageContainer>
      <Text>
        <NameTitle>
          <Name>{name},</Name>
          <Title>{title}</Title>
        </NameTitle>
        <p>{description}</p>
      </Text>
    </Member>
  );
};

export default TeamMember;

const Member = styled.li`
  display: flex;
  text-align: start;
  max-width: 1080px;
  margin: 0 auto;
  box-shadow: 0px 10px 40px rgb(0 0 0 / 10%);
  padding: 2rem;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

const Text = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const NameTitle = styled.div`
  display: flex;
  align-items: center;
  color: #566d8f;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Name = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-block-end: 0;
  margin-block-start: 0;
`;

const Title = styled.h4`
  font-size: 1.2rem;
  font-weight: 400;
  margin-block-end: 0;
  margin-block-start: 0;
`;

const ImageContainer = styled.div`
  width: 30%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
