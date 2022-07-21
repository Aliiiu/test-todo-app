import React from 'react';
import styles from './todoCard.module.css';

const TodoCard = (props) => {
	return <div className={styles.card}>{props.children}</div>;
};

export default TodoCard;
