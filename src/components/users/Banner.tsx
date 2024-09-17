import React from 'react';

function Banner() {
    return (
        <div className="header-banner">
            <div className="header-sidebar-left">
                <ul className="sidebar-menu">
                    <li>
                        <a href="" title="BEST SELLER" target="_self" className="menu">
                            <span>BEST SELLER</span>
                        </a>
                    </li>
                    <li>
                        <a href="" title="BASIC LINE" target="_self" className="menu">
                            <span>BASIC LINE</span>
                        </a>
                    </li>
                    <li>
                        <a href="./danhsachsanpham.html" title="TẤT CẢ SẢN PHẨM" target="_self" className="menu">
                            <span>TẤT CẢ SẢN PHẨM</span>
                        </a>
                    </li>
                    <li>
                        <a href="" title="ÁO THUN" target="_self" className="menu">
                            <span>ÁO THUN</span>
                        </a>
                    </li>
                    <li>
                        <a href="" title="ÁO SƠ MI" target="_self" className="menu">
                            <span>ÁO SƠ MI</span>
                        </a>
                    </li>
                    <li>
                        <a href="" title="ÁO KHOÁC" target="_self" className="menu">
                            <span>ÁO KHOÁC</span>
                        </a>
                    </li>
                    <li>
                        <a href="" title="QUẦN" target="_self" className="menu">
                            <span>QUẦN</span>
                        </a>
                    </li>
                    <li>
                        <a href="" title="PHỤ KIỆN" target="_self" className="menu">
                            <span>PHỤ KIỆN</span>
                        </a>
                    </li>
                    <li>
                        <a href="" title="OUTLET SALE" target="_self" className="menu">
                            <span>OUTLET SALE</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className="header-banner-full">
                <img src="/../../users/anhweb/banner_web_full.webp" alt="" />
            </div>
        </div>
    );
}

export default Banner;
