var React = require('react');
var NavBtn = require('./NavBtn.js');

var Nav = React.createClass({
	clickHandle: function(index) {
		this.refs['btn_' + index].clickHandle();
	},

	cleanActiveExcept: function(index) {
		for(var btn in this.refs) {
			if(('btn_' + index) !== btn)
				this.refs[btn].cleanClass();
		}
	},

	render: function() {
		return (
			<nav id="nav">
				{ this.props.photos.map( (photo, index) => <NavBtn key={index} ref={"btn_" + index} no={index} clickHandle={this.props.clickHandle} cleanActiveExcept={this.cleanActiveExcept}></NavBtn> ) }
			</nav>
		);
	}
});

module.exports = Nav;
