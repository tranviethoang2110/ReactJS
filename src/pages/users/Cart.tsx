import React, { useEffect, useState } from "react";
import '../../assets/users/css/cart.css'
import axios from "axios";
import { Link } from "react-router-dom";

type CartItem = {
    MaSanPham: number;
    TenSanPham: string;
    HinhURL: string;
    GiaSanPham: number;
    NgayNhap: Date;
    SoLuong: number;
    SoLuotXem: number;
    MoTa: string;
    BiXoa: boolean;
    MaLoaiSanPham: number;
    MaHangSanXuat: number;
    BaoHanh: number;
    SoLuongDaBan: number;
    taikhoan?: string; 
};

const Cart = () => {
    const [cart, setCart] = useState<CartItem[]>([]);
    
    useEffect(() => {
        let list: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
        setCart(list);
      }, []);

    const getTotalQuantity = () => {
        let totalQuantity = 0;
        cart.forEach((item) => {
            totalQuantity += item.SoLuong;
        });
        return totalQuantity;
    };
    const getTotalPrice = () => {
        let totalPrice = 0;
        cart.forEach((item) => {
            totalPrice += item.GiaSanPham * item.SoLuong;
        });
        return totalPrice;
    };
    
    const removeFromCart = (index: number) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };
    const giamsl = (index: number) => {
        const updatedCart = [...cart];
        if (index >= 0 && index < updatedCart.length && updatedCart[index].SoLuong > 1) {
          updatedCart[index].SoLuong--;
          setCart(updatedCart);
          localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
      };
    
      const tangsl = (index: number) => {
        const updatedCart = [...cart];
        if (index >= 0 && index < updatedCart.length) {
          updatedCart[index].SoLuong++;
          setCart(updatedCart);
          localStorage.setItem("cart", JSON.stringify(updatedCart));
        }
      };

    return (
        <>
        <div className="header-index">
                <ul className="header-list-lv1">
                    <li><a href="">BEST SELLER</a></li>
                    <li>
                        <a href="">SẢN PHẨM</a>
                        <ul className="header-list-lv2">
                            <li><a href="./products">TẤT CẢ SẢN PHẨM</a></li>
                            <li><a href="">ÁO THUN</a></li>
                            <li><a href="">ÁO SƠMI</a></li>
                            <li><a href="">ÁO KHOÁC</a></li>
                            <li><a href="">QUẦN</a></li>
                            <li><a href="">PHỤ KIỆN</a></li>
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
            <div className="header-index">
                {/* Đây là phần header của trang, bạn có thể giữ nguyên */}
            </div>

            {/* Hiển thị danh sách sản phẩm trong giỏ hàng */}
            <section className="cartItem">
                <div className="cart-container">
                    <div className="cart-content">
                        <div className="cart-content-left">
                            <table className="addsp">
                                <thead>
                                    <tr>
                                        <th>Sản phẩm</th>
                                        
                                        <th>Tên sản phẩm</th>
                                        <th>Số lượng</th>
                                        <th>Giá</th>
                                        <th>Xóa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, index) => (
                                        <tr key={index}>
                                            
                                            <td><img src={item.HinhURL} alt={item.TenSanPham} style={{ width: '60px', height: '70px' }} /></td>
                                            <td >{item.TenSanPham}</td>
                                            <td>
                                            <div className="quantity-control">
                                                <div className="quantity-button decrease" onClick={() => giamsl(index)}>-</div>
                                                <input type="text" className="quantity-input" value={item.SoLuong} readOnly />
                                                <div className="quantity-button increase" onClick={() => tangsl(index)}>+</div>
                                            </div>

                                            </td>
                                            <td>{item.GiaSanPham} </td>
                                            <td><button className='delete-button' onClick={() => removeFromCart(index)}>Xóa</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <div className="cart-row">
                                <label htmlFor="note" style={{fontWeight: "500", marginBottom: "12px", marginLeft: "12px"}}>GHI CHÚ ĐƠN HÀNG</label>
                                <textarea name="note" id="note" cols={30} rows={10}></textarea>
                            </div>
                        </div>

                        <div className="cart-content-right">
                            <table>
                                <tbody>
                                    <tr>
                                        <th colSpan={2}>Tổng tiền giỏ hàng</th>
                                    </tr>
                                    <tr>
                                        <td>Tổng sản phẩm:</td>
                                        <td id="tongSoLuongTd">{getTotalQuantity()} </td>
                                    </tr>
                                    <tr>
                                        <td id="totalProducts">Tổng đơn giá:</td>
                                        <td id="totalQuantity">{getTotalPrice()} VNĐ</td>
                                    </tr>
                                    <tr>
                                        <td>TẠM TÍNH: </td>
                                        <td>{getTotalPrice()} VNĐ</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="cart-content-right-text">
                                <p style={{color: "red", fontWeight: "bold"}}>TẶNG BASSIC TEE 330K CHO HĐ TRÊN 700K</p>
                            </div>
                            <div className="cart-content-right-button">
                                <button className="thanhtoan" style={{color: "black"}}><Link to={"/oder"}>THANH TOÁN</Link></button>
                                <button style={{color: "black"}}><Link to={"/"}>TIẾP TỤC MUA SẮM</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cart;
