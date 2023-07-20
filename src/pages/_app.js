import Layout from '../components/Layout/Layout';
import '../styles/global.css';
import store from '../store';
import { Provider } from 'react-redux';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="icon" href="/images/favicon/favicon.ico" />
      </Head>    
      <Provider store={store}>
        <Layout>
            <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
    )
}

export default MyApp