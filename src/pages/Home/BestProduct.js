import React from 'react'
import best1 from 'src/images/best-1.jpg'
import best2 from 'src/images/best-2.jpg'
import best3 from 'src/images/best-3.jpg'
import pro1 from 'src/images/pro1.png'
import pro2 from 'src/images/pro2.png'
import pro3 from 'src/images/pro3.png'
import bg from 'src/images/bg-intro.jpg'
export default function BestProduct() {
    const bestproduct = [
        {img: pro1, url: best1 , thread: "How to create mobile-optimized"},
        {img: pro2, url: best2 , thread: "How to create mobile-optimized"},
        {img: pro3, url: best3 , thread: "How to create mobile-optimized"}
    ]
    return (
        <div className="best_product">
             <div className="product_image">
                <img src = {bg} alt=""></img>
            </div>
    
            <div className="best_product_content">
                
                <div className="title">
                    <div className="title_content">
                        <h3>BEST PRODUCT</h3>
                        <span>
                            <p>How to create mobile-optimized videos in minutes. Not a designer,</p>
                            <p>every team makes a lot of videos Can be trimmed. Take the first </p>
                        </span>
                    </div>
                </div>
                <div className="detail">
                    {bestproduct.map((item, index) => (
                        <div className="item">
                            <div className="image">
                                <img src = {item.url}></img>
                            </div>
                            <div className="thread">
                                <div className="thread_box">
                                    <p className="thread_title">{item.thread}</p>
                                    <p className="thread_btn"><span>GO</span></p>
                                </div>
                            </div>
                            <div className="number">
                                <img src = {item.img}></img>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          
        </div>
    )
}
