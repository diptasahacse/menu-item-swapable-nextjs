import React from 'react'
import Nav from './Nav'

const Layouts = ({children}) => {
  return (
    <div>
        <Nav/>
        {
            children
        }
    </div>
  )
}

export default Layouts