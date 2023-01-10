import { TextField } from "@mui/material";
import { InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[50],
    },
  },
});

export default function SearchField({ setLocation, setError }) {
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // if (search) {
        handleSubmit(e);
        // }
      }}
      className="search-container"
    >
      <ThemeProvider theme={theme}>
        <TextField
          label="Search"
          placeholder="e.g. london, gb"
          fullWidth
          size="small"
          autoComplete="off"
          value={search}
          onChange={(e) => {
            handleChange(e);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={(e) => {
                    if (search) {
                      handleSubmit(e);
                    }
                  }}
                >
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        ></TextField>
      </ThemeProvider>
    </form>
  );
}
