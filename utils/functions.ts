import { scroller } from "react-scroll";

export const scrollTo = (destination: string) => {
	scroller.scrollTo(destination, { smooth: true, offset: -100 });
};

export const isEven = (num: number) => {
	return num % 2 === 0;
};

export const delay = (callback: () => void, delayInMs?: number) =>
	new Promise<void>(resolve =>
		setTimeout(() => {
			callback();
			resolve();
		}, delayInMs ?? 500)
	);
