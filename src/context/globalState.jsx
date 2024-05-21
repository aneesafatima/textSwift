
import React, {createContext, useState} from 'react'

export const globalState = createContext();
function GlobalStateProvider({children}) {
  const [currentText, setCurrentText] = useState('')
  const [timerStatus, setTimerStatus] = useState("timer is off")
    
  return (
    <globalState.Provider value={{currentText, setCurrentText, timerStatus, setTimerStatus}}>
      {children}
    </globalState.Provider>
  )
}

export default GlobalStateProvider;
