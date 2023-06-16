import React from 'react'
import { Fragment } from 'react'
import Header from './header'

function Layout(props) {
    console.log(props.children)
  return (
    <Fragment>
        <Header></Header>
        <main>
            {props.children}
        </main>
    </Fragment>
  )
}

export default Layout