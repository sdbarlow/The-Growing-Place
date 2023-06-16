import '@/styles/globals.css'
import Layout from '@/components/layout/layout'
import { Fragment } from 'react'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  }

