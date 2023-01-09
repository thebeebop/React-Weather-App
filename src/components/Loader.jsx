import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blue } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: blue[50],
    },
  },
});

export default function CircularLoader() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </ThemeProvider>
  );
}
