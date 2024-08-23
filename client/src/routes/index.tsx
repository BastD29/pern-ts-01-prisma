import { RouteObject } from "react-router-dom";
import Layout from "../components/layouts/Layout/Layout";
import { Home, NotFound, Store } from "./routes";
import { UserProvider } from "../contexts/user";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "store",
        element: (
          <UserProvider>
            <Store />
          </UserProvider>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { routes };
