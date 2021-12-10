import 'tailwindcss/tailwind.css'
import Head from 'next/head'
import Layout from '../components/Layout'
import { Provider } from 'react-redux'
import { store } from '../state'
import '../styles/editor.css'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp
