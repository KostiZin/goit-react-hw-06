import css from "./SearchBox.module.css";

const SearchBox = ({ inputValue, onInputChange }) => {
  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={inputValue}
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchBox;
