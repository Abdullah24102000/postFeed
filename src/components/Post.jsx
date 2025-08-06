import React, { useState } from 'react';
import UserData from './UserData';
import PostContent from './PostContent';
import Button from './Button';

export default function Post({ postData, isLiked, onLikeToggle, onDelete }) {
    const [comment, setComment] = useState('');
    const [commentsList, setCommentsList] = useState([]);

    const handleChange = (e) => {
        setComment(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && comment.length > 0) {
            setCommentsList([...commentsList, comment]);
            setComment('');
        }
    };

    const handleLikeClick = () => {
        onLikeToggle(postData.id, !isLiked); 
    };

    return (
        <div style={{ width: "700px" }} className='border border-dark rounded-2 d-flex flex-column gap-3 p-3'>
            <UserData userimage={postData.userimage} username={postData.username} />
            <PostContent postimage={postData.postimage} postbody={postData.postbody} />
            <div className='d-flex gap-2'>
            <button
            class='w-100'
            style={{
                backgroundColor: isLiked ? "green" : "#0d6efd",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
            }}
            onClick={handleLikeClick}
        >
            {isLiked ? "Liked" : "Like"}
        </button>
                <Button buttonName="Comment" buttonColor="primary" handleOnClick={() => {}} />
                <Button buttonName="Delete" buttonColor="danger" handleOnClick={onDelete} />
            </div>
            <hr />
            <div className='d-flex align-items-center gap-2 mb-3'>
                <img src={postData.userimage} alt='User' className='rounded-circle' style={{ width: '50px', height: '50px' }} />
                <input
                    type='text'
                    value={comment}
                    onChange={handleChange}
                    onKeyDown={handleKeyPress}
                    placeholder='Write a comment...'
                    className='form-control'
                />
            </div>
            <div>
                {commentsList.map((comm, index) => (
                    <div key={index} className='d-flex align-items-center mb-2'>
                        <img src={postData.userimage} alt='User' className='rounded-circle' style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                        <span>{comm}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
