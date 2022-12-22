import Head from 'next/head';
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
      <Head>
        <title>Kochvei HaShamayim | Home</title>
        <meta
          name="description"
          content="Kochvei HaShamayim champions the values of family, community, and education by supporting young Jewish couples, allowing them to minimize difficult compromises and to excel in both their family life and their early career or continued education."
        />
        <meta
          name="keywords"
          content="Kochvei, HaShamayim, jewish, academics, higher education, KHS"
        />
        <meta name="author" content="Kochvei HaShamayim" />
      </Head>
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
