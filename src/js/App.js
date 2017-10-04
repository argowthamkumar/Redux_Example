import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReduxDemo from './ReduxDemo';

class App extends Component {
render(){

return(
<div className="App">

<div className="App-Header">

Welcome to React
</div>
<ReduxDemo/>
</div>
);
}
}

ReactDOM.render(<App/>, document.getElementById('app'));
