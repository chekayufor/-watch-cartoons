import React, {useState, useEffect, useRef, useContext} from 'react';
import VideoItem from './VideoItem';
import styled from "styled-components";
import youtube from '../api/youtube';
import { Context } from "./ContextProvider";




const VideoList = ()=>{
    const [isFetching, setIsFetching] = useState(false);
    const { videos,onVideoSelect, setVideos,searchTerm } = useContext(Context);

    console.log("list", videos);
    const boxRef = useRef(null);
    const ulRef = useRef(null);

    useEffect(() => {
        boxRef.current.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (!isFetching) return;
        fetchMoreListItems(searchTerm);
    }, [isFetching]);

    const fetchMoreListItems = async (searchTerm) => {
        const response = await youtube.get('search', {  
            params: {
                part: 'snippet',
                maxResults: 10,
                key: 'AIzaSyCUK46ZJXTBT5LuvSyv9a8l4X32WkZIa2M',
                q:searchTerm,
            }
        }); 
        console.log(response.data.items);
        setVideos(prevState => [
            ...prevState,
            ...Array.from(response.data.items)
            ]);
            setIsFetching(false);
    }

    function handleScroll() {
        const boxHeight = boxRef.current.getBoundingClientRect().height;
        const ulHeight = ulRef.current.getBoundingClientRect().height;
        const boxScroll = boxRef.current.scrollTop;
        const bottom = ulHeight - boxHeight - boxScroll;
        // console.log("bottom: ", bottom);

        if (bottom > 5 || isFetching) return;

        console.log("Fetch more list items!");

        setIsFetching(true);
    }



    const listOfVideos = videos.slice(1,videos.length).map((video, id) => <VideoItem  onSelectVideo={onVideoSelect} key={id}  video ={video}/>)
    return (
        
        <List  ref = {boxRef} container spacing={10}>
            <ul ref = {ulRef}>
                {listOfVideos}
            </ul>
        </List>
    );
}
export default VideoList;

const List = styled.div`
    background: oldlace;
    max-height: 100vh;
    height: 100%;
    width: 100%;
    border-radius: 0.4rem;
    overflow-y: scroll;
    box-shadow: 0 0.2rem 0.8rem dimgrey;
    min-height: 320px;
`