import React from 'react';
import CrossIcon from '../../icons/cross';
import styles from '../../styles/listItem.module.css';

const ListItem = (props) => {
	const deleteHandler = (id) => {
		props.onDelete(id);
		// console.log(props.id);
	};

	const toggleCompleted = (id, done) => {
		props.onCompleted(id, done);
	};
	return (
		<div>
			<li className={styles.list__item} key={props.id}>
				<input
					type='checkbox'
					checked={props.done}
					onChange={(e) => toggleCompleted(props.id, e.target.checked)}
					className={styles.checkbox}
				/>
				<p className={props.done ? styles.done : styles.list__content}>
					{props.item}
				</p>
				<button
					className={styles.delete}
					type='button'
					onClick={() => deleteHandler(props.id)}
				>
					<CrossIcon />
				</button>
			</li>
		</div>
	);
};

export default ListItem;
