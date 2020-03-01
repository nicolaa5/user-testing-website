import React from 'react';

import {store} from 'index.js'
import {actionCreators} from 'index.js'
import { connect } from 'react-redux'

export default class UserFlowScreen extends React.Component {
    
    onMoveScreen = (index) => {    
        store.dispatch(actionCreators.move(index))
    }

    render () {
        return (<img className= {this.props.className} alt="cover" src= {this.props.source}/> );
    }
}