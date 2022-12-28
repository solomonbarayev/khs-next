import PrimaryButton from './PrimaryButton';
import SecondaryButton from './SecondaryButton';
import styled from 'styled-components';

import React from 'react';
import Link from 'next/link';

const ButtonSetPrimarySecondary = ({
  primaryButtonText,
  secondaryButtonText,
  primaryButtonLink,
  secondaryButtonLink,
  className,
}) => {
  return (
    <ButtonSet className={className}>
      <Link href={primaryButtonLink}>
        <PrimaryButton buttonText={primaryButtonText} />
      </Link>
      <Link href={secondaryButtonLink}>
        <SecondaryButton buttonText={secondaryButtonText} />
      </Link>
    </ButtonSet>
  );
};

export default ButtonSetPrimarySecondary;

const ButtonSet = styled.div`
  display: flex;
  gap: 1rem;
`;
