import { Box } from "@mui/material";
import { useState } from "react";
import useWindowWidth from "../hooks/useScreenSize";
import BalanceNavbar from "./BalanceNavbar";
import GridLayout from "./CommonComponents/GridLayout";

const expensesCategories = [
  {
    categoryName: "Transportation",
    amount: 0,
    color: "red",
  },
  {
    categoryName: "Utilities",
    amount: 0,
    color: "yellow",
  },
  {
    categoryName: "Food",
    amount: 0,
    color: "green",
  },
  {
    categoryName: "Other things",
    amount: 12.99,
    color: "red",
  },
  {
    categoryName: "Rent",
    amount: 0,
    color: "blue",
  },
  {
    categoryName: "Home and Family",
    amount: 600.0,
    color: "green",
  },
];

const incomesCategories = [
  {
    categoryName: "Salary",
    amount: 700.0,
    color: "green",
  },
  {
    categoryName: "Other things",
    amount: 0,
    color: "green",
  },
];

const loansCategories = [
  {
    categoryName: "Qarzlar",
    amount: 0.0,
    color: "green",
  },
  {
    categoryName: "Savings",
    amount: 0,
    color: "green",
  },
  {
    categoryName: "Others",
    amount: 0,
    color: "green",
  },
];

const MainContent = () => {
  const [activeColumn, setActiveColumn] = useState(() => "incomes");
  const windowWidth = useWindowWidth();

  const defineActiveColumn = (columnName: string) => {
    return windowWidth <= 900 && activeColumn !== columnName;
  };

  return (
    <>
      <BalanceNavbar
        activeColumn={activeColumn}
        changeActiveColumn={(barName: string) => setActiveColumn(barName)}
      />

      <div className="main-content grid">
        <Box
          sx={{
            display: defineActiveColumn("expenses") ? "none" : "block",
          }}
        >
          <GridLayout items={expensesCategories} />
        </Box>
        <Box
          sx={{
            display: defineActiveColumn("incomes") ? "none" : "block",
          }}
        >
          <GridLayout items={incomesCategories} />
        </Box>
        <Box
          sx={{
            display: defineActiveColumn("loans") ? "none" : "block",
          }}
        >
          <GridLayout items={loansCategories} />
        </Box>
      </div>
    </>
  );
};

export default MainContent;
