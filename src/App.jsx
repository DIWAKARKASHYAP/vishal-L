// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import "./App.css";
import Form from "./component/Form";
import ShowData from "./component/ShowProduct";
import Cart from "./component/Cart";
// import Form from "./component/Form";
// import ShowProduct from "./component/ShowProduct";

function App() {
    const [updateShowData, setUpdateShowData] = useState(false);
    // useEffect(() => {
    const handleDataSubmitted = () => {
        setUpdateShowData(!updateShowData);
    };
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(
    //                 "https://crudcrud.com/api/06a4e24c080a46b3b819d1c31b36dd6c/tshirt"
    //             );
    //             setProducts(response.data);
    //         } catch (error) {
    //             console.error("Error fetching data:", error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    // const updateProduct = async (productId, size) => {
    //     try {
    //         const response = await axios.put(
    //             `https://crudcrud.com/api/06a4e24c080a46b3b819d1c31b36dd6c/tshirt/${productId}`,
    //             {
    //                 quantities: {
    //                     [size]:
    //                         products.find((p) => p._id === productId)
    //                             .quantities[size] - 1,
    //                 },
    //             }
    //         );

    //         if (response.status === 200) {
    //             setProducts((prevProducts) =>
    //                 prevProducts.map((product) =>
    //                     product._id === productId
    //                         ? {
    //                               ...product,
    //                               quantities: {
    //                                   ...product.quantities,
    //                                   [size]: product.quantities[size] - 1,
    //                               },
    //                           }
    //                         : product
    //                 )
    //             );
    //         } else {
    //             console.error(
    //                 "Failed to update product. Server response:",
    //                 response
    //             );
    //         }
    //     } catch (error) {
    //         console.error("Error updating product:", error.message);
    //     }
    // };

    return (
        <div className="app-container">
            <Cart />
            <h1>T-shirt Store</h1>
            <Form onDataSubmitted={handleDataSubmitted} />
            <ShowData key={updateShowData} />
            {/* <Form setProducts={setProducts} /> */}
            {/* <ShowProduct products={products} updateProduct={updateProduct} /> */}
        </div>
    );
}

export default App;
