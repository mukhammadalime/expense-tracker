import { categoryType } from "../../utils/types";
import AddCategory from "./AddCategory";
import CategoryRow from "./CategoryRow";

const GridLayout = ({ items }: { items: categoryType[] }) => {
  return (
    <div className="flex grid-layout">
      {items.map((item: categoryType) => (
        <CategoryRow
          key={item.categoryName}
          categoryName={item.categoryName}
          amount={item.amount}
          color={item.color}
        />
      ))}
      <AddCategory />
    </div>
  );
};

export default GridLayout;
