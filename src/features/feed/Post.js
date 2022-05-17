import React, { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { FeedContext } from "../../services/feed/feed.context";

export default function Post({ post }) {
    const { currentUser } = useContext(AuthenticationContext);
    const { caption, image } = post;
    const { like } = useContext(FeedContext);
    const [liked, setLiked] = useState(false);   
    const [likes, setLikes] = useState(post.likes.length);

    useEffect(() => {
        setLikes(prevLikes => prevLikes + 1);
    }, [like])

    return (
        <div className="post-wrapper">
            <h3 className="post-header">
                username
            </h3>
            <div className="post-image-wrapper">
                <img className="post-image" src={image} />
            </div>
            <div className="post-likes-row">
                {likes} {likes === 1 ? "like" : "likes"}
                <div 
                    onClick={() => like(post.id, currentUser.user.id)} 
                    className="post-like-button"
                >
                    {liked ? "❤️ Un-like" : "🤍 Like"}
                </div>
            </div>
            <div className="post-caption">
                {caption}
            </div>
        </div>
    ); 
};