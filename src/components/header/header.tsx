import React from 'react';

import styles from './header.module.css';

const Header: React.FC<{ random: Function }> = ({ random }) => {
	const clickHandler = () => {
		random();
	}
	return (
		<header className={styles.header}>
			<span className={styles.random} onClick={clickHandler}>🎨</span>
		</header>
	);
};

export default Header;