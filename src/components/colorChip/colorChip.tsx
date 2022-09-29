import React, {ReactNode} from 'react';
import styles from './colorChip.module.css';

const ColorChip: React.FC<{
	color: Color,
	clickEvent?: Function,
	children?: ReactNode | undefined
}> = ({
	color,
	clickEvent,
	children
}) => {
	const clickHandler = () => {
		clickEvent && clickEvent(color.id, !color.lock);
	}
	return (
		<div
			className={`${styles.colorChip} ${color.lock && styles.lock}`}
			style={{ backgroundColor: color.color }}
			onClick={clickHandler}>
			{ color.lock && color.color }
			{ children || '' }
		</div>
	);
};

export default ColorChip;