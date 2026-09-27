function Filter({ value, onChange }) {
  return (
    <label>
      Find contacts(name)
      <input
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}

export default Filter;