var React = require('./react.js');
module.exports = React.createClass({
	getInitialState:function(){
		return {
			editing:false,
			taskdetail: this.props.task,
		}
	},

	renderTask:function(){
		return (
			<div onClick={this.edit}>{this.state.taskdetail}</div>
		)
	},

	renderEdit:function(){
		return (
			<input type='text' 
				autoFocus={true} 
				onBlur={this.finishEdit} 
				onKeyPress={this.checkEnter}
				onChange={this.changeHandler}
				value={this.state.taskdetail} />
		)
	},

	edit:function(){
		this.setState({
			editing: true,
		})
	},
	changeHandler:function(e){
		this.setState({
			taskdetail: e.target.value,
		})
	},

	checkEnter:function(e){
		if(e.key === 'Enter'){
			this.finishEdit()
		}
	},

	finishEdit:function(){
		this.setState({
			editing: false,
		})
	},

	render:function(){
		return (
			<div>
				{this.state.editing ? this.renderEdit():this.renderTask()}
			</div>
		)
	}
})