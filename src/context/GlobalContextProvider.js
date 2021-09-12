import React, { useState } from "react"

export const GlobalStateContext = React.createContext()

const GlobalContextProvider = ({ children }) => {
  const [windowLoc, setWindowLoc] = useState(0)
  return (
    <GlobalStateContext.Provider value={{ windowLoc, setWindowLoc }}>
      {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider
