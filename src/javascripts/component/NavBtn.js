var React = require('react');

var NavBtn = React.createClass({
	clickHandle: function() {
		var className = this.state.className;
		var isActive = /\s*active\s*/;
		var isTurn = /\s*turn\s*/;

		if(isActive.test(className)) {
			if(isTurn.test(className)) {
				className = className.replace(isTurn, '');
			} else {
				className += ' turn';
			}
		} else {
			className += 'active';
			this.props.cleanActiveExcept(this.props.no);
		}

		this.setState({className: className});
	},

	cleanClass: function() {
		this.setState({className: ''});
	},

	getInitialState: function() {
		return {
			className: ''
		};
	},

	render: function() {
		return (
			<span className={this.state.className} onClick={() => {this.props.clickHandle(this.props.no);}}></span>
		);
	}
});

module.exports = NavBtn;
