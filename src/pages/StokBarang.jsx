import React from "react";
import { Box, Heading, Text, Flex, Button, Input } from "@chakra-ui/react";
import BaseLayout from "../components/Baselayout";
import { faker } from "@faker-js/faker/locale/id_ID";
import Pagination from "../components/Pagination";
import { useState } from "react";
import Table from "../components/Table";
import AddProductModal from "../components/AddProductModal";

const InventoryPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    // Menambahkan produk ke daftar produk
    setProducts([...products, newProduct]);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const generateData = (count) => {
    const data = [];
    for (let i = 0; i < count; i++) {
      const row = {
        id_produk: i + 1,
        nama_produk: faker.commerce.product(),
        deskripsi: faker.company.bs(),
        harga: faker.commerce.price(),
        stok: faker.random.numeric(2),
        // ... tambahkan kolom lain sesuai kebutuhan
      };
      data.push(row);
    }
    return data;
  };

  const data = generateData(100);

  const columns = [
    {
      header: "ID Produk",
      accessor: "id_produk",
    },
    {
      header: "Nama Produk",
      accessor: "nama_produk",
    },
    {
      header: "Deskripsi",
      accessor: "deskripsi",
    },
    {
      header: "Harga",
      accessor: "harga",
    },
    {
      header: "Stok",
      accessor: "stok",
    },
  ];
  return (
    <BaseLayout>
      <div className="p-16 rounded-lg bg-white">
        <Box p={4} className="bg-white rounded-lg">
          <Heading size="lg" mb={4}>
            Inventory
          </Heading>
          <div className="w-full  flex flex-row justify-between  py-5">
            <div className="flex flex-row justify-center items-center gap-4">
              <Input
                placeholder="Search"
                size={"md"}
                color={"teal"}
                w={400}
              ></Input>
              <Button>Search</Button>
            </div>
            <div>
              <Button colorScheme="teal" mr={2} onClick={handleOpenModal}>
                Add Product
              </Button>
              <Button colorScheme="gray">Export CSV</Button>
            </div>
          </div>
          <Table columns={columns} data={data} itemsPerPage={10} />
        </Box>
      </div>
      <AddProductModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onAddProduct={handleAddProduct}
      />
    </BaseLayout>
  );
};

export default InventoryPage;
