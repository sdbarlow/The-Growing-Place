import '@/styles/globals.css'
import Layout from '@/components/layout/layout'
import '@fontsource/sniglet'
import '@fontsource/concert-one'
import { Fragment } from 'react'
import { ApplicationPageContextProvider } from '@/store/application-context'

export default function App({ Component, pageProps }) {
  return (
    <ApplicationPageContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApplicationPageContextProvider>
  )
  }

