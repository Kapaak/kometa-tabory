import { MaxWidth } from "@ui-library";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import * as S from "./VideoSection.style";

export const VideoSection = () => {
	const [hasWindow, setHasWindow] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setHasWindow(true);
		}
	}, []);
	return (
		<S.Video name="video">
			<MaxWidth>
				{hasWindow && (
					<S.VideoWrapper>
						<ReactPlayer
							url="./videos/video.mp4"
							controls
							width="100%"
							height="100%"
						/>
					</S.VideoWrapper>
				)}
			</MaxWidth>
		</S.Video>
	);
};
