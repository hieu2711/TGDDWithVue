import { endpoints } from "@/configs";
import axios from "axios";

export const fetchProduct = async (limit, list, endpoints) => {
    try {
      const res = await axios.get(endpoints, {
        params: {
          limit: limit,
        }
      });
      list.value = res.data;
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
    }
  };

export const fetchProductByCategory = async (list, category, limit) => {
  try {
    const res = await axios.get(endpoints.getProductByCategory, {
      params: {
        category: category,
        limit: limit
      }
    });
    list.value = res.data;
  } catch (error) {
    console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
  }
};

export const fetchProductSort = async (list, category, limit, sort) => {
    try {
      const res = await axios.get(endpoints.getSortProduct, {
        params: {
          category: category,
          limit: limit,
          sort: sort
        }
      });
      list.value = res.data;
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
    }
  };

  export const fetchCountProduct = async (list, category,brand) => {
    try {
      const res = await axios.get(endpoints.getProductCount, {
        params: {
          category: category,
          brand: brand
        }
      });
      list.value = res.data;
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
    }
  };

  export const fetchProductByBrandAndCategory = async (list, category, brand) => {
    try {
      const res = await axios.get(endpoints.getProductByBrandAndCategory, {
        params: {
          categoryName: category,
          brand: brand
        }
      });
      list.value = res.data;
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
    }
  };

  
  export const fetchProductByPriceAndCategory = async (list,count, category, price) => {
    try {
      const res = await axios.get(endpoints.getProductByPriceAndCategory, {
        params: {
          categoryName: category,
          priceRange:price
        }
      });
      list.value = res.data.products;
      count.value = res.data.count;
    } catch (error) {
      console.error('Lỗi khi lấy dữ liệu sản phẩm:', error);
    }
  };