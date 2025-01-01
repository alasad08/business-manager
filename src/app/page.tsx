import Dashboard from "./layouts/Dashboard/Dashboard";
import Navbar from "./layouts/Navbar/Navbar";
import SideNav from "./layouts/SideNav/SideNav";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <SideNav />
        <Dashboard />
      </div>
    </>
  );
}
