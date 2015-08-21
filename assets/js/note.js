var React = require('./react.js');
module.exports = React.createClass({
	render:function(){
		return (
			<div>{this.props.task}</div>
		)
	}
})