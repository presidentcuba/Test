import React from "react";
import icon1 from 'src/images/n.png'
import icon2 from 'src/images/fb.png'
import icon3 from 'src/images/d.png'
export default function Footer() {
  return (
      <div className="footer">
          <div className="width-default">
            <div className="footer_content">
              <div className="footer_top">
                <div className="row">
                  <div className="col-lg-7 col-md-6 col-sm-12 col-12 item">
                      <h5>what happened</h5>
                      <span>
                        <p>[공지] 개인 정보 처리 방침 변경 사전 안내</p>
                        <p>[공지] 29CM 강남 스토어 영업 종료</p>
                        <p>[공지] 개인 정보 처리 방침 변경 사전 안내</p>
                        <p>[공지] iOS 10 이하 버전 지원 중단 안내</p>
                        <p>[공지] 개인 정보 처리 방침 변경 사전 안내</p>
                      </span>
                  </div>
                  <div className="col-lg-5 col-md-6 col-sm-12 col-12 item item_box">
                      <div className="row">
                        <div className="col-md-3 col-sm-6 col-12">
                            <ul>
                              <li><h5>about us</h5></li>
                              <li><a href="#">회사 소개</a></li>
                              <li><a href="#">인재 채용</a></li>
                              <li><a href="#">상시 할인 혜택</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <ul>
                              <li><h5>my order</h5></li>
                              <li><a href="#">내 주문</a></li>
                              <li><a href="#">주문 배송</a></li>
                              <li><a href="#">취소 / 교환 / 반품 내역</a></li>
                              <li><a href="#">상품 리뷰 내역</a></li>
                              <li><a href="#">증빙 서류 발급</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                          <ul>
                              <li><h5>my account</h5></li>
                              <li><a href="#">회원 정보 수정</a></li>
                              <li><a href="#">회원 등급</a></li>
                              <li><a href="#">마일리지 현황</a></li>
                              <li><a href="#">쿠폰</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                          <ul>
                              <li><h5>help</h5></li>
                              <li><a href="#">1 : 1 상담 내역</a></li>
                              <li><a href="#">상품 Q & A 내역</a></li>
                              <li><a href="#">공지 사항</a></li>
                              <li><a href="#">자주하는 질문</a></li>
                              <li><a href="#">고객의 소리</a></li>
                            </ul>
                        </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="footer_bot">
                  <div className="content">
                    <p>© 2020-2021 what happened corp  l  (주) 왓헤픈 ｜ 대표자 : 홍길동 ｜ 사업자 등록번호 : 356-00-00000 ㅣ test0101@what happened.co.kr</p>
                    <p> 서울특별시 강남구 도산대로 8길 17 ｜ FAX : 070-0000-0000  l  서비스 이용약관  l  개인정보처리방침</p>
                   
                  </div>
                  <div className="icon">
                        <img src={icon1}></img>
                        <img src={icon2}></img>
                        <img src={icon3}></img>
                  </div>
              </div>
            </div>
          </div>
      </div>       
  );
}
