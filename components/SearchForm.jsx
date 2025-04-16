const SearchForm = ({ types, search, setSearch, type, setType }) => {
    return (
      <div className="flex mb-6">
        <select
          className="p-2 mr-4 border rounded"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Select Type</option>
          {types.map((type) => (
            <option key={type.name} value={type.name}>
              {type.name}
            </option>
          ))}
        </select>
        <input
          className="p-2 border rounded"
          type="text"
          placeholder="Search Pokémon"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    );
  };
  
  export default SearchForm;
  