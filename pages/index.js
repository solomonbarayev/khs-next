import styled from 'styled-components';
import Hero from '../components/pages/home/Hero';
import Problem from '../components/pages/home/Problem';

export default function Home() {
  return (
    <Wrapper>
      <Hero />
      <Problem />
    </Wrapper>
  );
}

const Wrapper = styled.main``;
