import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const FeedContext = createContext();

export const FeedContextProvider = ({ children }) => {
    const [feed, setFeed] = useState({});
    const [loaded, setLoaded] = useState(false);

    function getFeed(userId) {
        axios.get(`https://adm-photogram.herokuapp.com/api/v1/users/${userId}.json?include=feed.likes`)
        .then(response => {
            setFeed(response.data.data.feed); 
            setLoaded(true);
        });
    }

    function like() {
        axios.post("https://adm-photogram.herokuapp.com/api/v1/likes", 
            { likes: 
                { 
                    "fan_id": 118,
                    "photo_id": 673
                } 
            })
        .then((response) => {
            console.log(response);
        })
        .catch(response => console.log(response));
    }

    function unLike(postId, userId) {

    }
    
    return (
        <FeedContext.Provider
            value={{
                feed,
                getFeed,
                loaded,
                like
            }}
        >
            {children}
        </FeedContext.Provider>        
    );
};