import '../styles/globals.css';
import Layout from '../components/Layout';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    @font-face {
    font-family: 'Montserrat-Regular';
    src: url('/fonts/Montserrat-Regular.ttf') format('ttf');
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: 'Montserrat-Bold';
    src: url('/fonts/Montserrat-Bold.ttf') format('ttf');
    font-style: bold;
    font-weight: 700;
    font-display: swap;
  }
`;

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
