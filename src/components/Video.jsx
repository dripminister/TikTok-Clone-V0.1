import React, { useState, useRef } from "react"
import VideoFooter from "./VideoFooter"
import VideoSidebar from "./VideoSidebar"
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Video({
	url,
	channel,
	description,
	song,
	likes,
	messages,
	shares
}) {
	const [playing, setPlaying] = useState(false)
	const videoRef = useRef(null)

	const onVideoPress = () => {
		if (playing) {
			videoRef.current.pause()
			setPlaying(false)
		} else {
			videoRef.current.play()
			setPlaying(true)
		}
	}

	return (
		<div className="video">
			<video
				className="video__player"
				loop
				ref={videoRef}
				onClick={onVideoPress}
				src={url}
			></video>
			<VideoFooter
				channel={channel}
				description={description}
				song={song}
			/>
			<VideoSidebar
				likes={likes}
				messages={messages}
				shares={shares}
			/>
			{!playing && (
				<PlayArrowIcon
					onClick={onVideoPress}
					className="video__icon"
				/>
			)}
		</div>
	)
}
