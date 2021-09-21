import React from "react"
import Layout from "../components/Layout"
import { FormattedMessage } from "gatsby-plugin-intl"

const Taxi = ({ data }) => {

  return (
    <Layout>
      <div className = "homepage">

      <FormattedMessage id="build" />
      </div>
    </Layout>
  )
}

export default Taxi
