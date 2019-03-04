import React, { Fragment } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Global } from '@emotion/core'
// import Header from './header'
// import Tags from './tags'
// import 'tachyons'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <Global />
        {/* <Tags title={data.site.siteMetadata.title} /> */}
        {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
        {children}
      </Fragment>
    )}
  />
)

export default Layout
