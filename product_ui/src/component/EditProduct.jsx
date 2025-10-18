import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import productService from "../service/product.service";


const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        id: "",
        productName: "",
        description: "",
        price: "",
        status: "",
    });

    const [msg, setMsg] = useState("");

    useEffect(() => {
        productService
            .getProductById(id)
            .then((res) => setProduct(res.data))
            .catch((error) => console.log(error));
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const updateProduct = (e) => {
        e.preventDefault();

        productService
            .editProduct(product)
            .then(() => {
                setMsg("✅ Product updated successfully!");
                setTimeout(() => navigate("/"), 1500);
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="container my-5">
            <div className="col-md-8 col-lg-6 mx-auto">
                <div className="card border-0 shadow-lg rounded-4">
                    <div
                        className="card-header bg-gradient text-center py-3"
                        style={{
                            background: "linear-gradient(90deg, #007bff, #00b4d8)",
                            color: "#212529" // Dark text color
                        }}
                    >
                        <h4 className="fw-bold mb-0">✏️ Edit Product</h4>
                    </div>



                    <div className="card-body p-4">
                        {msg && (
                            <div className="alert alert-success text-center py-2 mb-3 rounded-3 shadow-sm">
                                {msg}
                            </div>
                        )}

                        <form onSubmit={updateProduct}>
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    name="productName"
                                    id="productName"
                                    value={product.productName}
                                    onChange={handleChange}
                                    className="form-control shadow-sm"
                                    placeholder="Enter Product Name"
                                    required
                                />
                                <label htmlFor="productName">Product Name</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    name="description"
                                    id="description"
                                    value={product.description}
                                    onChange={handleChange}
                                    className="form-control shadow-sm"
                                    placeholder="Enter Description"
                                    required
                                />
                                <label htmlFor="description">Description</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="number"
                                    name="price"
                                    id="price"
                                    value={product.price}
                                    onChange={handleChange}
                                    className="form-control shadow-sm"
                                    placeholder="Enter Price"
                                    required
                                />
                                <label htmlFor="price">Price (₹)</label>
                            </div>

                            <div className="form-floating mb-4">
                                <input
                                    type="text"
                                    name="status"
                                    id="status"
                                    value={product.status}
                                    onChange={handleChange}
                                    className="form-control shadow-sm"
                                    placeholder="Enter Status"
                                    required
                                />
                                <label htmlFor="status">Status</label>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100 py-2 fw-semibold rounded-3 shadow-sm"
                                style={{
                                    background: "linear-gradient(90deg, #007bff, #00b4d8)",
                                    border: "none",
                                }}
                            >
                                💾 Update Product
                            </button>
                        </form>
                    </div>

                    <div className="card-footer text-center bg-light py-3">
                        <button
                            onClick={() => navigate("/")}
                            className="btn btn-outline-secondary btn-sm rounded-3"
                        >
                            ← Back to Product List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;
