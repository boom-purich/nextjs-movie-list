import Layout from 'components/Layout';
import Meta from 'components/Meta';
import '../styles/globals.scss'
import { Provider } from 'react-redux';
import store from 'redux/store';


function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <Meta />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )



}

export default MyApp
