import React from 'react';
import ColorChip from "../colorChip/colorChip";
import styles from './colorBox.module.css';

const ColorBox: React.FC<{colors: {[p: string]: Color}, lock: Function}> = ({ colors, lock }) => {
	const lockColor = (id: number, lockState: boolean) => {
		lock(id, lockState);
	}
	return (
		<div className={styles.colorBox}>
			{
				Object.keys(colors).map((k: string) => {
						return (
							<ColorChip key={colors[k].id} color={colors[k]} clickEvent={lockColor}>
							</ColorChip>
						)
				})
			}
		</div>
	);
};

export default ColorBox;