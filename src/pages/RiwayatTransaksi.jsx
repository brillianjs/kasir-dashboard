import React from "react";
import {
  Box,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import BaseLayout from "../components/Baselayout";

const TransactionHistoryPage = () => {
  // Data dummy untuk riwayat transaksi
  const transactions = [
    { id: 1, date: "2023-05-01", product: "Product A", amount: 100 },
    { id: 2, date: "2023-05-02", product: "Product B", amount: 50 },
    { id: 3, date: "2023-05-03", product: "Product C", amount: 75 },
    // Tambahkan data transaksi lainnya sesuai kebutuhan
  ];

  return (
    <BaseLayout>
      <div className="p-20 rounded-lg bg-white">
        <Box p={4}>
          <Heading size="lg" mb={4}>
            Transaction History
          </Heading>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Date</Th>
                <Th>Product</Th>
                <Th>Amount</Th>
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((transaction) => (
                <Tr key={transaction.id}>
                  <Td>{transaction.id}</Td>
                  <Td>{transaction.date}</Td>
                  <Td>{transaction.product}</Td>
                  <Td>{transaction.amount}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </div>
    </BaseLayout>
  );
};

export default TransactionHistoryPage;
