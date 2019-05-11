import React from 'react';
import "./Todo.css"

const Todos = ({todos, deleteTodo}) => {
	//Check Length for how many todo Left
	const todoList = todos.length ? (
		todos.map(todo => {
			return (
				<div classname="todo-app" key={todo.id}> 
					<span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
				</div>
			)
		})
		) : (
		//If all todo are done say this
		<div classname="msg">
			<p> Congrats!, Semua prioritasmu telah selesai. </p> 
		</div>
	)
	//If there is a todo, say this
	return (
		<div classname="todo-app list"> 
			{todoList} 
		</div>
	)
}

export default Todos;