import {useEffect,useState} from "react";
import { card } from "./card";

export const Home = ()=>{

    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        axios.get("https://youtube.googleapis.com/youtube/v3/search?q=popular%20videos&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25")
        .then(res=>{
            console.log(res.data)
        })
        .catch(err=>{
            console.error(err)
        })
    },[])

    return (
        <>
            <div className = "video-container">
                {
                    videos?.map(video=><card  video = {video}/>)
                }
            </div>
        </>
    )
}