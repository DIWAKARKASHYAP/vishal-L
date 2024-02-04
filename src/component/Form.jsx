// TshirtForm.js
import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Form = ({ onDataSubmitted }) => {
    const [formData, setFormData] = useState({
        tshirtName: "",
        description: "",
        price: "",
        quantities: {
            L: 0,
            M: 0,
            S: 0,
            OS: 0,
            OL: 0,
            OM: 0,
        },
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleQuantityChange = (size, value) => {
        setFormData({
            ...formData,
            quantities: {
                ...formData.quantities,
                [size]: value,
                ["O" + size]: value,
            },
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "https://crudcrud.com/api/fdc4d5e011d24071947d066e06fa2c15/tshirt",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to submit form data");
            }

            console.log("Form submitted successfully");
            onDataSubmitted();
            // Optionally, you can handle a successful submission here
        } catch (error) {
            console.error("Error submitting form data:", error.message);
            // Optionally, you can handle an error here
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="tshirtName">T-Shirt Name:</label>
                <input
                    type="text"
                    id="tshirtName"
                    name="tshirtName"
                    value={formData.tshirtName}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                ></textarea>

                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    required
                />

                <label htmlFor="quantityL">Quantity (L):</label>
                <input
                    type="number"
                    id="quantityL"
                    name="quantityL"
                    value={formData.quantities.L}
                    onChange={(e) => handleQuantityChange("L", e.target.value)}
                    required
                />

                <label htmlFor="quantityM">Quantity (M):</label>
                <input
                    type="number"
                    id="quantityM"
                    name="quantityM"
                    value={formData.quantities.M}
                    onChange={(e) => handleQuantityChange("M", e.target.value)}
                    required
                />

                <label htmlFor="quantityS">Quantity (S):</label>
                <input
                    type="number"
                    id="quantityS"
                    name="quantityS"
                    value={formData.quantities.S}
                    onChange={(e) => handleQuantityChange("S", e.target.value)}
                    required
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
