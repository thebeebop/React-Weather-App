/// Remember to make frequent commits to github
import { useState } from "react";
import magnifyGlass from "../images/magnifying-glass.jpeg";

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
        <input
          placeholder="e.g. London, GB"
          required
          value={search}
          onChange={(e) => {
            handleChange(e);
          }}
          style={{
            color: "black",
            border: "0",
            borderRadius: "15px",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "100%",
            marginBottom: "5px",
          }}
        ></input>
      </form>
    </>
  );
}
