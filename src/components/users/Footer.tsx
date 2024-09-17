import React from 'react';


function Footer() {
    return (
        <>
            <div className="bad">
                <hr />
                <div className="footer-top">
                    <h1>
                        <q>BAD HABITS DIGITAL RETAIL STORE</q>
                    </h1>
                </div>
                <hr />
            </div>

            <div className="row1">
                <div className="footer-block">
                    <div className="footer-title">
                        <h4> THEO DÕI BABITS® TẠI: </h4>
                    </div>
                    <div className="footer-content">
                        <ul className="social-list">
                            <li>
                                <a href="">
                                    <img className="item-fade-box" src="/../../users/anhweb/intasss.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img className="item-fade-box" src="/../../users/anhweb/face.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img className="item-fade-box" src="/../../users/anhweb/tiktok.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="">
                                    <img className="item-fade-box" src="/../../users/anhweb/youtube.png" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-block2">
                        <div className="footer-title2">
                            <h4> ĐĂNG KÍ ĐỂ NHẬN ƯU ĐÃI </h4>
                        </div>
                        <div className="contentdk">
                            <div className="input-group">
                                <input className="email" type="email" placeholder="Email address" />
                                <button type="submit" className="button-dark">Đăng ký</button>
                            </div>
                        </div>
                    </div>
                    <div className="hotline">
                        <b>
                            HOTLINE: 
                            <a href="">0902.638.020</a>
                            -
                            <a href="">0902.638.020</a>
                        </b>
                    </div>
                </div>
                <div className="chinhanh">
                    <div className="footer-titile3">
                        <h4>CHI NHÁNH CỬA HÀNG</h4>
                    </div>
                    <div className="dschinhanh">
                        <ul>
                            <li><b>SÀI GÒN</b></li>
                            <li>1. 93 Rạch Bùng Binh,Phường 9, Quận 3</li>
                            <li>2. 117 Trần Đình Xu, phường Nguyễn Cư Trinh, Quận 1</li>
                            <li>3. 57 Nguyễn Gia Trí phường 25, quận Bình Thạnh</li>
                            <li>4. 26 Lý Tự Trọng, Phường Bến Nghé, Quận 1</li>
                            <li><b>HÀ NỘI</b></li>
                            <li>5. 21B Phố Lò Đúc, Phường Ngô Thì Nhậm, Quận Hai Bà Trưng, Hà Nội</li>
                            <li><b>CẦN THƠ</b></li>
                            <li>6. 7 Trần Văn Hoài, Phường Xuân Khánh, Quận Ninh Kiều, Cần Thơ</li>
                        </ul>
                        <p className="coppyright">
                            © 2023
                            <a href=""> Bad Habits Official Store</a>
                            all right reserved.
                        </p>
                    </div>
                </div>
                <div className="hotro">
                    <div className="dshotro">
                        <ul>
                            <li><a className="ht" href="">TÌM SẢN PHẨM</a></li>
                            <li><a className="ht" href=""> BLOG</a></li>
                            <li><a className="ht" href="">ĐỔI TRẢ SẢN PHẨM</a></li>
                            <li><a className="ht" href="">CHÍNH SÁCH ĐỔI TRẢ</a></li>
                            <li><a className="ht" href="">THÔNG TIN LIÊN HỆ</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
