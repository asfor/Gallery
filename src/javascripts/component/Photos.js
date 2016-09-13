var React = require('react');
var Photo = require('./Photo.js');

var Photos = React.createClass({
	clickHandle: function(index) {
		this.refs["photo_" + index].clickHandle();
	},

	cleanActiveExcept: function(index) {
		for(var photo in this.refs) {
			if(('photo_' + index) !== photo)
				this.refs[photo].resetState();
		}
	},

	render: function() {
		return (
			<div id="photos">
				{ this.props.photos.map( (photo, index) => <Photo key={index} ref={"photo_" + index} no={index} data={photo} clickHandle={this.props.clickHandle} cleanActiveExcept={this.cleanActiveExcept} /> ) }
			</div>
		);
	}
});

module.exports = Photos;
