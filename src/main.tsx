import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { listen } from "./redux/listener.ts";
import store from "./redux/store.ts";
import RouterAuth from "./routes/auth/index.tsx";
import RouterClient from "./routes/client/index.tsx";
import PageClient from "./pages/client/index.tsx";
import "swiper/css";
import GuestGuard from "./routes/guards/GuestGuard.tsx";
import PageAuth from "./pages/auth/index.tsx";
import PageDashboard from "./pages/dashboard/index.tsx";
import RouterDashboard from "./routes/dashboard/index.tsx";
import AdminGuard from "./routes/guards/AdminGuard.tsx";
import SAlert from "./components/alert/index.tsx";
import DropdownNavbar from "./components/navbar/dropdownNavbar/index.tsx";

listen();

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <PageClient>
        <SAlert />
        <DropdownNavbar />
        <RouterClient />
      </PageClient>
    ),
  },
  {
    path: "/auth/*",
    element: (
      <GuestGuard>
        <PageAuth>
          <SAlert />
          <RouterAuth />
        </PageAuth>
      </GuestGuard>
    ),
  },
  {
    path: "/dashboard/*",
    element: (
      <AdminGuard>
        <PageDashboard>
          <SAlert />
          <RouterDashboard />
        </PageDashboard>
      </AdminGuard>
    ),
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
