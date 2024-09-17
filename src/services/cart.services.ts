import { apiClient } from "../constant/api";

  export const createOrder = async (
    data: any,
  ): Promise<any> => {
   console.log(data);
    const res = await apiClient?.post(`/api/GioHang/add_toCart`, data);  
    return res?.data;
  };