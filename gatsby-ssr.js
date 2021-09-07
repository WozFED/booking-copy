const React = require("react")
const GlobalContextProvider = require("./src/context/context")

  .default
const TestContextProvider = require("./src/context/test")
  .default

exports.wrapRootElement = ({ element }) => {

  return <TestContextProvider><GlobalContextProvider>{element}</GlobalContextProvider></TestContextProvider>
}