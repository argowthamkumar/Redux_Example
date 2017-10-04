import React, {Component} from 'react';
import { createStore } from 'redux';

class ReduxDemo extends Component{

render (){
//Step 2: Reducer state n action
const reducer = function(state, action){
if(action.type == "ATTACK"){
return action.abc
}
if(action.type == "GREENATTACK"){
return action.payload
}
return state;
}

//Step1: Create Store : reducer and state
const store = createStore(reducer,"Peace");

//Step 3: Subscribe

store.subscribe( () => {
console.log("Store is now " , store.getState());
} )

//Step 4: Dispatch Action
store.dispatch({type:"ATTACK", abc:"Iron Man"})
store.dispatch({type:"GREENATTACK", payload:"HULK"})

return (
<div>
test
</div>
);

}
}
export default ReduxDemo;