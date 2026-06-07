import societyLogo from "../assets/logo/logo.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">
          <div className="flex items-center gap-4">
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
          </div>
          <nav className="hidden md:flex gap-10">
            <a href="#about">About</a>
            <a href="#institutions">Institutions</a>
            <a href="#achievements">Achievements</a>
            <a href="#life">Life at Ideation</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}