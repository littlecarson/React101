import React from 'react';
import { PropTypes } from 'prop-types'
import Hobby from './Hobby.jsx';

const propTypes = {
	name: PropTypes.string.isRequired,
	age: PropTypes.number.isRequired,
}

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			liked: 0,
			hobbies: ['skateboarding', 'rock music'],
		};
		this.likedCallback = this.likedCallback.bind(this);
		this.addHobbyCallback = this.addHobbyCallback.bind(this);
	}
	likedCallback() {
		let liked = this.state.liked;
		liked++;
		this.setState({
			liked
		});
	}
	addHobbyCallback() {
		let hobbyInput = this.refs.hobby;
		let val = hobbyInput.value;
		if (val) {
			let hobbies = this.state.hobbies;
			hobbies = [...hobbies, val];
			this.setState({
				hobbies
			}, () => {
				hobbyInput.value = '';
			});
		}
	}
	render() {
		return (
			<div>
				<h1>我的名字是 {this.props.name}</h1>
				<h2>我今年 {this.props.age}</h2>
				<button onClick={this.likedCallback}>给我点赞</button>
				<h3>总点赞数：{this.state.liked}</h3>
				<h3>我的爱好：</h3>
				<ul>
					{this.state.hobbies.map((hobby, i) => <Hobby key={i} hobby={hobby}/>)}
				</ul>
				<input type="text" ref="hobby" />
				<button onClick={this.addHobbyCallback}> 添加爱好 </button>
			</div>
		);
	}
	componentDidMount() {
		setTimeout(() => {
			this.likedCallback();
		}, 3000);
	}
}

Profile.propTypes = propTypes;

export default Profile;
