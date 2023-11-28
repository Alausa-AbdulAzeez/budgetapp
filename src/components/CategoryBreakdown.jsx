import { Box, Text } from "@chakra-ui/react";
import React from "react";
import CircleWithIconAndProgress from "./CirleWithIconAndProgress";
import { Food, Save } from "../assets/icons";

const CategoryBreakdown = () => {
  // CATEGORIES
  const categories = [
    {
      title: "Food and Drink",
      percent: "40",
      amount: "₦20,000",
      total: "₦42,000",
      icon: Food,
      color: "#C89104",
    },
    {
      title: "Savings",
      percent: "20",
      amount: "₦10,000",
      total: "₦24,000",
      icon: Save,
      color: "#038A39",
    },
  ];

  return (
    <Box>
      <Text
        ml="30px"
        color="#001233"
        fontSize="21px"
        fontWeight="500"
        mt="40px"
        mb="10px"
      >
        Category Breakdown
      </Text>
      <Box
        bg="#FCFEFF"
        borderRadius="10px"
        minHeight="200px"
        px="30px"
        py="20px"
      >
        {categories?.map((category, index) => {
          const { title, percent, amount, icon, color, alt } = category;
          return (
            <Box
              key={index}
              display="flex"
              justifyContent="space-between"
              mb={"20px"}
            >
              <Box display="flex" gap="10px">
                <CircleWithIconAndProgress
                  percent={percent}
                  icon={icon}
                  color={color}
                  title={title}
                />
                <Box>
                  <Text fontSize="14px" fontWeight={500} color={"#001233"}>
                    {title}
                  </Text>
                  <Text fontSize="14px" fontWeight={500} color={"#707480"}>
                    {percent}%
                  </Text>
                </Box>
              </Box>
              <Text fontSize="16px" fontWeight={500} color={"#001233"}>
                {amount}
              </Text>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default CategoryBreakdown;
