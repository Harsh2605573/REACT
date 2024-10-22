import React, { useState } from 'react'
import Usercontext from './Usercontext'

function Userprovider({children}) {

const [text , setText] = useState('Harsh')

  return (
    <Usercontext.Provider value={text}>
        {children}
    </Usercontext.Provider>
  )
}

export default Userprovider
