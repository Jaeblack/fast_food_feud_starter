import * as React from "react"
import "./Chip.css"

export function Chip({ label = "", isActive = false, handleClick}) {

  let buttonClassName = isActive? "chip active" : "chip";
  //console.log('the cunfion', handleClick)

  return (
    <button className={buttonClassName} onClick = {()=>handleClick(label)} >
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
