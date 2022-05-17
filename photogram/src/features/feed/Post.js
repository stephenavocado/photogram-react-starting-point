import React, { useContext, useState } from "react";
import { FeedContext } from "../../services/feed/feed.context";

export default function Post({ post }) {
    const { caption, image, id, likes } = post;
    const { like } = useContext(FeedContext);
    const [liked, setLiked] = useState(false);    

    return (
        <div className="post-wrapper">
            <h3 className="post-header">
                stephen_avocado
            </h3>
            <div className="post-image-wrapper">
                <img className="post-image" src={image} />
            </div>
            <div className="post-likes-row">
                {likes.length} {likes.length === 1 ? "like" : "likes"}
                <div 
                    onClick={like} 
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