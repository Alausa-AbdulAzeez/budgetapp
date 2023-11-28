import React from "react";
import { CircularProgress, Box, Text, Flex } from "@chakra-ui/react";

const DonutChart = ({ data }) => {
  const colors = ["red", "green", "blue"]; // Add more colors as needed

  return (
    <CircularProgress value={100} color="gray" size="150px" thickness="12px">
      <Box position="relative" textAlign="center">
        {data.map((percentage, index) => (
          <CircularProgress
            key={index}
            value={percentage}
            color={colors[index]}
            thickness="10px"
            size="100%"
            trackColor="transparent"
            capIsRound
            isIndeterminate={percentage === 0}
          />
        ))}
        <Flex
          direction="column"
          align="center"
          justify="center"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
        >
          {data.map((percentage, index) => (
            <Box key={index} textAlign="center">
              <Text
                fontSize="sm"
                color={colors[index]}
              >{`${percentage}%`}</Text>
              {/* Replace the following with your actual icon component */}
              <Text fontSize="sm" color={colors[index]}>
                Icon
              </Text>
            </Box>
          ))}
        </Flex>
      </Box>
    </CircularProgress>
  );
};

export default DonutChart;
