import React from 'react'

export default function PostContent({ postimage, postbody }) {
    return (
        <div>
            <img src={postimage} alt='Post' className='img-fluid rounded w-100' />
            <p className='mt-2'>{postbody}</p>
        </div>
    )
}
