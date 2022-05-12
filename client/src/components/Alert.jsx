import React from 'react'

export default function Alert(props) {
  return (
    <>
   {props.mode && <div class="alert alert-primary" role="alert">
    A simple primary alert—check it out!
    </div>}
    
    </>
  )
}
