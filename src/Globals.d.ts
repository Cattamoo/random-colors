declare module "*.module.css" {
	const classes: { [key: string]: string };
	export default classes;
}

type Color = {
	id: number;
	color: string;
	lock?: boolean;
}