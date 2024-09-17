import React, { useEffect, useState } from 'react';
import '../../assets/users/css/pay.css';

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

const Oder: React.FC = () => {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [province, setProvince] = useState<string>('null');
  const [district, setDistrict] = useState<string>('null');
  const [address, setAddress] = useState<string>('');

  const [cart, setCart] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    const list: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(list);
  }, []);

  useEffect(() => {
    const totalPrice = cart.reduce((total, item) => total + item.GiaSanPham * item.SoLuong, 0);
    setTotalPrice(totalPrice);
  }, [cart]);

 const handleCheckout = async () => {
  // Chuẩn bị dữ liệu đơn hàng
  const orderData = {
    NgayLap: new Date().toISOString().slice(0, 19).replace('T', ' '),
    TongThanhTien: totalPrice,
    MaTaiKhoan: 1, 
    MaTinhTrang: 1, 
    TenKhachHang: fullName,
    list_json_chitiet_hoadon: JSON.stringify(cart.map(item => ({
      SoLuong: item.SoLuong,
      GiaBan: item.GiaSanPham,
      MaSanPham: item.MaSanPham
    })))
  };
  // console.log('Dữ liệu đơn hàng:', orderData);
  try {
    const response = await fetch('http://localhost:7000/api/hoa-don/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderData),
    
      
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const result = await response.json();
    alert('Đặt hàng thành công!');
    // Có thể chuyển hướng đến trang khác hoặc xóa giỏ hàng
  } catch (error) {
    console.error('Lỗi khi đặt hàng:', error);
    alert('Đặt hàng không thành công. Vui lòng thử lại.');
  }
};

  return (
    <div>
      {/* Existing component code */}
      <section className="delivery">
        <div className="container">
          <div className="codelivery">
            <div className="delivery-content row">
              <div className="delivery-content-left">
                <h1 style={{ fontWeight: 'bold' }}>BAD HABITS STORE</h1>
                <div className="delivery-content-left-dangnhap">
                  <p>Thông tin giao hàng</p>
                </div>
                <div className="delivery-content-left-input-bottom">
                  <label>Họ Tên <span style={{ color: 'red' }}>*</span></label>
                  <input 
                    type="text" 
                    value={fullName} 
                    onChange={(e) => setFullName(e.target.value)} 
                  />
                </div>
                <div className="delivery-content-left-input-top row">
                  <div className="delivery-content-left-input-top-items">
                    <label>Email <span style={{ color: 'red' }}>*</span></label>
                    <input 
                      type="text" 
                      value={email} 
                      onChange={(e) => setEmail(e.target.value)} 
                    />
                  </div>
                  <div className="delivery-content-left-input-top-items">
                    <label>Số điện thoại <span style={{ color: 'red' }}>*</span></label>
                    <input 
                      type="text" 
                      value={phone} 
                      onChange={(e) => setPhone(e.target.value)} 
                    />
                  </div>
                  <div className="delivery-content-left-input-top-items">
                    <label>Tỉnh/ThànhPhố <span style={{ color: 'red' }}>*</span></label>
                    <select 
                      className="field-input" 
                      id="customer_shipping_province" 
                      name="customer_shipping_province" 
                      value={province} 
                      onChange={(e) => setProvince(e.target.value)}
                    >
                      <option value="null">Chọn tỉnh / thành</option>
                      {/* Options */}
                    </select>
                  </div>
                  <div className="delivery-content-left-input-top-items">
                    <label>Quận/Huyện <span style={{ color: 'red' }}>*</span></label>
                    <select 
                      className="field-input" 
                      id="customer_shipping_district" 
                      name="customer_shipping_district" 
                      value={district} 
                      onChange={(e) => setDistrict(e.target.value)}
                    >
                      <option value="null">Chọn quận / huyện</option>
                      {/* Options */}
                    </select>
                  </div>
                </div>
                <div className="delivery-content-left-input-bottom">
                  <label>Địa chỉ <span style={{ color: 'red' }}>*</span></label>
                  <input 
                    type="text" 
                    value={address} 
                    onChange={(e) => setAddress(e.target.value)} 
                  />
                </div>
                <div className="delivery-content-left-bottom row">
                  <a href="cart" style={{ color: 'black' }}>Giỏ hàng</a>
                  <button 
                    style={{ fontWeight: 'bold' }} 
                    onClick={handleCheckout}
                  >
                    Hoàn tất đơn hàng
                  </button>
                </div>
              </div>
              <div className="delivery-content-right">
                <table>
                  <thead>
                    <tr>
                      <th style={{ fontWeight: 'bold' }}>Sản phẩm</th>
                      <th style={{ fontWeight: 'bold' }}>Tên sản phẩm</th>
                      <th style={{ fontWeight: 'bold' }}>Số lượng</th>
                      <th style={{ fontWeight: 'bold' }}>Giá</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.map((item, index) => (
                      <tr key={index}>
                        <td>
                          <div className="product-thumbnail">
                            <img src={item.HinhURL} alt={item.TenSanPham} />
                            <span>{item.SoLuong}</span>
                          </div>
                        </td>
                        <td>{item.TenSanPham}</td>
                        <td>{item.SoLuong}</td>
                        <td><p style={{ color: 'black' }}>{item.GiaSanPham}</p></td>
                      </tr>
                    ))}
                  </tbody>
                  <tr>
                    <td colSpan={3} style={{ textAlign: 'left', fontWeight: 'bold' }}>Tổng: </td>
                    <td className="tongtien" style={{ fontWeight: 'bold' }}>
                      <p style={{ color: 'black' }}>{totalPrice.toLocaleString('vi-VN') + ' VNĐ'} </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} style={{ textAlign: 'left', fontWeight: 'bold' }}>Tổng tiền hàng: </td>
                    <td className="tongtienhang" style={{ fontWeight: 'bold' }}>
                      <p style={{ color: 'black' }}>{totalPrice.toLocaleString('vi-VN') + ' VNĐ'}</p>
                    </td>
                  </tr>
                </table>
                <div className="giamgia">
                  <input type="text" placeholder="Mã giảm giá" />
                  <button>Sử dụng</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Oder;
