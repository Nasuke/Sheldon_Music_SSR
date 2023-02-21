import 'normalize.css';
import '@/styles/globals.scss';
import "antd/dist/reset.css";
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';


import wrapper from '@/store/index';
import Layout from '@/components/layout';


export default function App({ Component, ...rest }: AppProps) {
  // Redux接入App
  const { store, props } = wrapper.useWrappedStore(rest)
  return (
    <Provider store={store}>
      <Layout>
        <Component {...props.pageProps} />
      </Layout>
    </Provider>
  )
}
