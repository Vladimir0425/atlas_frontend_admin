import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Header, Sidebar, Footer } from "../";

export function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpenToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div className="w-screen h-screen flex flex-col">
      <div className="flex grow overflow-y-auto">
        <Sidebar mobileOpen={mobileOpen} handleOpenToggle={handleOpenToggle} />
        <div className="grow flex flex-col w-full overflow-y-auto">
          <Header handleOpenToggle={handleOpenToggle} />
          <div className="grow overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
