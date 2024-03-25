import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const Root = () => {
  return (
    <div className="font-manrope">
      <div className="w-10/12 mx-auto min-h-[calc(100vh-288px)]">
        <Navbar />
        <div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
