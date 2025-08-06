import React, { useState } from 'react';
import Post from './Post';
import NavBar from './NavBar';
import Me1 from '../pics/ME1.jpg';
import Me2 from '../pics/ME2.jpg'


const initialPostsData = [
    {
        id: 0,
        userimage: Me1,
        username: 'Abdallah',
        postimage: Me1,
        postbody: 'The first post.'
    },
    {
        id: 1,
        userimage: Me2,
        username: 'Abdallah',
        postimage: Me2,
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
