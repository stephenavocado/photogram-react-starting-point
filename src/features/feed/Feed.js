import React, { useContext, useEffect } from "react";
import { FeedContext } from "../../services/feed/feed.context";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import Post from "./Post";

export default function Feed() {
    const { feed, getFeed, loaded } = useContext(FeedContext);
    const { currentUser } = useContext(AuthenticationContext);
    const { id } = currentUser.user;
 
    useEffect(() => {
        getFeed(id);
    }, [feed.length])

    if (!loaded) {
        return
    };

    const posts = feed.map((post) => {
        return (
            <Post post={post} key={post.id} />
        )
    });
  
    return (
        <div className="page-wrapper">
            <h1>feed</h1>
            {posts}
        </div>
    );
};