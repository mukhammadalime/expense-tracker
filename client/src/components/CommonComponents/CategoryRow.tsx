import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { categoryType } from "../../utils/types";

const CategoryRow = ({ categoryName, amount, color }: categoryType) => {
  return (
    <div className="category-row flex cursor">
      <h2 style={{ color: color || "green" }}>{categoryName}</h2>
      <div className="category-row__right flex">
        <h3 className="white">{amount === 0 ? "0.00" : amount + "k"}</h3>
        <KeyboardArrowRightIcon sx={{ color: "white" }} />
      </div>
    </div>
  );
};

export default CategoryRow;
