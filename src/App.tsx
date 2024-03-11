import {Container, createTheme, CssBaseline, ThemeProvider} from '@mui/material'
import {Auth} from "./components/auth/auth";
import {RouterProvider} from "react-router-dom";
import router from "./routes";

const darkTheme = createTheme({
  palette: {
    mode: 'dark'
  }
})

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Container>
        <RouterProvider router={router}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
