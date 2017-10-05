import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import * as fromActions from '../actions/userAction';


class ContainerApp extends React.Component {



  render() {

console.log(this.props);

    return (
      <div>
Test

      </div>
    );
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