import React from 'react'
import best1 from 'src/images/best-1.jpg'
import best2 from 'src/images/best-2.jpg'
import best3 from 'src/images/best-3.jpg'
import bg from 'src/images/bg-intro.jpg'
export default function BestProduct() {
    const bestproduct = [
        {id: "01", url: best1 , thread: "How to create mobile-optimized"},
        {id: "02", url: best2 , thread: "How to create mobile-optimized"},
        {id: "03", url: best3 , thread: "How to create mobile-optimized"}
    ]
    return (
        <div className="best_product">
           <div className="width-default">
                <div className="best_product_content">
                    <div className="title">
                        <div className="title_content">
                            <h3>BEST PRODUCT</h3>
                            <p>
                                How to create mobile-optimized videos in minutes. Not a designer, 
                                every team makes a lot of videos Can be trimmed. Take the first 
                            </p>
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
                                    <p>{item.id}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
