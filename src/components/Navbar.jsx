import { List, VStack, ListItem, Box } from "@chakra-ui/react";
import { navData } from "../utils/NavData";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <List
      display={"flex"}
      px={"30px"}
      h={"87px"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      {navData?.map((nav) => {
        const { title, link, icons, id } = nav;

        return (
          <ListItem key={id}>
            <NavLink to={link}>
              {({ isActive }) => (
                <VStack gap={"10px"} h={"45px"}>
                  <Box h={"20px"} w={"20px"}>
                    {isActive ? icons?.active : icons?.inActive}
                  </Box>
                  <Box>{title}</Box>
                </VStack>
              )}
            </NavLink>
          </ListItem>
        );
      })}
    </List>
  );
};

export default Navbar;
