import React, { useState, useEffect} from 'react';
import axios from 'axios';
import CommentCreate  from "./CommentCreate";

export default () => {

    const [posts, setPosts] = useState({});

    const fetchData = async () =>  {
        const Postresponse = await axios.get('http://localhost:4000/posts');

        setPosts(Postresponse.data);
    }

    useEffect(() =>{
        fetchData();
    },[]);

    const renderedPosts = Object.values(posts).map(post => {
        return (
            <div className="card" style={{width:'30%',margin:'20px',padding:'20px'}} key={post.id}>
                
                <div className="card-body">
                    <h3>{post.title}</h3>
                </div>
                <CommentCreate postId = {post.id}/>
            </div>
        );
    });
    return <div className="d-flex flex-row flex-wrap justify-content-between">
        {renderedPosts}
    </div>
}