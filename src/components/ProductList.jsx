import React from "react";
import DeleteProductButton from "./DeleteProductButton";

const ProductList = ({ products, deleteProduct }) => {
  return (
    <div>
      {products.length === 0 ? (
        <p className="text-center text-gray-500">No Products Found</p>
      ) : (
        products.map((product, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 mb-2 shadow rounded bg-white">
            <h4 className="font-bold">{product.name}</h4>
            <p>${product.price}</p>
            <DeleteProductButton onDelete={() => deleteProduct(index)} />
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
