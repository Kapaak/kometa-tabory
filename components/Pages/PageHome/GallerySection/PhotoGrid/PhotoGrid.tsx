import { PhotoProps } from "../GallerySection";
import * as S from "./PhotoGrid.style";

interface PhotoGridProps {
	photos: PhotoProps[];
	onClick: (e: any) => void;
}

export const PhotoGrid = ({ photos, onClick }: PhotoGridProps) => {
	const clickHandler = (i: number) => {
		onClick(i);
	};
	return (
		<S.PhotoGrid>
			{photos.map((photo, i) => (
				<S.ImageContainer
					key={i}
					onClick={() => clickHandler(i)}
					colStart={photo?.colStart}
					colEnd={photo?.colEnd}
					rowStart={photo?.rowStart}
					rowEnd={photo?.rowEnd}
				>
					<S.Image
						alt="pepe"
						src={photo.source}
						fill
						blurDataURL={photo.source}
						placeholder="blur"
					/>
				</S.ImageContainer>
			))}
		</S.PhotoGrid>
	);
};
