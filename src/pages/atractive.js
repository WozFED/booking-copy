import * as React from "react"
import Layout from "../components/Layout"
import { FormattedMessage } from "gatsby-plugin-intl"

const AttractivePage = () => {
  return (
    <Layout>
      <div style = {{height: '100vw'}}> 
      <FormattedMessage id="build" />
      </div>
    </Layout>
  )
}

export default AttractivePage
