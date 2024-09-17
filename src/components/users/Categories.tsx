import React, {useEffect,useState} from 'react';
import '../../assets/users/css/danhsachsanpham.css'
import '../../assets/users/js/danhsachsanpham.js'
import axios from 'axios';
import SidebarMenu from './SidebarMenu';
import { Link, useNavigate } from 'react-router-dom';
import { error } from 'console';

type ProductItem = {
    maSP: number;
    maTH: number;
    tenMH: string;
    maLoai: number;
    soLuongton: number;
    giaBan: number;
    image_SP: string;
    mota: string;
    sldaban: number;
    luotxem: number;
    trangthai: string;
};
type Category = {
    maLoai: number;
    tenLoai: string;
};

function Category() {

    const [categories,setCategoties]=useState<Category[]>([]);
    const [categoryId,setCategoryId]=useState();
    useEffect(()=>{
        axios.get('https://localhost:44329/api/TheLoai/GetAll_TheLoai')
        .then((response)=>setCategoties(response.data))
        .catch((error)=>console.log(error))
    },[]);

    const[products,setProducts]=useState<ProductItem[]>([]);
    const LoadDataProduct=()=>{
        axios.get('https://localhost:44329/api/SanPham/GetAll_SanPham')
        .then((response)=>{
            if(categoryId===0){
                setProducts(response.data)
            }else{
                const ListProduct=response.data.filter((product:any)=>product.maLoai===categoryId);
                setProducts(ListProduct)

            }
        })
        .catch((error)=>console.log(error))
    }

    // const fetProducts= async () =>{
    //     try {
    //         const res= await axios.get('https://localhost:44329/api/SanPham/GetAll_SanPham')
    //         console.log("products =>",res.data)
    //         setProducts(res.data)
    //     } catch (error) {
    //         console.log("error=>",error)
    //     }
    // }
    
    useEffect(() =>{
        LoadDataProduct()
        
    },[categoryId])

    const getCategoryId = (maLoai: any) => {
        setCategoryId(maLoai);
    };

    return (  
        <div className="header-index">
                <ul className="header-list-lv1">
                    <li><a href="">BEST SELLER</a></li>
                    <li>
                        <a href="">SẢN PHẨM</a>
                        <ul className="header-list-lv2">
                            <li><a href="./products">TẤT CẢ SẢN PHẨM</a></li>
                            {
                                categories.map(cat=>(
                                    <li key={cat.maLoai} onClick={()=>getCategoryId(cat.maLoai)}><a >{cat.tenLoai}</a></li>
                                ))
                            }
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
        
 );
}

export default Category;