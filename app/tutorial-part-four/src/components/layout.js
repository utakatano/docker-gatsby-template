import React from "react"
import { css } from "@emotion/react"
import { useStaticQuery, Link, graphql } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )

  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 700px;
      `}
    >
      <Link to={'/'}>
        <h3
          css={css`
            display: inline-block;
            font-size: normal;
          `}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>

      <Link
        to={'/about/'}
        css={css`
          float: right;
        `}
      >
        About
      </Link>
      {children}
    </div>
  )
}