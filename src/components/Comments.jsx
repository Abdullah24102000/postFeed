import React from 'react'
import Comment from './Comment'
export default function Comments({ userimage }) {
    return (
        <div>
        {
            Comments.map((comment) => <Comment commentBody={comment} />)
        }
    </div>
    )
}
