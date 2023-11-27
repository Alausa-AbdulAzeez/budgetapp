import { Flex, Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <Flex direction={"column"}>
      <Outlet />
      <Navbar />
    </Flex>
  );
};

export default RootLayout;
