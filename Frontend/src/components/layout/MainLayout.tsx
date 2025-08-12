import { Outlet } from "react-router-dom";
import Header from "./Header";
import LoopComponent from "../loopComponent";

function MainLayout() {
  return (
    <>
      <Header />
      <LoopComponent />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default MainLayout;
