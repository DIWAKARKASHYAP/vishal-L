import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";

const Cart = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [modalTrigger, setModalTrigger] = useState(false);

    useEffect(() => {
        // Fetch data from CRUD CRUD API when the component mounts
        fetchData();
    }, [modalTrigger]);

    const fetchData = async () => {
        try {
            const response = await axios.get(
                "https://crudcrud.com/api/fdc4d5e011d24071947d066e06fa2c15/tshirt"
            );

            if (response.status === 200) {
                setCartItems(response.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error.message);
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleModalClose = () => {
        closeModal();
        setModalTrigger(!modalTrigger); // Toggle the modalTrigger to trigger re-render
    };

    const filteredCartItems = cartItems.filter(
        (item) =>
            item.quantities.L !== item.quantities.OL ||
            item.quantities.M !== item.quantities.OM ||
            item.quantities.S !== item.quantities.OS
    );

    console.log("filter data ", filteredCartItems);
    return (
        <div>
            <button onClick={openModal}>Open Cart</button>
            <Modal
                isOpen={isModalOpen}
                onRequestClose={handleModalClose}
                contentLabel="Cart Modal"
            >
                <h2>Shopping Cart</h2>
                <ul>
                    {filteredCartItems.map((item) => (
                        <li key={item._id}>
                            <p>Tshirt name: {item.tshirtName}</p>
                            <p>Description: {item.description}</p>
                            <p>Price: {item.price}</p>
                            {item.quantities.OL === item.quantities.L ? null : (
                                <div>
                                    L Quantity:{" "}
                                    {item.quantities.OL - item.quantities.L}
                                </div>
                            )}
                            {item.quantities.OM === item.quantities.M ? null : (
                                <div>
                                    M Quantity:{" "}
                                    {item.quantities.OM - item.quantities.M}
                                </div>
                            )}
                            {item.quantities.OS === item.quantities.S ? null : (
                                <div>
                                    S Quantity:{" "}
                                    {item.quantities.OS - item.quantities.S}
                                </div>
                            )}
                            {item.quantities.L +
                                item.quantities.M +
                                item.quantities.S}
                        </li>
                    ))}
                </ul>
            </Modal>
        </div>
    );
};

export default Cart;
