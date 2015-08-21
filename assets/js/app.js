var React = require('./react.js');
var uuid = require("node-uuid");
var Notes = require("./notes");
module.exports = React.createClass({
	renderNote:function(note){
			return (
				<li key={note.id}>{note.task}</li>
			)
	},
	render:function(){
		const notes = [
			{
				id: uuid.v4(),
				task: 'learn react',
			},
			{
				id: uuid.v4(),
				task: 'learn webpack',
			},
			{
				id: uuid.v4(),
				task: 'washing clothes',
			}
		];
		return (
			<Notes items={notes}/>
		)
	}
})