import "./card.scss"
export const Card = ({video})=>{
    console.log(video)
    return (
        <>
            <div className="videoCard">
                <iframe src={`https://www.youtube.com/embed/${video.id.videoId}`} title={video.id.videoId} allow="fullscreen">

                </iframe>

            </div>
        </>
    )
}