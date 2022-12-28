import { MaxWidth } from "@ui-library";
import { Headline } from "components/Shared";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
// const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export const VideoSection = () => {
	const [hasWindow, setHasWindow] = useState(false);
	useEffect(() => {
		if (typeof window !== "undefined") {
			setHasWindow(true);
		}
	}, []);
	return (
		<div>
			<MaxWidth>
				<Headline>Video</Headline>
				{hasWindow && <ReactPlayer url="./videos/video.mp4" controls />}
			</MaxWidth>
		</div>
	);
};
