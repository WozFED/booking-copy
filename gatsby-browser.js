import React from "react"
import GlobalContextProvider from "./src/context/context"
import TestContextProvider from "./src/context/test"

export const wrapRootElement = ({ element }) => {
  return <TestContextProvider><GlobalContextProvider>{element}</GlobalContextProvider></TestContextProvider>
}