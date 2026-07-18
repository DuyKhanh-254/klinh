import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { NavLink } from "react-router-dom";
import { profile } from "../data/profile";

const links = [
  { to: "/", label: "Trang chủ" },
  { to: "/assignments", label: "Bài tập" },
  { to: "/summary", label: "Tổng kết" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="navbar shell" aria-label="Điều hướng chính">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)} aria-label="Về Trang chủ">
          <span className="brand-mark">{profile.initials}</span>
          <span className="brand-name">Khánh Linh</span>
        </NavLink>

        <button
          className="menu-button"
          type="button"
          aria-expanded={open}
          aria-controls="main-menu"
          aria-label={open ? "Đóng menu" : "Mở menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X weight="bold" /> : <List weight="bold" />}
        </button>

        <div id="main-menu" className={`nav-links ${open ? "is-open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => (isActive ? "nav-link is-active" : "nav-link")}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
