import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">

      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-xl font-extrabold tracking-tight">
            Ideation Welfare Society
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed max-w-xs">
            Shaping minds through quality education, concept-based learning,
            and integrated academic programs since 2009.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-4">
            Programs
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/institutions/tutorial" className="hover:text-white transition">Ideation Tutorial</Link></li>
            <li><Link to="/institutions/integrated-learning" className="hover:text-white transition">Integrated Learning</Link></li>
            <li><Link to="/institutions/abhyasika" className="hover:text-white transition">Ideation Abhyasika</Link></li>
            <li><Link to="/institutions/test-series" className="hover:text-white transition">Test Series</Link></li>
            <li><a href="https://ijrws.com/index.php/ijrws/en/index" className="hover:text-white transition" target="_blank" rel="noopener noreferrer">International Journal</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-widest text-gray-300 mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Amravati, Maharashtra</li>
            <li>
              <a href="tel:9960126020" className="hover:text-white transition">
                📞 9960126020
              </a>
            </li>
            <li>
              <a href="mailto:ideationtutorial@gmail.com" className="hover:text-white transition">
                ✉ ideationtutorial@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-gray-800 py-5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-500">

          <p>
            © {new Date().getFullYear()} Ideation Welfare Society. All rights reserved.
          </p>

          <div className="text-center md:text-right">
            <p>
              Website Designed & Developed by{" "}
              <span className="text-gray-300 font-medium">
                Keshav Gupta
              </span>
            </p>

            <p>
              Hosted by{" "}
              <span className="text-gray-300 font-medium">
                Sthira Hosting
              </span>
              {" • "}
              <a
                href="tel:+917709804830"
                className="hover:text-white transition"
              >
                +91 7709804830
              </a>
            </p>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
