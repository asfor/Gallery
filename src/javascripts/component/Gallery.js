var React = require('react');
var Photos = require('./Photos.js');
var Nav = require('./Nav.js');

var Gallery = React.createClass({
	componentWillMount: function() {
		var data = require('../data.js');

		this.setState({
			loading: false,
			data: data
		});
	},

	componentDidMount: function() {
		setTimeout(() => {this.clickHandle(Math.floor(Math.random() * this.state.data.length))}, 500);
	},

	clickHandle: function(index) {
		this.refs.photos.clickHandle(index);
		this.refs.nav.clickHandle(index);
	},

	getInitialState: function() {
		return {
			loading: true,
			error: null,
			data: null
		};
	},

	render: function() {
		if(this.state.loading) {
			//加载数据中
			return(
				<div>loading...</div>
			);
		} else {
			if(this.state.error) {
				//出错
				return(
					<div>{this.state.error.value}</div>
				);
			} else {
				//加载完毕
				return (
					<div>
						<Photos ref="photos" photos={this.state.data} clickHandle={this.clickHandle} />
						<Nav ref="nav" photos={this.state.data} clickHandle={this.clickHandle} />
					</div>
				);
			}
		}
	}
});

module.exports = Gallery;
