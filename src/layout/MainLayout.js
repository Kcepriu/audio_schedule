import { Suspense } from "react";
import { Outlet } from "react-router-dom";

// import Spinner from "components/Spinner/Spinner";

const MainLayout = () => {
  return (
    <>
      <p>Header</p>
      <Outlet />
    </>
  );
};

export default MainLayout;
