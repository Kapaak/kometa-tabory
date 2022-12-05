import * as S from "./ChildItem.style";

interface ChildItemProps {
	name: string;
	selected: boolean;
	isOnlyChild: boolean;
	onSelect: () => void;
	onRemove: () => void;
}

export const ChildItem = ({
	name,
	selected,
	isOnlyChild,
	onSelect,
	onRemove,
}: ChildItemProps) => {
	return (
		<S.ChildItem selected={selected} onClick={onSelect}>
			<p>{name}</p>
			<S.TrashIcon
				size={25}
				weight="light"
				$selected={selected && !isOnlyChild}
				onClick={onRemove}
			/>
		</S.ChildItem>
	);
};
