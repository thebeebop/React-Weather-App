/// Remember to make frequent commits to github
import { useState } from "react";

export default function Search({ setLocation, setError }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(search);
    setSearch("");
    setError(false);
  };
  return (
    <>
      <form
        className="search-container"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Location:</label>
        <input
          placeholder="e.g. London, GB"
          required
          value={search}
          onChange={(e) => {
            handleChange(e);
          }}
          style={{
            marginRight: "5px",
            marginLeft: "5px",
            color: "black",
            border: "1px white solid",
            borderRadius: "15px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "5px",
            paddingBottom: "5px",
          }}
        ></input>
        <button value="submit">Search</button>
      </form>
    </>
  );
}
