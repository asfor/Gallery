var React = require('react');

var Photo = React.createClass({
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
			className += ' active';
			this.props.cleanActiveExcept(this.props.no);
			this.activeState();
		}

		this.setState({className: className});
	},

	resetState: function() {
		do { var left = Math.floor(Math.random() * 100); }
		while(left < 70 && left > 30)

		this.setState({
			className: "photo",
			rotate: Math.floor(Math.random() * 360) - 180,
			scale: 0.8,
			top: Math.floor(Math.random() * 100),
			left: left,
			zIndex: 0
		});
	},

	activeState: function() {
		this.setState({
			className: "photo",
			rotate: 0,
			scale: 1,
			top: 50,
			left: 50,
			zIndex: 1
		});
	},

	getInitialState: function() {
		return {
			className: "photo",
			rotate: 0,
			scale: 0.8,
			top: 50,
			left: 50,
			zIndex: 0
		};
	},

	render: function() {
		var position = {
			transform: `rotate(${this.state.rotate}deg) scale(${this.state.scale})`,
			top: this.state.top + '%',
			left: this.state.left + '%',
			zIndex: this.state.zIndex
		};

		return (
			<div className={this.state.className} style={position} onClick={this.props.clickHandle.bind(null, this.props.no)}>
				<div className="front">
					<p className="img">
						<img src={this.props.data.url} />
					</p>

					<h4>{this.props.data.title}</h4>
				</div>

				<p className="back">
					{this.props.data.description}
				</p>

				<div className="background"></div>
			</div>
		);
	}
});

module.exports = Photo;
