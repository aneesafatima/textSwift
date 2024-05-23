
import React, {createContext, useState} from 'react'

export const globalState = createContext();

function GlobalStateProvider({children}) {
  const [currentText, setCurrentText] = useState('');
 const [timerStatus, setTimerStatus] = useState("timer is off");
 const [status, setStatus] = useState("")
    
  return (
    <globalState.Provider value={{currentText, setCurrentText, timerStatus, setTimerStatus, setStatus, status}}>
      {children}
    </globalState.Provider>
  )
}

export default GlobalStateProvider;
