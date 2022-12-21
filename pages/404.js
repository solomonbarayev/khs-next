import Link from 'next/link';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import HeaderTwo from '../components/building-blocks/HeaderTwo';
import SecondaryButton from '../components/building-blocks/SecondaryButton';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, [router]);

  return (
    <Wrapper>
      <HeaderTwo text="404" className="not-found__title" />
      <p>Oops! Sorry, the page you&apos;re looking for can not be found...</p>
      <Link href="/">
        <SecondaryButton buttonText="Go back home" />
      </Link>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  gap: 40px;
  padding: 25px;

  .not-found__title {
    font-size: 4rem;
  }
`;
