import React, { useState } from "react"

export const GlobalStateContext = React.createContext()

const GlobalContextProvider = ({ children }) => {
  const [click, setClick] = useState(0)
  return (
    <GlobalStateContext.Provider value={{ click, setClick }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
