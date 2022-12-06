import React from "react"
import MusicNoteIcon from "@mui/icons-material/MusicNote"

export default function VideoFooter({ channel, description, song }) {
	return (
		<div className="videoFooter">
			<div className="videoFooter__text">
				<h3>@{channel}</h3>
				<p>{description}</p>
				<div className="videoFooter__ticker">
					<MusicNoteIcon className="videoFooter__icon" />
					<p className="ticker">{song}</p>
				</div>
			</div>
			<img
				className="videoFooter__record"
				src="https://static.thenounproject.com/png/934821-200.png"
				alt="disc"
			/>
		</div>
	)
}
