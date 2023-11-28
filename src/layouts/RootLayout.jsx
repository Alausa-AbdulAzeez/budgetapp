import { Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <Flex
      direction={"column"}
      position={"relative"}
      bg={"#FCFCFC"}
      height={"calc(100vh - 100px)"}
      overflowY="auto"
    >
      <Outlet />
      <Navbar />
    </Flex>
  );
};

export default RootLayout;
