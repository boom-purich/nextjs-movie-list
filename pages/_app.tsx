import Layout from 'components/Layout';
import Meta from 'components/Meta';
import '../styles/globals.scss'


function MyApp({ Component, pageProps }) {

  return <>
    <Layout>
      <Meta/>
      <Component {...pageProps} />
    </Layout>
  </>

}

export default MyApp
