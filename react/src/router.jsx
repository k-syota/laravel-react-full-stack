import { createBrowserRouter } from "react-router-dom"
import Login from "./views/Login";
import NotFound from "./views/NotFound";
import SignUp from "./views/SIgnup";
import Users from "./views/Users";

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/users',
    element: <Users />
  },
  {
    path: '*',
    element: <NotFound />
  }
])


export default router;
