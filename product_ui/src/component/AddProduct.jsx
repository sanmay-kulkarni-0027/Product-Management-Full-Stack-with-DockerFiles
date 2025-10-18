import React, { useState } from "react";
import productService from "../service/product.service";


const AddProduct = () => {
  const [product, setProduct] = useState({
    productName: "",
    description: "",
    price: "",
    status: "",
  });

  const [msg, setMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const ProductRegister = (e) => {
    e.preventDefault();
    productService
      .saveProduct(product)
      .then(() => {
        setMsg("✅ Product Added Successfully!");
        setProduct({
          productName: "",
          description: "",
          price: "",
          status: "",
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="col-md-6 offset-md-3">
        <div className="card shadow-lg border-0">
          <div
            className="card-header text-white text-center fs-3 fw-bold"
            style={{ background: "linear-gradient(90deg, #28a745, #20c997)" }}
          >
            ➕ Add New Product
          </div>

          {msg && (
            <div className="alert alert-success text-center fw-semibold mt-3 mx-3">
              {msg}
            </div>
          )}

          <div className="card-body px-4 py-4">
            <form onSubmit={ProductRegister}>
              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Product Name
                </label>
                <input
                  type="text"
                  name="productName"
                  className="form-control rounded-pill shadow-sm"
                  placeholder="Enter product name"
                  onChange={handleChange}
                  value={product.productName}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Product Description
                </label>
                <textarea
                  name="description"
                  className="form-control rounded shadow-sm"
                  placeholder="Enter short description"
                  rows="3"
                  onChange={handleChange}
                  value={product.description}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Price (₹)
                </label>
                <input
                  type="number"
                  name="price"
                  className="form-control rounded-pill shadow-sm"
                  placeholder="Enter price"
                  onChange={handleChange}
                  value={product.price}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label fw-semibold">
                  Status
                </label>
                <select
                  name="status"
                  className="form-select rounded-pill shadow-sm"
                  onChange={handleChange}
                  value={product.status}
                  required
                >
                  <option value="">Select status</option>
                  <option value="Available">Available</option>
                  <option value="Out of Stock">Out of Stock</option>
                  <option value="Discontinued">Discontinued</option>
                </select>
              </div>

              <button
                className="btn btn-success col-md-12 rounded-pill fw-semibold shadow-sm"
                style={{ background: "linear-gradient(90deg, #28a745, #20c997)" }}
              >
                🚀 Submit Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
