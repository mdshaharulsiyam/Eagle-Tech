import React, { createContext } from 'react'
export const EpicTechSpotContext = createContext(null)
const Context = ({children}) => {
    const contextData = {
       
      }
      return (
        <EpicTechSpotContext.Provider value={contextData}>
          {children}
        </EpicTechSpotContext.Provider>
      )
}

export default Context
