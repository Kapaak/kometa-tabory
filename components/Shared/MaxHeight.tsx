import { dimensions } from "@/utils";
import { useEffect, useState } from "react";
import { measureHeight } from "react-div-100vh";
import styled, { css } from "styled-components";

interface Props {
	children: React.ReactNode;
	$gradient?: boolean;
}
//todo -> make it styleable like SectionElement using className, so that donthav eto pass the gradient prop and can style it anywhere
export const MaxHeight = ({ children, $gradient = false }: Props) => {
	const [fixedHeight, setFixedHeight] = useState(0);

	useEffect(() => {
		//@ts-ignore
		measureHeight() && setFixedHeight(measureHeight);
	}, [measureHeight]);

	//co pridat useHeight() a tim vyresit to initial a ulozit to do promenne
	//ale useEffect by pres jinou promennout nastavil maxHeight ... tim by se pak mozna vynulovalo skakani
	// const height = use100vh()!;
	return (
		<SMaxHeight $gradient={$gradient} height={fixedHeight}>
			{children}
		</SMaxHeight>
	);
};

const SMaxHeight = styled.div<{ $gradient: boolean; height: number }>`
	position: relative;
	height: ${({ height }) =>
		height ? `calc(${height}px - var(--header-height))` : "100vh"};
	max-height: calc(100vh - var(--header-height));
	transition: all 0.2s linear;

	background: ${({ $gradient }) =>
		$gradient
			? `linear-gradient(266.41deg, rgba(33, 114, 221, 0.8) -2.58%, rgba(33, 114, 221, 0.16) -2.57%, rgba(115, 240, 192, 0.8) 100.35%)`
			: "unset"};

	${({ $gradient }) =>
		$gradient &&
		css`
			@media (${dimensions.notebook}) {
				transition: none;
				border-radius: 2rem;
				min-height: 40rem;
				height: calc(100vh - var(--header-height) - 12rem);
				background: linear-gradient(
					266.41deg,
					rgba(33, 114, 221, 0.8) -2.58%,
					rgba(33, 114, 221, 0.16) -2.57%,
					rgba(115, 240, 192, 0.8) 100.35%
				);
			}
		`}
`;
