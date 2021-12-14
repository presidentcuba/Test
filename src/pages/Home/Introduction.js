import React from 'react'
import intro from 'src/images/intro.jpg'
export default function Introduction() {
    return (
        <div className="introduction">
            <div className="introduction_content">
                <div className="introduction_bg">
                    <img src = {intro} alt=""></img>
                </div>
                <div className="introduction_slogan">
                    <div className="content">
                        <h5>What Happened!</h5>
                        <span>
                            <p>How to create mobile-optimized videos in minutes. Not a designer,</p>
                            <p>every team makes a lot of videos Can be trimmed. Take the first</p>
                            <p>step to your brand's success. How to create</p>
                            <p>mobile-optimized videos in minutes.</p>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
