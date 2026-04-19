import video from "../../../../assets//video.png"
import "./Video.css"
const Video = () => {
    return (
        <div>
            <h1 className="title">Видео о клинике</h1>
            <img src={video} className="video-img" alt="img" />
        </div>
    )
}

export default Video