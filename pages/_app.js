import '../styles/globals.css';
import Layout from '../components/Layout';
import { createGlobalStyle } from 'styled-components';
import { AuthProvider } from '../contexts/AuthContext';

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat-Regular.ttf') format('ttf');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Montserrat';
  src: url('Montserrat-Bold.ttf') format('ttf');
  font-weight: 700;
  font-style: bold;
  font-display: swap;
}

`;

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}
