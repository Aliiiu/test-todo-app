import React, { CSSProperties } from 'react';
import ListItem from '../TodoListItem/ListItem';
import styles from './todoList.module.css';
import BounceLoader from 'react-spinners/BounceLoader';
import ClipLoader from 'react-spinners/ClipLoader';

// const override: CSSProperties = {
// 	display: 'block',
// 	margin: '0 auto',
// 	borderColor: 'red',
// };

const TodoList = (props) => {
	// console.log(props.todoList);
	const onDelete = (id) => {
		props.onDelete(id);
	};
	const onToggle = (id, done) => {
		props.onCompleted(id, done);
	};
	return (
		<div>
			<ul className={styles.todoList}>
				{props.todoList.length > 0 ? (
					props.todoList.map((item) => {
						// console.log(idx);
						return (
							<ListItem
								key={item.id}
								id={item.id}
								item={item.title}
								onCompleted={onToggle}
								done={item.completed}
								onDelete={onDelete}
							/>
						);
					})
				) : (
					<div className={styles.loader}>
						<BounceLoader color={'#8D1FEE'} loading={props.loader} size={150} />
					</div>
				)}
			</ul>
		</div>
	);
};

export default TodoList;
