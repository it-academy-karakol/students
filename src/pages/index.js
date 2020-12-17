import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Link to="/github/group-2020-1">2020 Group #1</Link> <br />
    <Link to="/github/group-2020-2">2020 Group #2</Link>
  </Layout>
)

export default IndexPage
