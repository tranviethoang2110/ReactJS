import React, { useEffect, useState } from 'react';
import Banner from '../../components/users/Banner';
import '../../assets/users/css/trangchu2.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

type Product = {
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

export default function Home() {
    // const [categories, setCategories] = useState<Category[]>([]);
    // const [categoryId, setCategoryId] = useState(0);
    const[bestSellingProducts,setBestSellingProducts]=useState<Product[]>([]);
    const [sanPhamMoiVe,setSanPhamMoiVe]=useState<Product[]>([]);
    // const[data1,setData1]=useState<Product[]>([]);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const [bestSellingRes, newProductsRes] = await Promise.all([
                    axios.get(`http://localhost:7000/api/thong-ke/san-pham-ban-chay`),
                    axios.get('http://localhost:7000/api/san-pham/san-pham-moi-ve')
                ]);
                
                const topProducts = bestSellingRes.data.slice(0, 9);
                setBestSellingProducts(topProducts);
                if (Array.isArray(newProductsRes.data)) {
                    const topMoiVe=newProductsRes.data.slice(0,8)
                    setSanPhamMoiVe(topMoiVe);
                } else {
                    console.error("Expected an array for new products, got:", newProductsRes.data);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };
    
        fetchProducts();
    }, []);
    
   
    const navigate=useNavigate();
    return (
        <>
            <Banner />
            <div className="header-index">
                <ul className="header-list-lv1">
                    <li><a href="">BEST SELLER</a></li>
                    <li>
                        <a href="">SẢN PHẨM</a>
                        <ul className="header-list-lv2">
                            <li><a href="./products/">TẤT CẢ SẢN PHẨM</a></li>
                            {/* <li><a href="#">ÁO THUN</a></li>
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

            <main className="index">
                <div className="container">
                    <div className="banner">
                        <img src="/../../users/anhweb/banner.webp" alt="" style={{ width: '100%' }} />
                    </div>
                </div>

                <div className="container2" id="container2">
                    <div className="list-banner">
                        <div className="coll-left">
                            <div className="banner-1">
                                <a href="">
                                    <img src="/../../users/anhweb/banner1.webp" alt="" style={{ width: '321px', height: '341px' }} />
                                    <div className="img-cap">
                                        <p>LAZY*THINK COLLECTION</p>
                                    </div>
                                </a>
                            </div>
                            <div className="banner-2">
                                <a href="">
                                    <img src="/../../users/anhweb/artboard_8_6b1e64a38c1f4f1788e48515a7076f94.webp" alt="" style={{ width: '321px', height: '341px' }} />
                                    <div className="img-cap">
                                        <p>LAZY*THINK COLLECTION</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="coll-right">
                            <div className="banner3">
                                <a href="">
                                    <img src="/../../users/anhweb/banner3.webp" alt="" style={{ width: '321px', height: '717px' }} />
                                    <div className="img-cap">
                                        <p>LAZY*THINK COLLECTION</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container3">
                    <div className="list-banner2">
                        <div className="row">
                            <div className="banneranh">
                                <a href="" className="aspect-ratio">
                                    <img src="/../../users/anhweb/artboard_10_54f7b5b17e8f4b51a7812a065fff39a4.webp" alt="" style={{ width: '475px', height: '342px' }} />
                                    <div className="lazything">
                                        <p></p>
                                    </div>
                                </a>
                            </div>
                            <div className="banneranh">
                                <a href="" className="aspect-ratio">
                                    <img src="/../../users/anhweb/artboard_11_bd77f1c0eb094bdc8e6fa2f6bab2b955.webp" alt="" style={{ width: '475px', height: '342px' }} />
                                    <div className="lazything">
                                        <p></p>
                                    </div>
                                </a>
                            </div>
                            <div className="banneranh">
                                <a href="" className="aspect-ratio">
                                    <img src="/../../users/anhweb/artboard_13_d88dca37a3274a4991047ba9b5f4c789.webp" alt="" style={{ width: '475px', height: '342px' }} />
                                    <div className="lazything">
                                        <p></p>
                                    </div>
                                </a>
                            </div>
                            <div className="banneranh">
                                <a href="" className="aspect-ratio">
                                    <img src="/../../users/anhweb/artboard_12_4ded3a1ccc49470db941ab38abebbf10.webp" alt="" style={{ width: '475px', height: '342px' }} />
                                    <div className="lazything">
                                        <p></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg2">
                    <div className="container4">
                        <div className="banner-left">
                            <a href="">
                                <img src="/../../users/anhweb/artboard_4_bbc93c74bb384598ac298bde66f4eaee.webp" alt="" style={{ width: '474px', height: '633px' }} />
                            </a>
                            <div className="img--cap">
                                <p>FALL / WINTER 2023</p>
                            </div>
                        </div>
                        <div className="banner-right">
                            <a href="">
                                <img src="/../../users/anhweb/artboard_5_6577b09b7094401c88a75032826e8e23.webp" alt="" style={{ width: '474px', height: '633px' }} />
                            </a>
                            <div className="img--cap">
                                <p>FALL / WINTER 2023</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lazything-collection">
                    <a href="" className="ratio">
                        <img src="/../../users/anhweb/fff_50618d85031e421d8413bd1fbdd8bfa3.webp" alt="" />
                    </a>
                </div>

                <div className="conlection-best">
                    <div className="container5">
                        <div className="s-title">
                            <h2>
                                <a href="" style={{ color: 'black' }}>BEST-SELLING ITEMS</a>
                                {/* <i className="arrow"> */}
                                {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="" height="" x="0" y="0" viewBox="0 0 490.677 490.677" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className=""> */}
                                <g>
                                    <g xmlns="http://www.w3.org/2000/svg">
                                        <g>
                                            <path d="M489.272,37.339c-1.92-3.307-5.44-5.333-9.259-5.333H10.68c-3.819,0-7.339,2.027-9.259,5.333    c-1.899,3.307-1.899,7.36,0.021,10.667l234.667,405.333c1.899,3.307,5.419,5.333,9.237,5.333s7.339-2.027,9.237-5.333    L489.251,48.005C491.149,44.72,491.149,40.645,489.272,37.339z" fill="#000000" data-original="#000000" className=""></path>
                                        </g>
                                    </g>
                                </g>
                                {/* </svg> */}
                                {/* </i> */}
                            </h2>
                        </div>
                        <div className="best-selling">

                        {bestSellingProducts.map((item=>(
                            <div className="ao1">
                            <a href="" onClick={() => navigate(`/detail/${item.MaSanPham}`)}>
                                <img className="ca" style={{ width: '284px', height: '284px' }} src={item.HinhURL} onMouseDown={() => { }} onMouseOver={() => { }} alt="" />
                            </a>
                            <div className="title">
                                <h3>
                                    <a href="" >
                                        {item.TenSanPham}
                                    </a>
                                </h3>
                                <div className="product-loop-1">
                                    <span>{item.GiaSanPham} VND</span>
                                </div>
                            </div>
                            <div className="new">
                                <div>BSL</div>
                            </div>
                            <div className="product-click">
                                <div className="xn">
                                    <a href="">XEM NHANH</a>
                                </div>
                                <div className="ct">
                                    <a href="" className="detail" >CHI TIẾT</a>
                                </div>
                            </div>
                        </div>
                        )))}


                        </div>
                        <div className="best-selling">

                        


                        </div>
                    </div>
                    <div className="content-paging">

                    </div>
                </div>

                <div className="lazything-collection">
                    <a href="" className="ratio">
                        <img src="/../../users/anhweb/rongchoi.jpg" alt="" />
                    </a>
                </div>

                <div className="end-off">
                    <div className="s-title">
                        <h2>
                            <a href="" style={{ color: 'black' }}>Sản Phẩm Mới Về</a>
                            {/* <i className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="" height="" x="0" y="0" viewBox="0 0 490.677 490.677" style={{ enableBackground: 'new 0 0 512 512' }} xmlSpace="preserve" className="">
                    <g>
                        <g xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <path d="M489.272,37.339c-1.92-3.307-5.44-5.333-9.259-5.333H10.68c-3.819,0-7.339,2.027-9.259,5.333c-1.899,3.307-1.899,7.36,0.021,10.667l234.667,405.333c1.899,3.307,5.419,5.333,9.237,5.333s7.339-2.027,9.237-5.333L489.251,48.005C491.149,44.72,491.149,40.645,489.272,37.339z" fill="#000000" data-original="#000000" className=""></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </i> */}
                        </h2>
                    </div>
                    <div className="best-selling">
                        {sanPhamMoiVe.map((sp) => (
                            <div className="ao1" key={sp.MaSanPham}>
                            <a href={`/detail/${sp.MaSanPham}`}>
                                <img
                                className="ca"
                                style={{ width: '284px', height: '284px' }}
                                src={sp.HinhURL}
                                alt={sp.TenSanPham}
                                />
                            </a>
                            <div className="title">
                                <h3>
                                <a href={`/detail/${sp.MaSanPham}`}>{sp.TenSanPham}</a>
                                </h3>
                                <div className="product-loop-1">
                                <span>{sp.GiaSanPham.toLocaleString()} VND</span>
                                </div>
                            </div>
                            
                                <div className="new">
                                <div>NEW</div>
                                </div>
                            
                            <div className="product-click">
                                <div className="xn">
                                <a href={`/quick-view/${sp.MaSanPham}`}>XEM NHANH</a>
                                </div>
                                <div className="ct">
                                <a href={`/detail/${sp.MaSanPham}`} className="detail">
                                    CHI TIẾT
                                </a>
                                </div>
                            </div>
                            </div>
                        ))}
                    </div>

                </div>

            </main>
        </>
    );
}
