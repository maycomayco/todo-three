const FormSearch = ({ inputSearch, onChange }) => {
  return (
    <form className="form-search">
      <input
        type="text"
        name="search"
        placeholder="Search for a task..."
        ref={inputSearch}
        onChange={onChange}
      />
      <button type="button" onClick={() => alert("Clear search")}>
        Clear
      </button>
    </form>
  );
};

export default FormSearch;
