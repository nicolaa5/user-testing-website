import * as React from 'react'
import { useState } from 'react'
import { useDrop, XYCoord } from 'react-dnd'
import ItemTypes from './ItemTypes'
import Screen from './Screen'
import update from 'immutability-helper'
import { DragItem } from './interfaces'

import A from '../media/1.png';
import B from '../media/2.png';
import C from '../media/3.png';

const styles : React.CSSProperties = {
  width: 800,
  height: 600,
  position: 'relative',
  // border: '1px solid black',
}

export interface ContainerProps {
  hideSourceOnDrag: boolean
}

export interface ScreenState {
  [key: string]: {
     top: number; 
     left: number;
     image : string;
    } 
}



const UserFlowContainer : React.FC<ContainerProps> = ({hideSourceOnDrag}) => {  
  const [screens, setScreens] = useState<ScreenState>({
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
    drop(item: DragItem, monitor : any) {
      const delta = monitor.getDifferenceFromInitialOffset() as XYCoord
      const left = Math.round(item.left + delta.x)
      const top = Math.round(item.top + delta.y)
      moveScreen(item.id, left, top)
      return undefined
    },
  })

  const moveScreen = (id: string, left: number, top: number) => {
    setScreens(
      update(screens, {
        [id]: {
          $merge: { left, top },
        },
      }),
    )
  }
  
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
            hideSourceOnDrag={hideSourceOnDrag}
            image = {image}
          />
        )
      })}
    </div>
  )
}
export default UserFlowContainer
