import { Box } from "@chakra-ui/react";
import PageTitle from "../components/PageTitle";
import MonthlyBudget from "../components/MonthlyBudget";
import CategoryBreakdown from "../components/CategoryBreakdown";

const Home = () => {
  return (
    <Box>
      <PageTitle />
      <MonthlyBudget />
      <CategoryBreakdown />
    </Box>
  );
};

export default Home;
