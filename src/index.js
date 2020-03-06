import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import './index.css';
import App from 'App';
import * as serviceWorker from 'serviceWorker';
import {BrowserRouter } from "react-router-dom";

// Import the reducer and create a store
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import UserFlowScreen from './components/UserFlowScreen';

import A from 'media/1.png';
import B from 'media/2.png';
import C from 'media/3.png';



// The types of actions that you can dispatch to modify the state of the store
export const types = {
  MOVE: "MOVE",
  CHANGE_DIMENSIONS: "CHANGE_DIMENSIONS",
  UPDATE_SCREEN: "UPDATE_SCREEN"
};

// Helper functions to dispatch actions, optionally with payloads
export const actionCreators = {
  move: screen => {
    return { type: types.MOVE, payload: screen };
  },
  changeDimensions: screen => {
    return { type: types.CHANGE_DIMENSIONS, payload: screen };
  },
  updateScreen: screen => {
    return { type: types.UPDATE_SCREEN, payload: screen };
  }
};


const initialCoordinates = {
  coordinates: [{ x :"0", y : "0"}]
};

const initialDimensions = {
  dimensions: [{ x :"1080", y: "1920"}]
};

const initialScreenAttributes = {   
   screens: [ 
     {
      id: "1", 
      type: "android_activity", 
      status: "inProgress", 
      coordinates: {x: "0", y: "0"}, 
      dimensions:{ width :"1080", height: "1920"}
    },
    {
      id: "2", 
      type: "android_fragment", 
      status: "inProgress", 
      coordinates: {x: "0", y: "0"}, 
      dimensions:{ width :"1080", height: "1920"}
    },
    {
      id: "3", 
      type: "iOS_lifecycle", 
      status: "inProgress", 
      coordinates: {x: "0", y: "0"}, 
      dimensions:{ width :"1080", height: "1920"}
    }
  ]     
};

/** 
 * Function to handle actions and update the state of the store. 
 * Notes: 
 * - The reducer must return a new state object. 
 * - It must never modify the state object. 
 * 
 * State objects should be treated as immutable.
 *  - We set \`state\` to our \`initialState\` by default. 
 * 
 * Redux will call reducer() with no state on startup, and we are expected to return the initial state of the app in this case.
 * 
 * @param state 
 * @param action 
 */
export function moveScreenReducer (state = initialCoordinates, action)  {
  const { coordinates } = state;
  const { type, payload } = action;

  // console.log('reducer', state, action);

  switch (type) {
    case types.MOVE: {
      return {
        ...state,
        coordinates: [payload, ...coordinates]
      };
    }
    default :
      return state;
  }
};

export function dimensionsReducer (state = initialDimensions, action)  {
  const { dimensions } = state;
  const { type, payload } = action;

  // console.log('reducer', state, action);

  switch (type) {
    case types.CHANGE_DIMENSIONS: {
      return {
        ...state,
        coordinates: [payload, ...dimensions]
      };
    }
    default :
      return state;
  }
};

export function screenAttributeReducer (state = initialScreenAttributes, action)  {
  const { screenAttributes } = state;
  const { type, payload } = action;

  // console.log('reducer', state, action);

  switch (type) {
    case types.UPDATE_SCREEN: {
      return {
        ...state,
        // coordinates: [payload, ...screenAttributes],
        status: payload.status, 
      };
    }
    default :
      return state;
  }
};

const reducers = combineReducers ({
  moveScreen: moveScreenReducer, 
  changeScreenDimensions : dimensionsReducer,
  screenAttributes : screenAttributeReducer
})

export const store = createStore(reducers);

// Pass the store into the Provider
const AppWithStore = (
  <Provider store={store}>
    <BrowserRouter>
      <App />    
    </BrowserRouter>
  </Provider>
)

ReactDOM.render( AppWithStore, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

