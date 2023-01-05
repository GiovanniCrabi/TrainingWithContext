import { createBrowserRouter } from "react-router-dom";
import { Login } from "../components/Login";
import { ProtectLayout } from "../components/ProtectedLayout";


export const Routers = createBrowserRouter([
  {
    path: '/profile',
    element:
      <ProtectLayout>
        <h1>Profile</h1>
      </ProtectLayout>
  },

  {
    path: '/login',
    element:
      <Login />
  }
])