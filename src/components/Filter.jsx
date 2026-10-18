function Filter({ filter, setFilter }) {
  return (
    <label>
      Шукайте по імені

      <input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
    </label>
  );
}

export default Filter;