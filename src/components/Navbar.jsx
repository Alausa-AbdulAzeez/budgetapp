import { List, VStack, ListItem, Box } from "@chakra-ui/react";
import { navData } from "../utils/NavData";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const style = {
    // filter: 'blur(10px)',
    boxShadow: "0px -5px 20px 5px rgba(0, 0, 0, 0.04)",
  };

  return (
    <List
      display={"flex"}
      px={"30px"}
      h={"87px"}
      justifyContent={"space-between"}
      alignItems={"center"}
      position={"fixed"}
      left={0}
      bottom={0}
      w={"100%"}
      fontSize={"12px"}
      color={"#C1C4CD"}
      sx={style}
      bg={"white"}
    >
      {navData?.map((nav) => {
        const { title, link, icons, id } = nav;

        return (
          <ListItem key={id}>
            <NavLink to={link}>
              {({ isActive }) =>
                title === "Chat" ? (
                  <VStack gap={"10px"} h={"45px"}>
                    <Box w={"25px"} h={"20px"}>
                      {isActive ? icons?.active : icons?.inActive}
                    </Box>
                    <Box color={isActive ? "#000" : "inherit"}>{title}</Box>
                  </VStack>
                ) : (
                  <VStack gap={"10px"} h={"45px"}>
                    <Box>{isActive ? icons?.active : icons?.inActive}</Box>
                    <Box color={isActive ? "#000" : "inherit"}>{title}</Box>
                  </VStack>
                )
              }
            </NavLink>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Navbar;
