import React from 'react'
import '../Stylesheets/Output.css'

const Output = ({message}) => {
    console.log(message.stdout);
    
  return (
    <div>
      <textarea name="" id="output" readOnly rows={50} cols={50} value={message.stdout?message.stdout:message.stderr} style={message.stderr?{color:'red'}:{color:'white'}}></textarea>
    </div>
  )
}

export default Output
