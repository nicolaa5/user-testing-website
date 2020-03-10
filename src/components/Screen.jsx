import React from 'react'
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'

import A from 'media/1.png';
import B from 'media/2.png';
import C from 'media/3.png';

const style = {
  position: 'absolute',
  cursor: 'move',
  // border: '1px dashed gray',
  // backgroundColor: 'white',
  // padding: '0.5rem 1rem',
}

const Screen = ({ id, left, top, hideSourceOnDrag, image, children }) => {

  const [{ isDragging }, drag] = useDrag({
    item: { id, left, top, type: ItemTypes.SCREEN },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  if (isDragging && hideSourceOnDrag) {
    return <div ref={drag} />
  }

  return (
    <img src={image} 
      className = "Userflow-screen" 
      ref={drag} 
      style={{ ...style, left, top }}/>
  )
}
export default Screen
