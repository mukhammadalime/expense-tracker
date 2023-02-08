import AddIcon from "@mui/icons-material/Add";

const AddCategory = () => {
  return (
    <div className="add-category grid">
      <div className="add-category__content flex gap-8">
        <div className="grid">
          <AddIcon sx={{ color: "white" }} fontSize="large" />
        </div>
        <h6 className="white">new category</h6>
      </div>
    </div>
  );
};

export default AddCategory;
