import Head  from 'next/head'
import '../styles/globals.css'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <title>Marxu's Blogs</title>
        <meta name="description" content='Writing some blogs, hope u like'/>
    </Head>
    <Layout><Component {...pageProps} /></Layout>
    </>
  )
}

export default MyApp
