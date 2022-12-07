import React, { useState } from "react";
import { UserCirclePlus } from "phosphor-react";
import { ChildItem } from "./ChildItem";
import { ChildData } from "../PagePrihlasky.interface";
import { nanoid } from "nanoid";
import * as S from "./ChildrenList.style";

const MAX_LENGTH = 4;

interface ChildrenListProps {
	activeChildren: Array<ChildData>;
	selectedChildId: string;
	onAddChild: (child: ChildData) => void;
	onSelectChild: (selected: ChildData) => void;
	onRemoveChild: (child: ChildData) => void;
}

export const ChildrenList = (props: ChildrenListProps) => {
	const {
		activeChildren,
		selectedChildId,
		onAddChild,
		onSelectChild,
		onRemoveChild,
	} = props;

	const handleChildAdd = () => {
		if (activeChildren.length < MAX_LENGTH) {
			const newChild = {
				id: nanoid(),
				name: `Dítě ${activeChildren.length + 1}`,
			};

			onAddChild(newChild);
		}
	};

	const handleChildSelect = (child: ChildData) => {
		onSelectChild(child);
	};

	return (
		<S.ChildrenList>
			<S.Button
				onClick={handleChildAdd}
				disabled={activeChildren.length === MAX_LENGTH}
			>
				<UserCirclePlus size={35} weight="light" />
				<span>Přidat další dítě (max. 4 děti)</span>
			</S.Button>
			<S.ChildContainer gap="2rem">
				{activeChildren?.map(child => (
					<ChildItem
						key={child?.id}
						name={child?.name}
						isOnlyChild={activeChildren.length === 1}
						selected={child?.id === selectedChildId}
						onSelect={() => handleChildSelect(child)}
						onRemove={() => onRemoveChild(child)}
					/>
				))}
			</S.ChildContainer>
		</S.ChildrenList>
	);
};
