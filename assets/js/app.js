var React = require('./react.js');
var uuid = require("node-uuid");
var Notes = require("./notes");
module.exports = React.createClass({
	getInitialState:function(){
		return {
			notes: [
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
			]
		}
	},
	renderNote:function(note){
			return (
				<li key={note.id}>{note.task}</li>
			)
	},
	addNote:function(){
		this.setState({
			notes: this.state.notes.concat([
				{
					id: uuid.v4(),
					task: "new task",
				}
			])
		})
	},
	render:function(){
		return (
			<div>
			<button onClick={this.addNote}>+</button>
			<Notes items={this.state.notes}/>
			</div>
		)
	}
})