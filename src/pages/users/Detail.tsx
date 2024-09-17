import React, { useEffect, useState } from "react";

import '../../assets/users/css/chitietsanpham.css'

import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useRecoilState } from "recoil";
import {  cartState } from "../../constant/recoil";
interface Product {
    MaSanPham: number;
    TenSanPham: string;
    HinhURL: string;
    GiaSanPham: number;
    SoLuong: number;
}

export function addtoCart(item: Product) {
    item.SoLuong = 1; // Số lượng mặc định khi thêm sản phẩm mới

    // Lấy danh sách sản phẩm từ localStorage và đảm bảo kiểu là Product[]
    const list: Product[] = JSON.parse(localStorage.getItem('cart') || '[]');

    // Tìm sản phẩm đã có trong giỏ hàng
    const existingItem = list.find((x: Product) => x.MaSanPham === item.MaSanPham);

    if (existingItem) {
        // Nếu sản phẩm đã có, cộng dồn số lượng
        existingItem.SoLuong += 1;
    } else {
        // Nếu sản phẩm chưa có, thêm sản phẩm mới vào giỏ hàng
        list.push(item);
    }

    // Lưu giỏ hàng đã cập nhật vào localStorage
    localStorage.setItem('cart', JSON.stringify(list));
    alert("Đã thêm thành công vào giỏ hàng!");
}

const Detail = () => {
    const { MaSanPham } =useParams();
    const[productDetails,setProductDetails]=useState<any>(null)
    const [cart, setCart] = useRecoilState(cartState);
    
    useEffect(() =>{
        const fetProducts= async () =>{
            try {
                const res= await axios.get(`http://localhost:7000/api/san-pham/getbyid/${MaSanPham}`)
                // console.log("sanpham =>",res)
                setProductDetails(res.data)
                console.log(setProductDetails(res.data))
            } catch (error) {
                console.log("error=>",error)
            }
        }
        fetProducts()

        
    },[MaSanPham])

    const navigate=useNavigate();

    return (
        <>

        <div className="header-index">
        <ul className="header-list-lv1">
            <li><a href="">BEST SELLER</a></li>
            <li>
                <a href="">SẢN PHẨM</a>
                <ul className="header-list-lv2">
                    <li><Link to="/products">TẤT CẢ SẢN PHẨM</Link></li>
                    {/* <li><a href="">ÁO THUN</a></li>
                    <li><a href="">ÁO SƠMI</a></li>
                    <li><a href="">ÁO KHOÁC</a></li>
                    <li><a href="">QUẦN</a></li>
                    <li><a href="">PHỤ KIỆN</a></li> */}
                </ul>
            </li>
            <li>
                <a href="">BỘ SƯU TẬP</a>
                <ul className="header-list-lv2">
                    <li><a href="">BỘ SƯU TẬP BASIC</a></li>
                    <li><a href="">BỘ SƯU TẬP LUCKY YEAR</a></li>
                    <li><a href="">BỘ SƯU TẬP #STEPOUT</a></li>
                    <li><a href="">BỘ SƯU TẬP REMAKE</a></li>
                    <li><a href="">BỘ SƯU TẬP NỮ</a></li>
                    <li><a href="">PHỤ KIỆN</a></li>
                </ul>
            </li>
            <li><a href="">BASIC LINE</a></li>
            <li><a href="">MAKE YOUR STYLE</a></li>
            <li><a href="">OUTLET SALE</a></li>
            <li><a href="">BAD RABBIT CLUB®</a></li>
        </ul>
    </div>
    
            <section className="product">
                <div className="container">
                    <div className="product-top "></div>
                    <div className="product-content hangngang">
                        <div className="product-content-left hangngang">
                        {productDetails && (
                            <div className="product-big-img">
                                <img id="zoom-img" src={productDetails.HinhURL} alt="" />
                            </div>
                        )}

                            <div className="product-small-img">
                                <h3 style={{ textAlign: "center", fontWeight: "bold" }} >CÁC KIỂU KHÁC</h3>
                                <img src="../../image/ao1.jpg" alt="" />
                                <img src="../../image/ao2.webp" alt="" />
                                <img src="../../image/ao1.jpg" alt="" />
                            </div>
                        </div>
                        <div className="product-content-right">
                            {productDetails && (
                                <div className="product-content-name">
                                <h1>{productDetails.TenSanPham}</h1>
                            </div>
                            )}
                            {productDetails && (
                                <div className="product-content-price">
                                <p style={{color:"black"}}>{productDetails.GiaSanPham.toLocaleString('vi-VN') + ' VNĐ'}</p>
                            </div>
                            )}
                            <div className="product-content-color">
                                <p style={{ fontWeight: "bold" }}><span style={{color:"black"}}>Màu sắc</span><span style={{ color: "red" }}>*</span></p>
                                <img src="../../users/image/nen-den-tron.jpg" alt="" />
                            </div>
                            <div className="product-content-size">
                                <p style={{ fontWeight: "bold" }}>Size</p>
                                <div className="size">
                                    <span data-option-value="S">S</span>
                                    <span data-option-value="M">M</span>
                                    <span>L</span>
                                    <span>XL</span>
                                </div>
                            </div>
                            <div className="quanttity">
                                <p style={{ fontWeight: "bold" }}>Số lượng:</p>
                                <input type="number" min="1" value="1" />
                            </div>
                            <p style={{ color: "red" }}>Vui lòng chọn size *</p>
                            <div className="product-content-button">
                                <button className="muahang1" onClick={() => {
                                    addtoCart({
                                        MaSanPham: productDetails.MaSanPham,
                                        TenSanPham: productDetails.TenSanPham,
                                        HinhURL: productDetails.HinhURL,
                                        GiaSanPham: productDetails.GiaSanPham,
                                        SoLuong: productDetails.SoLuong
                                    });
                                    let list = JSON.parse(localStorage.getItem('cart') || "[]");
                                    setCart(list);
                                }}>
                                    Mua hàng
                                </button>
                                <button>
                                    <p>Tìm tại cửa hàng</p>
                                </button>
                            </div>

                            <div className="product-content-icon">
                                <div className="product-content-icon-item">
                                    <i className="fa-solid fa-phone"></i><p style={{color:"black"}}>Hotline</p>
                                </div>
                                <div className="product-content-icon-item">
                                    <i className="fa-regular fa-comment"></i><p style={{color:"black"}}>Chat</p>
                                </div>
                                <div className="product-content-icon-item">
                                    <i className="fa-solid fa-envelope"></i><p style={{color:"black"}}>Mall</p>
                                </div>
                            </div>
                            <div className="product-content-bottom">
                                <div className="product-content-bottom-content-big">
                                    <div className="titlenho hangngang">
                                        <div className="title-item chitiet">
                                            <p style={{color:"black"}}>Chi tiết</p>
                                        </div>
                                        <div className="title-item chinhsachbaohanh">
                                            <p style={{color:"black"}}>Chính sách đổi trả</p>
                                        </div>
                                    </div>
                                    <div className="product-bottom-content-title-chitiet " style={{ display: "none", marginTop: "20px" }}>
                                        <p style={{color:"black"}}>
                                            CHI TIẾT <br />
                                            • Chất liệu: Jeans <br />
                                            • Size: S,M, L, XL <br />
                                            • Kỹ thuật: Wash và Bắn Laser
                                        </p>
                                    </div>
                                    <div className="product-bottom-content-title-chinhsachbaohanh" style={{ display: "none", marginTop: "20px" }}>
                                        <p style={{color:"black"}}>
                                            CHÍNH SÁCH ĐỔI TRẢ VÀ BẢO HÀNH <br />

                                            A. CHÍNH SÁCH ĐỔI TRẢ<br />

                                            1. Thời hạn đổi trả (mỗi đơn hàng chỉ áp dụng đổi 1 lần)<br />

                                            + Đối với sản phẩm áo quần, phụ kiện, thời gian đổi hàng trong vòng 14 ngày, kể từ ngày khách hàng nhận sản phẩm.<br />

                                            ...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="product-related container">
                <div className="product-related-title" style={{ backgroundColor: "black", width: "200px", color: "#ffffff", height: "30px" }}>
                    <p>SẢN PHẨM LIÊN QUAN</p>
                </div>
                <div className="boxcenter">
                    <div className="boxpro">
                        <div className="boximg">
                            <img src="../../image/ao1.jpg" alt="" />
                            <div className="product-click">
                                <div className="xn">
                                    <a href="">XEM NHANH</a>
                                </div>
                                <div className="ct">
                                    <a href="" className="detail">CHI TIẾT</a>
                                </div>
                            </div>
                        </div>
                        <button className="muangay">Mua ngay</button>

                        <a className="ten">BADHABITS PARACHUTE - BROWN</a><br />
                        <strong>690.000</strong>
                    </div>
                    <div className="boxpro">
                        <div className="boximg">
                            <img src="../../image/ao1.jpg" alt="" />
                            <div className="product-click">
                                <div className="xn">
                                    <a href="">XEM NHANH</a>
                                </div>
                                <div className="ct">
                                    <a href="" className="detail">CHI TIẾT</a>
                                </div>
                            </div>
                        </div>
                        <button className="muangay">Mua ngay</button>

                        <a className="ten">BADHABITS PARACHUTE - BROWN</a><br />
                        <strong>690.000</strong>
                    </div>
                    <div className="boxpro">
                        <div className="boximg">
                            <img src="../../image/ao1.jpg" alt="" />
                            <div className="product-click">
                                <div className="xn">
                                    <a href="">XEM NHANH</a>
                                </div>
                                <div className="ct">
                                    <a href="" className="detail">CHI TIẾT</a>
                                </div>
                            </div>
                        </div>
                        <button className="muangay">Mua ngay</button>

                        <a className="ten">BADHABITS PARACHUTE - BROWN</a><br />
                        <strong>690.000</strong>
                    </div>
                    <div className="boxpro">
                        <div className="boximg">
                            <img src="../../image/ao1.jpg" alt="" />
                            <div className="product-click">
                                <div className="xn">
                                    <a href="">XEM NHANH</a>
                                </div>
                                <div className="ct">
                                    <a href="" className="detail">CHI TIẾT</a>
                                </div>
                            </div>
                        </div>
                        <button className="muangay" 
                        > <Link to="/cart">Mua ngay</Link></button>

                        <a className="ten">BADHABITS PARACHUTE - BROWN</a><br />
                        <strong>690.000</strong>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Detail;
