import React, { useState } from 'react';
import Post from './Post';
import NavBar from './NavBar';

const initialPostsData = [
    {
        id: 0,
        userimage: '../public/ME1.jpg',
        username: 'Abdallah',
        postimage: '../public/ME1.jpg',
        postbody: 'The first post.'
    },
    {
        id: 1,
        userimage: '../public/ME2.jpg',
        username: 'Abdallah',
        postimage: '../public/ME2.jpg',
        postbody: 'The second post.'
    },
];

export default function Posts() {
    const [posts, setPosts] = useState(initialPostsData);
    const [likedPosts, setLikedPosts] = useState(new Set());

    const handleLikeToggle = (postId, isLiked) => {
        const newLikedPosts = new Set(likedPosts);

        if (isLiked) {
            newLikedPosts.add(postId);
        } else {
            newLikedPosts.delete(postId);
        }

        setLikedPosts(newLikedPosts);
    };

    const handlePostDelete = (postId) => {
        setPosts(posts.filter(post => post.id !== postId));
    };

    return (
        <div>
            <NavBar likedPostsCount={likedPosts.size} />
            <div className='d-flex flex-column align-items-center my-4 gap-4'>
                {posts.map((post) => (
                    <Post 
                        key={post.id} 
                        postData={post} 
                        isLiked={likedPosts.has(post.id)}
                        onLikeToggle={handleLikeToggle}
                        onDelete={() => handlePostDelete(post.id)}
                    />
                ))}
            </div>
        </div>
    );
}
