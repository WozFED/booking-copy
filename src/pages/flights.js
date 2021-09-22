import { FormattedMessage } from "gatsby-plugin-intl"
import * as React from "react"
import Layout from "../components/Layout"

const FlightsPage = () => {
  return (
    <Layout>
     <div style = {{height: '100vw'}}> 
      <FormattedMessage id="build" />
      </div>
    </Layout>
  )
}

export default FlightsPage
