import React, { useState } from 'react';
// import styles from './todoForm.module.css';
import styles from '../../styles/todoForm.module.css';

const TodoForm = (props) => {
	const [enteredTodo, setEnteredTodo] = useState('');

	const inputChangeHandler = (event) => {
		setEnteredTodo(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();
		props.onAddTodo(enteredTodo);
		setEnteredTodo('');
	};
	return (
		<div>
			<form onSubmit={submitHandler} className={styles.todoform}>
				<input
					type={'text'}
					className={styles.input}
					onChange={inputChangeHandler}
					value={enteredTodo}
					placeholder='Add a new task'
				/>
				<button className={styles.button} type='submit'>
					Add Todo
				</button>
			</form>
		</div>
	);
};

export default TodoForm;
