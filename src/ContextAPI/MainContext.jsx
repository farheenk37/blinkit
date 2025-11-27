import React, { createContext } from 'react'
export let BlinkitContext = createContext()
export default function MainContext({children}) {
  return (
    <div>
   <BlinkitContext.Provider>
    {children}
   </BlinkitContext.Provider>
    </div>
  )
}
