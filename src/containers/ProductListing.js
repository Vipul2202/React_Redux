import React, { useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productsActions";
import ProductComponent from "./ProductComponent";
const ProductPage = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const memoizedValue = useMemo(() => {
    // compute and return the memoized value
    // based on some dependencies
  }, [ProductPage ]);
  console.log("Products :", products);
  return (
    <div className="ui grid container">
      <ProductComponent />{memoizedValue }
    </div>
  );
};

export default ProductPage;
