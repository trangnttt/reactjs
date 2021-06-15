import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      
      <Header />
      <p>Hello world!</p>
    </>
  )
}
