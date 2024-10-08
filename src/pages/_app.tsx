import Layout from '@/components/Layout';
import type { AppProps } from 'next/app';
import '../assets/fonts/fonts.css';
import '../styles/reset.css';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
