import React, { useContext }  from 'react'
import UserContext from '../Context/Usercontext';

function Comp1() {

    const text = useContext(UserContext)
    console.log(text);

  return (
    <div>
      
    </div>
  )
}

export default Comp1
