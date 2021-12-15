import React from 'react'
import video1 from 'src/images/video.png'
import video2 from 'src/images/videobg.png'
export default function Video() {
    return (
        <div className="video">
            <div className="video_image">
                <img src = {video2} alt =""></img>
            </div>
            <div className="video_content">
                <div className="video_title">
                    <h3>what happened</h3>
                    <span>
                        <p>How to create mobile-optimized videos in minutes. Not a designer, </p>
                        <p>every team makes a lot of videos Can be trimmed. Take the first </p>
                    </span>
                    <a href="#">SEE MORE</a>
                </div>
                <div className="video_item">
                    <img src={video1}></img>
                </div>
            </div>
        </div>
    )
}

