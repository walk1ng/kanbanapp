var React = require('./react.js');
var Note = require('./note');
module.exports = React.createClass({
	renderNote:function(note){
		return (
			<li className="note" key={note.id}>
				<Note task={note.task}/>
			</li>
		)
	},
	render:function(){
		return (
			<ul className="notes">{this.props.items.map(this.renderNote)}</ul>
		)
	}
})