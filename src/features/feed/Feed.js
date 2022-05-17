import React, { useState } from "react";
import Post from "./Post";
import data from "../feed/data/data";

export default function Feed() {
    const [feed, setFeed] = useState(data);

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