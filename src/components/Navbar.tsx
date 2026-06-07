import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

import societyLogo from "../assets/logo/logo.png";

const institutions = [
  { name: "Tutorial", path: "/institutions/tutorial" },
  { name: "Integrated Learning", path: "/institutions/integrated-learning" },
  { name: "Abhyasika", path: "/institutions/abhyasika" },
  { name: "Test Series", path: "/institutions/test-series" },
  { name: "Journal", path: "/institutions/journal" },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Achievements", href: "#achievements" },
  { label: "Life at Ideation", href: "#life" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [institutionsOpen, setInstitutionsOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setInstitutionsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="h-16 md:h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={closeMobile}
          >
            <img
              src={societyLogo}
              alt="Ideation Welfare Society"
              className="h-12 md:h-16 w-auto"
            />
            <div>
              <p className="font-bold text-base md:text-xl leading-tight">
                Ideation Welfare Society
              </p>
              <p className="text-xs md:text-sm text-slate-500 hidden sm:block">
                Shaping Minds Since 2009
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">

            <a href="#about" className="text-sm font-medium hover:text-blue-700 transition-colors">
              About
            </a>

            {/* Institutions Dropdown */}
            <div className="group relative">
              <button className="flex items-center gap-1 text-sm font-medium hover:text-blue-700 transition-colors">
                Institutions
                <ChevronDown size={15} className="transition-transform duration-200 group-hover:rotate-180" />
              </button>

              {/* Hover bridge */}
              <div className="absolute left-0 top-full h-3 w-full" />

              {/* Dropdown panel */}
              <div className="invisible absolute left-0 top-[calc(100%+0.5rem)] w-56 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl opacity-0 translate-y-2 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                {institutions.map((inst) => (
                  <Link
                    key={inst.path}
                    to={inst.path}
                    className="block px-5 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-700 transition-colors"
                  >
                    {inst.name}
                  </Link>
                ))}
              </div>
            </div>

            <a href="#achievements" className="text-sm font-medium hover:text-blue-700 transition-colors">
              Achievements
            </a>

            <a href="#life" className="text-sm font-medium hover:text-blue-700 transition-colors">
              Life at Ideation
            </a>

            <Link
              to="/contact"
              className="text-sm font-semibold px-4 py-2 rounded-lg bg-blue-900 text-white hover:bg-blue-800 transition-colors"
            >
              Contact
            </Link>

          </nav>

          {/* Mobile hamburger button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu Panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <nav className="px-4 py-4 space-y-1">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="block px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-slate-50 hover:text-blue-700 transition-colors"
              >
                {link.label}
              </a>
            ))}

            {/* Institutions accordion */}
            <div>
              <button
                onClick={() => setInstitutionsOpen(!institutionsOpen)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-slate-700 font-medium hover:bg-slate-50 transition-colors"
              >
                <span>Institutions</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${institutionsOpen ? "rotate-180" : ""}`}
                />
              </button>

              {institutionsOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-slate-100 pl-3">
                  {institutions.map((inst) => (
                    <Link
                      key={inst.path}
                      to={inst.path}
                      onClick={closeMobile}
                      className="block px-3 py-2.5 rounded-lg text-sm text-slate-600 hover:bg-slate-50 hover:text-blue-700 transition-colors"
                    >
                      {inst.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact CTA */}
            <div className="pt-2">
              <Link
                to="/contact"
                onClick={closeMobile}
                className="block w-full text-center px-4 py-3 rounded-xl bg-blue-900 text-white font-semibold hover:bg-blue-800 transition-colors"
              >
                Contact Us
              </Link>
            </div>

          </nav>
        </div>
      )}

    </header>
  );
}