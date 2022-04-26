import "./search-box.styles.css";

const SearchBox = ({ placeholder, onChangeHandler }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};

export default SearchBox;
