// import '@/styles/globals.css'
import '@/styles/app.scss'
import Layout from '@/layouts/Layout'
import AuthProvider from '@/contexts/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

export default MyApp
