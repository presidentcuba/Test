import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import new1 from 'src/images/new1.png'
import new2 from 'src/images/new2.jpg'
import new3 from 'src/images/new3.jpg'
import new4 from 'src/images/new4.jpg'
import icon1 from 'src/images/iconnew.png'
import icon2 from 'src/images/iconnew1.png'
export default function News() {
    const news = [
        {title: "B BRAND", url: new1},
        {title: "C BRAND", url: new2},
        {title: "D BRAND", url: new3},
        {title: "E BRAND", url: new4}
    ]
    return (
        <div className="news">
            <div className="news_content">
                <div className="news_title">
                    <h3>Happened’s issue</h3>
                    <p>
                        모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가 아니더라도,  모든 팀에서
                        다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을  내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
                    </p>
                    <a href="#">SEE MORE</a>
                </div>
                <div className="news_item">
                    <div className="row">
                        <div className="col-12d5">
                            <div className="item one">
                                    <div className="title">
                                        <p>whpn</p>
                                        <p>issue</p>
                                        <div className="icon">
                                            <HiArrowNarrowRight className="icon_right"/>
                                            <div className="icon_image">
                                                <img src ={icon1}></img>
                                            </div>
                                        </div>
                                    </div>
                                
                            </div>
                        </div>
                        {news.map((item, index) => (
                            <div className="col-12d5" key = {index}>
                                <div className="item">
                                    <div className={`${index == 2 ? "bg-2" : ""} thread`}>
                                        <p>{item.title}</p> 
                                    </div>
                                    <div className="image">
                                        <img src={item.url}></img>
                                    </div>
                                    <div className={`${index == 0 ? "show" : ""} hot`}>
                                        <p>HOT</p>
                                    </div>
                                    <div className={`${index == 2 ? "show1" : ""} icon1`}>
                                        <img src={icon2}></img>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
