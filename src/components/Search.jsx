/// Remember to make frequent commits to github
import { useState } from "react";

export default function Search({ setLocation }) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    let value = e.target.value;
    setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLocation(search);
    setSearch("");
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Location:</label>
        <input
          placeholder="e.g. London"
          value={search}
          onChange={(e) => {
            handleChange(e);
          }}
        ></input>
        <button value="submit">Search</button>
      </form>
    </>
  );
}
