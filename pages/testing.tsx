import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const textMotion = {
	rest: {
		color: "grey",
		x: 0,
		transition: {
			duration: 2,
			type: "tween",
			ease: "easeIn",
		},
	},
	hover: {
		color: "blue",
		x: 30,
		transition: {
			duration: 0.4,
			type: "tween",
			ease: "easeOut",
		},
	},
};

const textVariant = {
	rest: { duration: 0.2, type: "tween", backgroundColor: "#ff7f50" },
	hover: {
		backgroundColor: "#9e8beb",
		// height: "100%",
		transition: {
			duration: 0.4,
			type: "tween",
			ease: "easeIn",
		},
	},
};

const imgVariant = {
	rest: {
		height: "4rem",
	},
	hover: {
		height: "0rem",
		padding: "0rem",
		overflow: "hidden",
		transition: {
			duration: 0.4,
			type: "tween",
			ease: "easeIn",
		},
	},
};

const Testing = () => {
	return (
		<motion.div>
			<h1>testovaci stranka</h1>
			<ParentElement initial="rest" whileHover="hover" animate="rest">
				<ImageElement variants={imgVariant}>image</ImageElement>

				<TextElement variants={textVariant}>
					<h3>this is a child</h3>
					<p>one</p>
					<p>two</p>
					<p>three</p>
				</TextElement>
			</ParentElement>
		</motion.div>
	);
};

const TextElement = styled(motion.div)`
	padding: 1rem;
`;

const ParentElement = styled(motion.div)`
	width: 20rem;
	margin: 0 auto;
	border-radius: 1rem;
	overflow: hidden;
`;

const ImageElement = styled(motion.div)`
	background: yellow;
	padding: 1rem;
`;

export default Testing;
