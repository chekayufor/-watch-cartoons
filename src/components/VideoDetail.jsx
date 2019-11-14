import React, {useContext} from 'react';
import styled from "styled-components";
import { Context } from "./ContextProvider";



const VideoDetail = ()=>{
    const { selectedVideo } = useContext(Context);

    if(!selectedVideo) return <div>Loading...</div>
    

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
    return(
        <Container>
            <VideoContainer>
                <Iframe  title='video player' src={videoSrc} allowFullScreen frameBorder="0"/>
            </VideoContainer>
            <ContentTitle>
                <h4>{selectedVideo.snippet.title} - {selectedVideo.snippet.channelTitle }</h4>
                <h5>{selectedVideo.snippet.description }</h5>
            </ContentTitle>
        </Container>
    )
}
export default VideoDetail;

const Container = styled.div`
    display:grid;
    width:100%;
    background-color:#a7cdf585;
    grid-template-rows: 3fr 1fr; 
`
const Iframe = styled.iframe`
    height:100%;
    width:100%;
    // @media (min-width: 1072px) {
    //     height:575px;
    // } 
    // @media (min-width: 1875px) {
    //     height:850px;
    // } 
`
const VideoContainer = styled.div`
    display:grid;
    height: 100%;
    width: 100%;
    padding:2%;
`
const ContentTitle = styled.div`
    justify-items: center;
    -webkit-align-self: center;
    -ms-flex-item-align: center;
    align-self: center;
    padding-left: 3%;
    padding-right: 2%;
    line-height: 1.5;
    font-family: cursive;
    font-size: 1.2rem;
    @media (min-width: 1072px) {
        font-size: 2.4rem;
    }
`