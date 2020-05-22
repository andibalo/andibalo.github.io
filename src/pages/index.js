import React from "react"

import { graphql } from 'gatsby'
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Layout from "../components/layout"

import SEO from "../components/seo"
import Hero from '../components/Hero'
import About from '../components/About'
import Works from '../components/Works'
import Contact from '../components/Contact'
import Experience from '../components/Experience'

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Raleway',
      'Open Sans',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

const IndexPage = ({ data }) => (
  <ThemeProvider theme={theme}>
    <Layout>
      <SEO title="Home" />
      <Hero logo={data.logo.childImageSharp.fixed} />
      <About />
      <Works />
      <Experience />
      <Contact />
    </Layout>
  </ThemeProvider>
)

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "logonew.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default IndexPage
