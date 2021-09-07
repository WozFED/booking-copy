import React from "react"

export const TestGlobalContext = React.createContext()

const TestContextProvider = ({ children }) => {
    const example = 'testContext'
      return (
        <TestGlobalContext.Provider value={example}
        test = 'halo' >
            {children}
        </TestGlobalContext.Provider>
      )
    }
    
    export default TestContextProvider