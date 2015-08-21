var React = require('./react.js');
var Hello = require('./Hello');
var App = require('./app');
var Footer = require('./footer');

module.exports = React.createClass({
	render:function(){
		return (
			<div>
				<Hello name="Notes" />
				<App />
				<Footer name="Facebook React" />
			</div>
		)
	}
})
