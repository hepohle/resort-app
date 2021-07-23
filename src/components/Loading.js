import React from 'react'
import loadinGif from '../images/gif/loading-arrow.gif';
export default function Loading() {
    return (
        <div>
            <h4>rooms data loading...</h4>
            <img src={loadinGif} alt="" />
        </div>
    )
}
