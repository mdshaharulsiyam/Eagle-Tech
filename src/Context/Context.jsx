import React, { createContext } from 'react'
export const EagleTechSpotContext = createContext(null)
const Context = ({children}) => {
  const host  = "http://localhost:5000"
    const contextData = {
      host
      }
      return (
        <EagleTechSpotContext.Provider value={contextData}>
          {children}
        </EagleTechSpotContext.Provider>
      )
}

export default Context
