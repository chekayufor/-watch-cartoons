import React, { useState, useEffect } from "react";
import youtube from '../api/youtube';
import {Key} from '../api/Key';

const Context = React.createContext();
const { Provider } = Context;
// const { KEY } = process.env
const ContextProvider = ({ children }) => {

    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [searchTerm, setSearchTerm] = useState('Kid-E-Cats');

    useEffect(() => {
        handleSubmit(searchTerm);
    },[])

    const handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {  
            params: {
                part: 'snippet',
                maxResults: 15,
                key: Key,
                q:searchTerm,
                order:'viewCount',
                pageToken:'CAoQAA',
                pageInfo: {
                    totalResults: 100,
                    resultsPerPage: 15
                  },
                type:'video',
            }
        });
        
        console.log(response.data.items);

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[1]);
    }

    const onVideoSelect = (video) => {
        setSelectedVideo(video);
    }

  const state = {
      videos,
      selectedVideo,
      searchTerm
  };
  // actions = callbacks to invoke
  const actions = {
      onVideoSelect,
      setVideos,
      handleSubmit,
      setSearchTerm
  };

  return <Provider value={{ ...state, ...actions }}> {children} </Provider>;
  // return <Provider value={ { messages,things,add_message,make_thing} }> {children} </Provider>;
};

export { ContextProvider, Context };
