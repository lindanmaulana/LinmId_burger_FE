import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import PageAuth from "./Pages/Auth/index.tsx";
import PageDashboard from "./Pages/Dashboard/index.tsx";
import { listen } from "./redux/listener.ts";
import store from "./redux/store.ts";
import RouterAuth from "./routes/auth/index.tsx";
import RouterClient from "./routes/client/index.tsx";
import PageClient from "./Pages/Client/index.tsx";

listen();

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <PageClient>
        <RouterClient />
      </PageClient>
    ),
  },
  {
    path: "/auth/*",
    element: (
      <PageAuth>
        <RouterAuth />
      </PageAuth>
    ),
  },
  {
    path: "/dashboard",
    element: <PageDashboard />,
  },
]);

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </StrictMode>
);
