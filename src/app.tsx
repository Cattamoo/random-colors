import React, {useState} from 'react';
import './app.css';
import ColorBox from "./components/colorBox/colorBox";
import Header from "./components/header/header";

function App() {
	const [colors, setColors] = useState<{[p: string]: Color}>({
		1: { id: 1, color: '#ffaaaa', lock: false },
		2: { id: 2, color: '#ffeeaa', lock: false },
		3: { id: 3, color: '#ff77aa', lock: false },
		4: { id: 4, color: '#aa77aa', lock: false },
		5: { id: 5, color: '#aaaaff', lock: false }
	});
	const lockColor = (id: number, lock: boolean) => {
		setColors(colors => {
			const target = colors[id];
			target.lock = lock;
			return { ...colors, [id]: target };
		});
	}
	const changeColor = (id: number, color: string) => {
		setColors(colors => {
			const target = colors[id];
			target.color = color;
			return { ...colors, [id]: target };
		});
	}
	const getRandomColor = () => {
		const R = Math.floor(Math.random() * 255);
		const G = Math.floor(Math.random() * 255);
		const B = Math.floor(Math.random() * 255);
		return `#${R.toString(16).padStart(2,'0')}${G.toString(16).padStart(2,'0')}${B.toString(16).padStart(2,'0')}`;
	}
	const random = () => {
		Object.keys(colors).forEach((k) => {
			if(!colors[k].lock) {
				const randColor:string = getRandomColor()
				changeColor(colors[k].id, randColor);
			}
		})
	}
	return (
		<div className="app">
			<Header random={random} />
			<ColorBox colors={colors} lock={lockColor} />
		</div>
	);
}

export default App;
