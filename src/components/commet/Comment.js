import moment from 'moment'
import React from 'react'
import './_comment.scss'
const Comment = () => {
    return (
        <div className="comment p-2 d-flex">
            <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="" className='rounded-circle mr-3' />
            <div className="comment__body">
                <p className='comment__header mb-0'>
                    Submit Dey • {moment('2022-03-08').fromNow()}
                </p>
                <p className='mb-0'>Nice Video DUDE!!</p>
            </div>
        </div>
    )
}

export default Comment