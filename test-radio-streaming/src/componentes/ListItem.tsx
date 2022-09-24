import React from 'react'
import { Radio } from './List'

type listItemProps = {
    radio:Radio;
}

const ListItem = ({radio}:listItemProps)=> {
  return (
 
    <li>{ radio.name }</li>
  )
}
export default ListItem