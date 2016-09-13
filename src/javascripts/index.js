require('../stylesheets/index.css');
var React = require('./lib/react.js');
var ReactDOM = require('./lib/react-dom.js');
var Gallery = require('./component/Gallery.js');

ReactDOM.render(
	<Gallery />,
	document.getElementById('gallery')
);