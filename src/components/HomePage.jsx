import React, { useState, useEffect } from "react";
import AddProductForm from "./AddProductForm";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import LogoutButton from "./LogoutButton";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  const deleteProduct = (productId) => {
    const newProducts = products.filter((_, index) => index !== productId);
    setProducts(newProducts);
    setFilteredProducts(newProducts);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-8">
        <h1 className="text-center text-4xl font-extrabold text-gray-900 mb-10">
          Product Dashboard
        </h1>
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <AddProductForm setProducts={setProducts} products={products} />
            </div>
          </div>
          <div className="mt-6">
            <SearchBar
              products={products}
              setFilteredProducts={setFilteredProducts}
            />
          </div>
          <div className="mt-6">
            <ProductList
              products={filteredProducts}
              deleteProduct={deleteProduct}
            />
          </div>
          <div className="mt-6 flex justify-center">
            <LogoutButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
