import { createBrowserRouter } from "react-router-dom";
import Layout from "../Pages/layouts/Layout";
import NotFound from "../Pages/NotFound";
import Dashboard from "../Pages/Admin/Dashboard";
import Profile from "../Pages/Admin/Profile";
import Admins from "../Pages/Admin/Users/Admins";
import Masters from "../Pages/Admin/Users/Masters";
import Agents from "../Pages/Admin/Users/Agents";
import Users from "../Pages/Admin/Users/Users";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import UserLayout from "../Pages/userLayouts/UserLayout";
import Home from "../Pages/User/Home";
import Maung from "../Pages/User/Maung";
import BodyGoal from "../Pages/User/BodyGoal";
import Match from "../Pages/User/Match";
import BetHistory from "../Pages/User/BetHistory";
import CashTransferHistory from "../Pages/User/CashTransferHistory";
import GoalResult from "../Pages/User/GoalResult";
import CashTransfer from "../Pages/User/CashTransfer";


const router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "maung",
        element: <Maung />,
      },
      {
        path: "bodyGoal",
        element: <BodyGoal />,
      },
      {
        path: "betHistory",
        element: <BetHistory />,
      },
      {
        path: "cashTransfer",
        element: <CashTransfer />,
      },
      {
        path: "cashTransferHistory",
        element: <CashTransferHistory />,
      },
      {
        path: "goalResult",
        element: <GoalResult />,
      },
      {
        path: "match",
        element: <Match />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
