import { collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import Video from "./components/Video"
import { db } from "./firebase"

function App() {
	const [videos, setVideos] = useState([])

	useEffect(() => {
		const getVideos = async () => {
			const collectionRef = collection(db, "videos")
			const data = await getDocs(collectionRef)
			setVideos(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
		}

		getVideos()
	}, [])

	return (
		<div className="app">
			<div className="app__videos">
				{videos.map(
					({ url, channel, description, song, likes, messages, shares, id }) => (
						<Video
							url={url}
							channel={channel}
							song={song}
							likes={likes}
							messages={messages}
							description={description}
							shares={shares}
							key={id}
						/>
					)
				)}
			</div>
		</div>
	)
}

export default App
