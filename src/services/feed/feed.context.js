import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const FeedContext = createContext();

export const FeedContextProvider = ({ children }) => {
    const [feed, setFeed] = useState({});
    const [loaded, setLoaded] = useState(false);

    function getFeedAxios(userId) {
        axios.get(`https://adm-photogram.herokuapp.com/api/v1/users/${userId}.json?include=feed.likes`)
        .then(response => {
            setFeed(response.data.data.feed); 
            setLoaded(true);
        });
    }

    function getFeed(userId) {
        const url = `https://adm-photogram.herokuapp.com/api/v1/users/${userId}.json?include=feed.likes`;
        const options = {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            }
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data.data.feed);
                setFeed(data.data.feed); 
                setLoaded(true);
            });

    }
 
    function like(postId, userId) {
        const url = "https://adm-photogram.herokuapp.com/api/v1/likes";
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                "data": {
                "type": "likes",
                "attributes": {
                    "fan_id": userId,
                    "photo_id": postId 
                }}   
            })
        };
        fetch(url, options)
            .then((response) => response.json())
            .then((data) => {
                setFeed(prevFeed => prevFeed.map(photo => photo.id === postId ?
                    {
                        ...photo,
                        likes: photo.likes, data
                    }
                    :
                    photo
                    )
                )
                console.log(data);
            });
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