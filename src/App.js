import React, {useContext} from 'react';
import {SearchBar, VideoList, VideoDetail} from './components'
import GlobalStyles from '../src/styles.lib/global.styles'
import styled from "styled-components";
import { Context } from "../src/components/ContextProvider";



const App = () => {
    const { selectedVideo } = useContext(Context);

    if(!selectedVideo) return (<> Loading...</>)

    return(
        <MainContainer> 
            <SearchBar/>
            <ContentContainer>
                <VideoDetail/>
                <VideoList/>
            </ContentContainer>
            <GlobalStyles />
        </MainContainer>
    )
}
export default App;

const MainContainer = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    // min-height: 100vh;
    grid-template-rows: 80px auto;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    grid-gap: 1%;
    padding: 2%;
    background-color: gray; 


 `
const ContentContainer = styled.div`
    display: grid;
    width: 100%;
    height: 100vh;
    grid-template-columns: 100%;
    grid-template-rows: 40% auto;
    grid-gap: 1%;
    @media (min-width: 1072px) {
        grid-template-columns: 3fr 1fr;
        grid-template-rows: 100%;
        height:100vh;
    }
 `