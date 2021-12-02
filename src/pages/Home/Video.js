import React from 'react'
import video from 'src/images/video.png'
export default function Video() {
    return (
        <div className="video">
            <div className="video_content">
                <div className="video_title">
                    <h3>what happened</h3>
                    <p>How to create mobile-optimized videos in minutes. Not a designer, 
                        every team makes a lot of videos Can be trimmed. Take the first </p>
                    <a href="#">SEE MORE</a>
                </div>
                <div className="video_item">
                    <img src={video}></img>
                </div>
            </div>
        </div>
    )
}

