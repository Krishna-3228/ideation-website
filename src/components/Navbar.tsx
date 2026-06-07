import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

import societyLogo from "../assets/logo/logo.png";

const institutions = [
  {
    name: "Tutorial",
    path: "/institutions/tutorial",
  },
  {
    name: "Integrated Learning",
    path: "/institutions/integrated-learning",
  },
  {
    name: "Abhyasika",
    path: "/institutions/abhyasika",
  },
  {
    name: "Test Series",
    path: "/institutions/test-series",
  },
  {
    name: "Journal",
    path: "/institutions/journal",
  },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">

        <div className="h-20 flex items-center justify-between">

          {/* Logo */}

          <Link
            to="/"
            className="flex items-center gap-4"
          >
            <img
              src={societyLogo}
              alt="Ideation Welfare Society"
              className="h-16 w-auto"
            />

            <div>
              <h1 className="font-bold text-xl leading-tight">
                Ideation Welfare Society
              </h1>

              <p className="text-sm text-slate-500">
                Shaping Minds Since 2009
              </p>
            </div>
          </Link>

          {/* Navigation */}

          <nav className="hidden md:flex items-center gap-10">

            <a
              href="#about"
              className="hover:text-blue-700 transition-colors"
            >
              About
            </a>

            {/* Institutions Dropdown */}

            <div className="group relative">

              <button
                className="
                  flex
                  items-center
                  gap-1
                  hover:text-blue-700
                  transition-colors
                "
              >
                Institutions

                <ChevronDown
                  size={16}
                  className="
                    transition-transform
                    duration-200
                    group-hover:rotate-180
                  "
                />
              </button>

              {/* Hover Bridge */}

              <div
                className="
                  absolute
                  left-0
                  top-full
                  h-4
                  w-full
                "
              />

              {/* Dropdown */}

              <div
                className="
                  invisible
                  absolute
                  left-0
                  top-full
                  w-64
                  overflow-hidden
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  shadow-xl

                  opacity-0
                  translate-y-2

                  transition-all
                  duration-200

                  group-hover:visible
                  group-hover:opacity-100
                  group-hover:translate-y-0
                "
              >
                {institutions.map((institution) => (
                  <Link
                    key={institution.path}
                    to={institution.path}
                    className="
                      block
                      px-5
                      py-3
                      text-slate-700

                      transition-colors

                      hover:bg-slate-50
                      hover:text-blue-700
                    "
                  >
                    {institution.name}
                  </Link>
                ))}
              </div>

            </div>

            <a
              href="#achievements"
              className="hover:text-blue-700 transition-colors"
            >
              Achievements
            </a>

            <a
              href="#life"
              className="hover:text-blue-700 transition-colors"
            >
              Life at Ideation
            </a>

            <Link
              to="/contact"
              className="hover:text-blue-700 transition-colors"
            >
              Contact
            </Link>

          </nav>

        </div>

      </div>
    </header>
  );
}