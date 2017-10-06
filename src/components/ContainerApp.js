import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

import * as fromActions from '../actions/userAction';

import UserDetails from './UserDetails';


class ContainerApp extends React.Component {



  render() {

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
    return {
        form : state.catReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        loadUsersSuccess : (catReducer) => dispatch(formActions.loadUsersSuccess(catReducer))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerApp);