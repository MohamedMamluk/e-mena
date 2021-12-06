import 'tailwindcss/tailwind.css'
import '@material-tailwind/react/tailwind.css'
import Head from 'next/head'
import Layout from '../components/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
