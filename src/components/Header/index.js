import React, {useState} from "react";
import { Row, Col } from 'reactstrap'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logo from 'src/images/logo@3x.png'
export default function Header() {
  const [showMenu, setShowMenu] = useState(false)
  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }
  return (
    <header className="header">
      <div className="width-default">
        <div className="header_content">
              <Row>
                <Col span = {12}>
                  <div className="header_content_left">
                       <a href="/">
                         <img src = {logo} alt></img>
                       </a>
                  </div>
                </Col>
                <Col span = {12}>                        
                  <div className="header_content_right">
                    <div className="header_content_menu">
                        <AiOutlineMenu onClick={ () => handleShowMenu()} className="icon_menu" />
                    </div>
                      <ul className={`${showMenu ? "show_menu" : ""}`}>
                        <div className="icon_close">
                          <AiOutlineClose onClick={ () => handleShowMenu()} className="icon_close_menu" />
                        </div>
                        <li><a>INTRODUCTION</a></li>
                        <li><a>SOLUTION</a></li>
                        <li><a>RATEPLAN</a></li>
                        <li><a className="login">LOGIN</a></li>
                        <li><a>APPLY FOR FREE USE</a></li>
                      </ul>
                  </div>
                </Col>
              </Row>
        </div>
      </div> 
    </header>

  );
}
