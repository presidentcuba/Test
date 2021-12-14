import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import img1 from 'src/images/img1.jpg'
import img2 from 'src/images/img2.jpg'
import img3 from 'src/images/img3.jpg'
import img4 from 'src/images/img4.jpg'
import img5 from 'src/images/img5.jpg'
import img6 from 'src/images/img6.jpg'
import img7 from 'src/images/img7.jpg'
import img8 from 'src/images/img8.jpg'
import img9 from 'src/images/img9.jpg'
import img10 from 'src/images/img10.jpg'
import img11 from 'src/images/img11.jpg'
import img12 from 'src/images/img12.jpg'
import img13 from 'src/images/img13.jpg'
import img14 from 'src/images/img14.jpg'
import img15 from 'src/images/img15.jpg'
import img16 from 'src/images/img16.jpg'
import img17 from 'src/images/img17.jpg'
import img18 from 'src/images/img18.jpg'
import img19 from 'src/images/img19.jpg'
import img20 from 'src/images/img20.jpg'
import img21 from 'src/images/img21.jpg'
import img22 from 'src/images/img22.jpg'
import img23 from 'src/images/img23.jpg'
import img24 from 'src/images/img24.jpg'
import img25 from 'src/images/img25.jpg'
export default function Products() {
    const products = [
        { url: img1, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img2, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img3, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img4, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img5, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img6, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img7, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img8, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img9, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img10, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img11, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img12, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img13, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img14, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img15, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img16, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img17, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img18, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img19, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img20, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img21, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img22, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img23, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img24, title: '[what happen] How to create', price: "2,500", seen: 236 },
        { url: img25, title: '[what happen] How to create', price: "2,500", seen: 236 }
    ]
    return (
        <div className="products">
            <div className="width-default1">
                <div className="products_content">
                    <div className="row">
                            {products.map((item, index) => (
                                <div className="col-xl-12d5">
                                    <div className="item" key = {index}>
                                        <div className="image">
                                            <img src = {item.url}></img>
                                        </div>
                                        <div className="thread">
                                            <div className="thread_title">
                                                <h5>{item.title}</h5>
                                            </div>
                                            <div className="thread_price">
                                                <div className="price">{item.price} won</div>
                                                <div className="seen">
                                                    <AiFillHeart className="heart" />
                                                    {item.seen}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                       
                    </div>
                </div>
                <div className="btn_seemore">
                    <a href="#" >SEE MORE</a>
                </div>
            </div>
        </div>
    )
}
