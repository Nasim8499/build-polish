// @ts-nocheck
import React from "react";
import { useNavigate, useLocation } from "@tanstack/react-router";
import { Navbar, Footer } from "@/VisaApp";

export function useSiteNav() {
  const nav = useNavigate();
  const loc = useLocation();
  const navigate = (path: string) => {
    if (path.startsWith("/country/")) {
      const name = path.replace("/country/", "");
      nav({ to: "/country/$name", params: { name } });
    } else {
      nav({ to: path });
    }
  };
  return { navigate, currentPath: loc.pathname };
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const { navigate, currentPath } = useSiteNav();
  return (
    <div className="min-h-screen bg-white">
      <Navbar currentPath={currentPath} navigate={navigate} />
      <div className="pt-20">{children}</div>
      <Footer navigate={navigate} />
    </div>
  );
}
