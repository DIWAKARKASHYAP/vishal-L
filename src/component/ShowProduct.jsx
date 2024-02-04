// ShowData.js
import React, { useState, useEffect } from "react";
import axios from "axios";

const ShowData = () => {
    const [tshirtData, setTshirtData] = useState([]);

    useEffect(() => {
        // Fetch data from the CRUD CRUD API when the component mounts
        fetchData();
    }, []); // The empty dependency array ensures that this effect runs only once, equivalent to componentDidMount

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://crudcrud.com/api/fdc4d5e011d24071947d066e06fa2c15/tshirt"
            );
            console.log(response);
            setTshirtData(response.data);
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };

    const handleUpdateQuantity = async (id, index, size) => {
        try {
            const updatedQuentity = { ...tshirtData[index] };
            updatedQuentity.quantities[size] = Math.max(
                0,
                updatedQuentity.quantities[size] - 1
            );

            // Exclude _id property
            const { _id, ...updatedData } = updatedQuentity;

            console.log(updatedData);

            const response = await axios.put(
                `https://crudcrud.com/api/fdc4d5e011d24071947d066e06fa2c15/tshirt/${id}`,
                updatedData
            );

            console.log(
                `${size} quantity updated successfully for T-Shirt ID ${id}`
            );
            fetchData(); // Refresh data after updating quantity
        } catch (error) {
            console.error(`Error updating ${size} quantity:`, error.message);
        }
    };

    return (
        <div>
            <h2>Stored T-Shirt Data</h2>
            <ul>
                {tshirtData.map((tshirt, index) => (
                    <li key={index}>
                        <strong>T-Shirt Name:</strong> {tshirt.tshirtName},{" "}
                        <strong>Description:</strong> {tshirt.description},{" "}
                        <strong>Price:</strong> {tshirt.price},{" "}
                        <strong>Quantities:</strong>
                        <div>
                            <button
                                onClick={() =>
                                    handleUpdateQuantity(tshirt._id, index, "L")
                                }
                            >
                                add L: {tshirt.quantities.L}
                            </button>
                            <button
                                onClick={() =>
                                    handleUpdateQuantity(tshirt._id, index, "M")
                                }
                            >
                                add M: {tshirt.quantities.M}
                            </button>
                            <button
                                onClick={() =>
                                    handleUpdateQuantity(tshirt._id, index, "S")
                                }
                            >
                                add S: {tshirt.quantities.S}
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShowData;
