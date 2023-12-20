import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import TopNav from "../components/TopNav";

export default function Layout() {
  return (
    <div className="flex flex-col w-full   items-center bg-secondary min-h-screen">
      <TopNav />
      <Nav />
      <main className="w-full min-h-screen pt-8">
        <Outlet />
      </main>
    </div>
  );
}
