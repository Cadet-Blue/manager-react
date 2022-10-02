import { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import PublicLayout from "./layouts/publicLayout";
import DashboardLayout from "./layouts/dashboardLayout";

import SuspenseLoader from "./components/ui/loaders/suspenseLoader";

const Loader = (Component: any) => (props: any) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Auth = Loader(lazy(() => import("./pages/auth/AuthPage")));
const Dashboard = Loader(lazy(() => import("./pages/dashboard/DashboardPage")));

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<DashboardLayout />}>
      <Route path="/" element={<Navigate replace to="dashboard" />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
    <Route path="/auth" element={<PublicLayout />}>
      <Route path="/auth" element={<Auth />} />
    </Route>
  </Routes>
);

export default MainRoutes;
