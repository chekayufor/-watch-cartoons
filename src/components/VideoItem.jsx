import React from 'react';
import styled from "styled-components";

const VideoItem = ({video, onSelectVideo}) => {
    return(
        <List>
            <Item onClick={()=> onSelectVideo(video)}>
                <Img alt='thumbnail' src={video.snippet.thumbnails.medium.url}/>
                <ItemTitle>{video.snippet.title}</ItemTitle>
            </Item>
        </List>
    )
}
export default VideoItem;

const List = styled.div`
    display: grid;
    grid-gap: 1%;
    font-size: 1.8rem;
    width:100%;
`
const Img = styled.img`
    margin-right: 2rem;
    width: 80%;
    @media (min-width: 1072px) {
        margin-right: 0;
        width:100%;
    }
`
const Item = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    cursor: pointer;
    align-items: center;
    border: coral 1px dashed;
    justify-items: start;
    background-color: #a7cdf585;
    padding: 2%;
    @media (min-width: 1072px) {
        grid-template-rows: 3fr 1fr;
        grid-template-columns: 100%;
        justify-items: center;
    }

`
const ItemTitle = styled.div`
    text-align:center;
    font-size: 1.2rem;
    @media (min-width: 1072px) {
        font-size: 2rem;
    }
`