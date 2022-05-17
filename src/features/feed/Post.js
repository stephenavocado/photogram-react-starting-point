import React, { useState } from "react";

export default function Post({ post }) {
    const { caption, image } = post;
    const [liked, setLiked] = useState(false);   
    const [likes, setLikes] = useState(post.likes.length);

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