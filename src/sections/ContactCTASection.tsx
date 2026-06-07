import { Link } from "react-router-dom";

const ContactCTASection = () => {
  return (
    <section className="py-24 bg-blue-950">
      <div className="max-w-4xl mx-auto px-6 text-center">

        <p className="text-orange-400 font-semibold uppercase tracking-widest text-sm">
          Get in Touch
        </p>

        <h2 className="mt-4 text-4xl font-extrabold text-white leading-tight">
          Ready to Join the{" "}
          <span className="text-orange-400">Ideation</span> Family?
        </h2>

        <p className="mt-6 text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          Admissions are open for the 2026 academic year. Connect with us to
          learn about the right program for your child.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/contact"
            className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-orange-400 transition-all shadow-xl hover:shadow-orange-500/30"
          >
            Contact Us Today
          </Link>
          <a
            href="tel:9657778471"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white hover:text-blue-950 transition-all"
          >
            📞 9657778471
          </a>
        </div>

        <p className="mt-8 text-gray-400 text-sm">
          Amravati, Maharashtra · ideation@example.com
        </p>

      </div>
    </section>
  );
};

export default ContactCTASection;
