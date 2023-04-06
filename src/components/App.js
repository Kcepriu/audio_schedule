import { Routes, Route, Navigate } from "react-router-dom";

// Import Components
import MainLayout from "layout/MainLayout";
import Login from "pages/Login/Login";
import Schedule from "pages/Schedule/Schedule";

// import Routers
import PrivateRoute from "./Routers/PrivateRoute";
import RestrictedRoute from "./Routers/RestrictedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          index
          element={
            <PrivateRoute component={<Schedule />} redirectTo="/login" />
          }
        />

        <Route
          path="/schedule"
          element={
            <PrivateRoute component={<Schedule />} redirectTo="/login" />
          }
        />

        <Route
          path="/login"
          element={
            <RestrictedRoute component=<Login /> redirectTo="schedule" />
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
