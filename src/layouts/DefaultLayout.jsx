import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function DefaultLayout() {
  return (
    <>
      <div className="wrapper">
        <header>
          <Navbar />
        </header>

        <main>
          <Outlet />
        </main>

        <footer className="text-bg-dark py-4">
          <div className="container"> footer</div>
        </footer>
      </div>
    </>
  );
}
