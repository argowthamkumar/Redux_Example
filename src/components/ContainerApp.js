import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import * as fromActions from '../actions/userAction';

import UserDetails from './UserDetails';


class ContainerApp extends React.Component {

  render() {
  //debugger;

  if(this.props.form.cats){
    let responsedata = this.props.form.cats;
    return (
          <div>
            <UserDetails user={responsedata}/>
          </div>
        );
  }else{
    return(<div></div>);
  }


  }
}

function mapStateToProps(state, ownProps){
  //  debugger;
    return {
        form : state.userReducer
    }
}

function mapDispatchToProps(dispatch){
   // debugger;
    //1. (userReducer) - Anonymous function- self invoking function without names, userReducer is passed a paramerter
    //2. call dispatch() is invoked passing Action (function) and userReducer will act as Call Function

    return {
        loadUsersSuccess : (userReducer) => dispatch(formActions.loadUsersSuccess(userReducer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerApp);



