import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import update from 'immutability-helper'
import ItemTypes from './ItemTypes'
import Screen from './Screen'

import A from 'media/1.png';
import B from 'media/2.png';
import C from 'media/3.png';

const styles = {
  width: 800,
  height: 600,
  position: 'relative',
  // border: '1px solid black',
}
const UserFlowContainer = () => {
  
  const [screens, setScreens] = useState({
    a: { top: 20,
         left: 80, 
         image: A  
      },
    b: { 
        top: 180, 
        left: 280, 
        image: B 
      },
    c: {
        top: 180, 
        left: 20,
        id: "3", 
        type: "iOS_lifecycle", 
        status: "inProgress", 
        coordinates: {x: "0", y: "0"}, 
        dimensions:{ width :"1080", height: "1920"},
        image: C
      }
  });

  /**
   * A hook for implementing a droppable area 
   * @note: First argument is missing because there is no variable/state to update
   */
  const [, drop] = useDrop({
    accept: ItemTypes.SCREEN,
    drop(item, monitor) {
      const delta = monitor.getDifferenceFromInitialOffset()
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveScreen(item.id, left, top)
      return undefined
    },
  });

  const moveScreen = (id, left, top) => {
    setScreens(
      update(screens, {
        [id]: {
          $merge: { left, top },
        },
      }),
    )
  };
  
  return (
    <div ref={drop} style={styles}>
      {Object.keys(screens).map(key => {
        const { left, top, image } = screens[key]
        return (
          <Screen
            key={key}
            id={key}
            left={left}
            top={top}
            hideSourceOnDrag={true}
            image = {image}
          />
        )
      })}
    </div>
  )
}
export default UserFlowContainer
