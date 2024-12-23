import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 w-full h-screen">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
