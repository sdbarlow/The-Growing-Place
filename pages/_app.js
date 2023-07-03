import '@/styles/globals.css'
import Layout from '@/components/layout/layout'
import '@fontsource/sniglet'
import '@fontsource/concert-one'
import { Fragment } from 'react'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  }

