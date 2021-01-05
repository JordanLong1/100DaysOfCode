import React, {useContext} from 'react'
import {NameContext} from './App'



export default function ChildTwo() {
  const name = useContext(NameContext)
  return (
    <div>
      <h1>{name} from child 2</h1>
     </div>
  )
}