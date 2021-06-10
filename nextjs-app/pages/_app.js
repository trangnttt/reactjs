import '@/styles/globals.css'
import '@/styles/app.scss'
import Layout from '@/layouts/Layout'
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
