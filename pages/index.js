import styled from 'styled-components';
import ApplicationProcess from '../components/pages/home/ApplicationProcess';
import Hero from '../components/pages/home/Hero';
import HomeCTA from '../components/pages/home/HomeCTA';
import Problem from '../components/pages/home/Problem';
import Solution from '../components/pages/home/Solution';
import WhoWeHelp from '../components/pages/home/WhoWeHelp';

export default function Home() {
  return (
    <Wrapper>
      <Hero />
      <Problem />
      <Solution />
      <WhoWeHelp />
      <HomeCTA />
      <ApplicationProcess />
    </Wrapper>
  );
}

const Wrapper = styled.main``;
