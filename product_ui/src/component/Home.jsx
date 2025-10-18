import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productService from "../service/product.service";


const Home = () => {
  const [productList, setProductList] = useState([]);
  const [msg, setMsg] = useState("");

  const mydeleteProduct = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      productService
        .deleteProduct(id)
        .then(() => {
          setMsg("✅ Product deleted successfully!");
          // Refresh list
          productService.getAllProduct().then((res) => {
            setProductList(res.data);
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    productService
      .getAllProduct()
      .then((res) => {
        setProductList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow-lg border-0">
        <div
          className="card-header text-white text-center fs-3 fw-bold"
          style={{ background: "linear-gradient(90deg, #28a745, #20c997)" }}
        >
          🌿 All Product List
        </div>

        {msg && (
          <div className="alert alert-success text-center mt-3 mx-3 fw-semibold">
            {msg}
          </div>
        )}

        <div className="card-body p-4">
          {productList.length === 0 ? (
            <p className="text-center fs-5 text-muted">
              No products available. Click “Add Product” to create one!
            </p>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover align-middle text-center">
                <thead className="table-success">
                  <tr>
                    <th>#</th>
                    <th>Product Name</th>
                    <th>Description</th>
                    <th>Price (₹)</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {productList.map((p, num) => (
                    <tr key={p.id || num}>
                      <td>{num + 1}</td>
                      <td className="fw-semibold text-capitalize">{p.productName}</td>
                      <td>{p.description}</td>
                      <td className="fw-bold text-success">{p.price}</td>
                      <td>
                        <span
                          className={`badge ${
                            p.status === "Available"
                              ? "bg-success"
                              : "bg-secondary"
                          }`}
                        >
                          {p.status}
                        </span>
                      </td>
                      <td>
                        <Link
                          to={`/editProduct/${p.id}`}
                          className="btn btn-outline-primary btn-sm me-2"
                        >
                          ✏️ Edit
                        </Link>
                        <button
                          onClick={() => mydeleteProduct(p.id)}
                          className="btn btn-outline-danger btn-sm"
                        >
                          🗑 Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
