import React, { useEffect, useState } from 'react';
import '../../assets/users/css/danhsachsanpham.css';
import '../../assets/users/js/danhsachsanpham.js';
import axios from 'axios';
import SidebarMenu from '../../components/users/SidebarMenu';
import { Link, useNavigate } from 'react-router-dom';

type ProductItem = {
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
};

type Category = {
    MaLoaiSanPham: number;
    TenLoaiSanPham: string;  
};

const Product: React.FC = () => {

    const [categories, setCategories] = useState<Category[]>([]);
    const [categoryId, setCategoryId] = useState(0);
    const [products, setProducts] = useState<ProductItem[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:7000/api/danh-muc/get-all')
            .then((response) => setCategories(response.data))
            .catch((error) => console.log(error));
    }, []);

    const LoadDataProduct = () => {
        axios
            .get('http://localhost:7000/api/san-pham/get-all')
            .then((response) => {
                const allProducts = response.data;
                if (categoryId !== 0) {
                    const filteredProducts = allProducts.filter((product: ProductItem) => product.MaLoaiSanPham === categoryId);
                    setProducts(filteredProducts);
                } else {
                    setProducts(allProducts);
                }
            })
            .catch((error) => console.log(error));
    };

    useEffect(() => {
        LoadDataProduct();
    }, [categoryId]);

    const getCategoryId = (MaLoaiSanPham: number) => {
        setCategoryId(MaLoaiSanPham);
    };

    return (
        <>
            <div className="header-index">
                <ul className="header-list-lv1">
                    <li><a href="#">BEST SELLER</a></li>
                    <li>
                        <a href="#">SẢN PHẨM</a>
                        <ul className="header-list-lv2">
                            <li><Link to="/products">TẤT CẢ SẢN PHẨM</Link></li>
                            {categories.map(cat => (
                                <li key={cat.MaLoaiSanPham} onClick={() => getCategoryId(cat.MaLoaiSanPham)}>
                                    <a>{cat.TenLoaiSanPham}</a>
                                </li>
                            ))}
                        </ul>
                    </li>
                    <li>
                        <a href="#">BỘ SƯU TẬP</a>
                        <ul className="header-list-lv2">
                            <li><a href="#">BỘ SƯU TẬP BASIC</a></li>
                            <li><a href="#">BỘ SƯU TẬP LUCKY YEAR</a></li>
                            <li><a href="#">BỘ SƯU TẬP #STEPOUT</a></li>
                            <li><a href="#">BỘ SƯU TẬP REMAKE</a></li>
                            <li><a href="#">BỘ SƯU TẬP NỮ</a></li>
                            <li><a href="#">PHỤ KIỆN</a></li>
                        </ul>
                    </li>
                    <li><a href="#">BASIC LINE</a></li>
                    <li><a href="#">MAKE YOUR STYLE</a></li>
                    <li><a href="#">OUTLET SALE</a></li>
                    <li><a href="#">BAD RABBIT CLUB®</a></li>
                </ul>
            </div>
            <SidebarMenu />
            <div className="boxcenter">
                {products.length > 0 ? products.map(item => (
                    <div key={item.MaSanPham} className="boxpro">
                        <div className="boximg">
                            <img 
                                src={`${item.HinhURL}`} 
                                alt={item.TenSanPham} 
                                onClick={() => navigate(`/detail/${item.MaSanPham}`)} 
                            />
                            <div className="product-click">
                                <div className="xn">
                                    <Link to={`/detail/${item.MaSanPham}`}>XEM NHANH</Link>
                                </div>
                                <div className="ct">
                                    <Link to={`/detail/${item.MaSanPham}`} className="detail">CHI TIẾT</Link>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => navigate(`/detail/${item.MaSanPham}`)}>Mua ngay</button>
                        <br />
                        <div className="ten" onClick={() => navigate(`/detail/${item.MaSanPham}`)}>
                            {item.TenSanPham}
                        </div>
                        <strong>{item.GiaSanPham.toLocaleString('vi-VN') + ' VNĐ'}</strong>
                    </div>
                )) : <p>Không có sản phẩm nào</p>}
            </div>
        </>
    );
}

export default Product;
