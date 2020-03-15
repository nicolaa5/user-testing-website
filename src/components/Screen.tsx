import * as React  from 'react';
import { useState, useEffect } from 'react';
import { useDrag } from 'react-dnd'
import ItemTypes from './ItemTypes'

/**
 * Redux objects
 */
import {store} from '../index'
import { connect } from 'react-redux'

const style : React.CSSProperties = {
  position: 'absolute',
  cursor: 'move',
  // border: '1px dashed gray',
  // backgroundColor: 'white',
  // padding: '0.5rem 1rem',
}

export interface ScreenProps {
  id: any
  left: number
  top: number
  image : string
  hideSourceOnDrag?: boolean
}

const Screen : React.FC<ScreenProps> = ({ id, left, top, hideSourceOnDrag, image, children }) => {

  useEffect(() => {
    
  });

  /**
   * Hook that is triggered for each frame that an element is dragged
   */
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

/**
 * Maps the state to the component's props 
 * @param {*} store : provides access to the app's redux store
 */
const mapStateToProps = (store : any) => ({
  dimensions: store.changeScreenDimensions.dimensions,
  coordinates: store.moveScreen.coordinates,
  screens: store.screenAttributes.screens
})

/**
 * The connect() function connects a React component to a Redux store.
 */
export default connect(mapStateToProps)(Screen)
