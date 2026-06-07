import Navbar from "../components/Navbar";
import Footer from "../sections/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <Navbar />

      <main className="">
        <Outlet />
      </main>

      <Footer />

    </div>
  );
};

export default MainLayout;