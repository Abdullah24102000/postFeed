import React from 'react'

export default function UserData({ userimage, username }) {
    return (
        <div className='d-flex align-items-center'>
            <img src={userimage} alt={`${username}'s profile`} className='rounded-circle' width='50' height='50' />
            <div className='ms-3'>{username}</div>
        </div>
    )
}
