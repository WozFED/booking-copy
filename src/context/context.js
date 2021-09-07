import React, {useState} from "react"
import produce from "immer"
export const GlobalStateContext = React.createContext({
  isChecked: [false, false, false],
  setIsChecked: () => {},
  arrFil: [],
  setArrFil: () => {},
  inputFunction: () => {},
})
export const GlobalDispatchContext = React.createContext()



const GlobalContextProvider = ({ children }) => {
  const something = 'lklol'
  return (
    <GlobalStateContext.Provider  >
      <GlobalDispatchContext.Provider   >
        {children}
      </GlobalDispatchContext.Provider>
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider