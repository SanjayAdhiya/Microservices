import React from 'react';
import PostCreate  from './PostCreate';
import PostList from './PostList';
export default () => {
    return ( 
    <div>
        <div className="container">
        	<div>
                <h1>Ceate Post</h1>
                <PostCreate/>
            </div>
            <div>
                <hr/>
                <PostList/>
            </div>
        </div>
    </div>
    );
}