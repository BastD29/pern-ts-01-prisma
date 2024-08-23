import { RouteObject } from "react-router-dom";
import Layout from "../components/layouts/Layout/Layout";
import { Home, NotFound, Store } from "./routes";
import { UserProvider } from "../contexts/user";
import Form from "../components/Form/Form2";

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
        children: [
          {
            path: "edit/:id",
            element: <Form />,
          },
        ],
      },
      // {
      //   path: "store/edit/:id", // New route for editing a user
      //   element: (
      //     <UserProvider>
      //       <Form />
      //     </UserProvider>
      //   ),
      // },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export { routes };
