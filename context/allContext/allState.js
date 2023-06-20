import React, { useState } from 'react'
import AllContext from './allContext'

function allState(props) {
    const [mode, setMode] = useState('dark'); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
    }
    else {
      setMode('light');
    }
  }
  return (
    <AllContext.Provider value={{mode ,toggleMode}}>
        {props.children}
    </AllContext.Provider>
  )
}

export default allState