import React from 'react';


import  anh1 from'../../assets/users/anhweb/logo.webp'
import anh2 from '../../assets/users/anhweb/240x100_3ad6fedc038f4e13aba55fc46e785e19.webp'
import anh3 from '../../assets/users/anhweb/z3670696866986_2cdb2cc018e5826ba043645c9476eff1_916645e4b88d4468bdce815a86422f9f.webp'
import  anh4 from'../../assets/users/anhweb/loupe_9fd2a24ed9504b0c8d8fe6efb6654501.webp'
import  anh5 from'../../assets/users/anhweb/shopping-cart_b425b78c185941d88a1a7ec5e3da7484.webp'
import  anh6 from'../../assets/users/anhweb/user_bfb942d5edb24fc895104e6524135e07.webp'
import Banner from './Banner';
import { useForm } from 'react-hook-form';


const Header: React.FC = () => {



    return (
        <header>
            <div className="container-build">
                <div className="header-top">
                    <div className="header-main-left">
                        <a href="/">
                            <img src={anh1} alt="" style={{ width: '581px', height: '95px' }} />
                        </a>
                    </div>
                    <div className="header-main-mid">
                        <a href="">
                            <img src={anh2} alt="" style={{ width: '240px', height: '100px' }} />
                        </a>
                    </div>
                    <div className="header-main-right">
                        <ul className="cacmuc">
                            <li>
                                <a href="">
                                    <img src={anh3} alt="" style={{ width: '40px', height: '55px' }} />
                                </a>
                            </li>
                            <li className="timkiem">
                                <a href="">
                                    <img src={anh4} alt="" style={{ width: '40px', height: '50px' }} />
                                </a>
                                <div className="search-box">
                                    <form action="/search" method="get">
                                        <div>
                                            <input type="hidden" name="type" value="Search" />
                                            <input  type="text" name="type" value="" placeholder="Tìm Kiếm" className="inputSearch" />
                                        </div>
                                    </form>
                                </div>
                            </li>
                            <li>
                                <a href="/cart">
                                    <img src={anh5} alt="" style={{ width: '40px', height: '50px' }} />
                                </a>
                            </li>
                            <li>
                                <a href="dangnhap.html">
                                    <img src={anh6} alt="" style={{ width: '40px', height: '50px' }} />
                                </a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* <div className="chay-chu">
                        {Array.from({ length: 10 }, (_, index) => (
                            <span key={index}>TẶNG BASIC TEE 330K CHO HÓA ĐƠN TỪ 700K</span>
                        ))}
                    </div> */}
                 
                    {/* <div className="header-banner">
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
                            <img src="./anhweb/banner_web_full.webp" alt="" />
                        </div>
                    </div> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
