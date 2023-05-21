import React from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import BaseLayout from "../components/Baselayout";

const SettingsDashboardPage = () => {
  return (
    <BaseLayout>
      <div className="p-16 rounded-lg bg-white">
        <Box p={4}>
          <Heading size="lg" mb={4}>
            Pengaturan Dashboard
          </Heading>
          <VStack spacing={4} align="start" width="400px">
            <FormControl id="siteName">
              <FormLabel>Nama Situs</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="siteDescription">
              <FormLabel>Deskripsi Situs</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="siteLogo">
              <FormLabel>Logo Situs</FormLabel>
              <Input type="file" />
            </FormControl>
            <FormControl id="primaryColor">
              <FormLabel>Warna Utama</FormLabel>
              <Input type="color" />
            </FormControl>
            <Button colorScheme="teal">Simpan Pengaturan</Button>
          </VStack>
        </Box>
      </div>
    </BaseLayout>
  );
};

export default SettingsDashboardPage;
