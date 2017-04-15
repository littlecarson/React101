import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Profile from './components/Profile';


const Carlsiry = { name: 'Carlsiry', age: 18};
class App extends React.Component {
	render() {
	  return (
	  	<AppContainer>
	  		<div>
		      <h1>Hello, Carlsiry</h1>
		      <h2>It is {new Date().toLocaleTimeString()}.</h2>
		      <Welcome name="Carlsiry"/>
		      <Profile {...Carlsiry} />
	  		</div>
	  	</AppContainer>
	  );
	}
}

function Welcome(props) {
	return <h1>Hello, {props.name}</h1>
}

const app = document.createElement('div');
document.body.appendChild(app);
setInterval(tick, 1000);

function tick() {
	ReactDOM.render(<App />, app);
}
