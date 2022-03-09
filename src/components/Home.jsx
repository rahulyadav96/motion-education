import {useEffect,useState} from "react";
import { Card } from "./Card";
import axios from 'axios';
import {nanoid} from 'nanoid';
import './home.scss'
export const Home = ()=>{

    const [videos,setVideos] = useState([]);

    useEffect(()=>{
        axios.get("https://youtube.googleapis.com/youtube/v3/search?q=music%20videos&key=AIzaSyA00OxUbfdfVAjHn-9l48s0t-n_j7CBbNs&maxResults=25")
        .then(res=>{
            console.log(res.data)
            setVideos(res.data.items)
        })
        .catch(err=>{
            console.error(err)
        })
    },[])

    return (
        <>
            <div className = "video-container">
                {
                    videos?.map(video=><Card key={()=>nanoid(4)} video = {video}/>)
                }
            </div>
        </>
    )
}