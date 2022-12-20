/// Remember to make frequent commits to github

export default function Search({ location, setLocation }) {
  const handleChange = (e) => {
    let value = e.target.value;
    setLocation(value);
  };

  const handleSubmit = () => {
    setLocation(null);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Location:</label>
        <input
          placeholder="e.g. London"
          value={location}
          onChange={handleChange(e)}
        ></input>
        <submit>Search</submit>
      </form>
    </>
  );
}
