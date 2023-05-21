import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

const AddProductModal = ({ isOpen, onClose, onAddProduct }) => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleAddProduct = () => {
    // Validasi atau manipulasi data sebelum menambahkan produk
    const newProduct = {
      name: productName,
      price: productPrice,
    };

    // Panggil fungsi onAddProduct untuk menambahkan produk
    onAddProduct(newProduct);

    // Reset form input
    setProductName("");
    setProductPrice("");

    // Tutup modal
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <FormControl>
            <FormLabel>Product Name</FormLabel>
            <Input
              type="text"
              value={productName}
              onChange={handleProductNameChange}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Product Price</FormLabel>
            <Input
              type="number"
              value={productPrice}
              onChange={handleProductPriceChange}
            />
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleAddProduct}>
            Add
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddProductModal;
