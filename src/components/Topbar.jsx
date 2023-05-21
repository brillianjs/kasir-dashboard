import React from "react";
import {
  Box,
  Flex,
  IconButton,
  Icon,
  Button,
  Spacer,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from "@chakra-ui/react";
import { FiMenu, FiBell, FiUser } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { faker } from "@faker-js/faker/locale/id_ID";

const Topbar = ({ isSidebarExpanded, toggleSidebar }) => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handlePopoverOpen = () => {
    setIsPopoverOpen(true);
  };

  const handlePopoverClose = () => {
    setIsPopoverOpen(false);
  };

  const handleNotificationClick = () => {
    // Implementasikan logika untuk menangani klik notifikasi
  };

  const handleProfileClick = () => {
    // Implementasikan logika untuk menangani klik profil
  };

  const { pathname } = useLocation();
  function capitalizeWords(sentence) {
    const words = sentence.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
  }

  return (
    <Box
      as="header"
      bg="teal.500"
      color="white"
      px={4}
      py={2}
      boxShadow="md"
      position="fixed"
      top={0}
      left={isSidebarExpanded ? "250px" : "72px"}
      right={0}
      zIndex="sticky"
      transition="left 0.3s ease-in-out"
    >
      <Flex justify="space-between" align="center">
        <Box>
          <Breadcrumb spacing="8px" color="white">
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            {pathname != "/" && (
              <BreadcrumbItem>
                <BreadcrumbLink href={pathname}>
                  {capitalizeWords(pathname.replace("-", " ").replace("/", ""))}
                </BreadcrumbLink>
              </BreadcrumbItem>
            )}
          </Breadcrumb>
        </Box>
        <Spacer />
        <Box>
          <Popover
            isOpen={isPopoverOpen}
            onClose={handlePopoverClose}
            placement="bottom"
            closeOnBlur={false}
          >
            <PopoverTrigger>
              <IconButton
                aria-label="Notifications"
                icon={<Icon as={FiBell} />}
                variant="ghost"
                size="lg"
                mr={4}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
              />
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>
                Are you sure you want to have that milkshake?
              </PopoverBody>
            </PopoverContent>
          </Popover>
          <Button
            leftIcon={<Icon as={FiUser} />}
            colorScheme="teal"
            variant="solid"
            size="sm"
            onClick={handleProfileClick}
          >
            {"Wakhidah"}
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Topbar;
