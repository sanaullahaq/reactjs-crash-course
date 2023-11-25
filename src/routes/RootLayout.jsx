import MainHeader from "../components/MainHeader";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <MainHeader />
      <Outlet /> {/*This is a outlet where the children/nested routes will be injected*/}
    </>
  );
}

export default RootLayout;
