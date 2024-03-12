import {createBrowserRouter} from "react-router-dom";
import {Auth} from "./components/auth/auth";
import Login from "./components/auth/login";
import Signup from "./components/auth/signup";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  }
])

export default router;