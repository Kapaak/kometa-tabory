import { Variants } from "framer-motion";

export const imageVariant: Variants = {
	hidden: {
		height: "50%",
		transition: {
			duration: 0.4,
			bounce: 0,
		},
	},
	visible: {
		height: "0",
		transition: {
			duration: 0.4,
			bounce: 0,
		},
	},
};

export const ulVariant: Variants = {
	hidden: {
		display: "none",
		height: 0,
	},
	visible: {
		display: "grid",
		transition: {
			delay: 0.1,
		},
	},
};
export const textVariant: Variants = {
	hidden: {
		flex: 1,
		paddingTop: "3rem",
	},
	visible: {
		flex: 1,
		paddingTop: "8rem",
	},
};

export const labelVariant: Variants = {
	hidden: {
		top: "-5rem",
	},
	visible: {
		top: "-1rem",
		transition: {
			delay: 0.2,
			bounce: 0,
		},
	},
};
