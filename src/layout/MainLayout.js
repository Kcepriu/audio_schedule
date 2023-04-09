import { Outlet } from "react-router-dom";

//Component
import MainAppBar from "components/MainAppBar/MainAppBar";

//MUI
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";

// import Spinner from "components/Spinner/Spinner";

const theme = createTheme();

const MainLayout = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MainAppBar />
        <Outlet />
      </Container>
    </ThemeProvider>
  );
};

export default MainLayout;
