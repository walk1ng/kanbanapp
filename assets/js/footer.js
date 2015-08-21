var React = require("./react.js");
module.exports = React.createClass({
	render:function(){
		return (
			<p>Powered by {this.props.name}</p>
		)
	}
});