import ContactForm from "./ContactForm";
import { MapPin, Mail, Phone } from "lucide-react";

const Contact = () => {
  
  return (
    <section className="bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-8 lg:px-12">

        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 items-start">

          {/* LEFT SIDE */}

          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-[0.2em] text-sm">
              Contact Ideation Welfare Society
            </p>

            <h1 className="mt-3 text-2xl sm:text-4xl md:text-5xl font-bold text-slate-950 leading-tight">
              Let&apos;s Start Your
              <br />
              Academic Journey
            </h1>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Reach out for admissions,
              academic guidance,
              institution enquiries and
              programme information.
            </p>

            <div className="mt-8 space-y-4">

              <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm">
                <div className="flex items-start gap-3">

                  <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Phone
                      size={20}
                      className="text-blue-600"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Call Us
                    </h3>

                    <p className="text-sm text-slate-600 mt-1">
                      +91 99601 26020
                    </p>

                    <p className="text-sm text-slate-600">
                      +91 90224 43373
                    </p>
                  </div>

                </div>
              </div>

              <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm">
                <div className="flex items-start gap-3">

                  <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <Mail
                      size={20}
                      className="text-blue-600"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Email
                    </h3>

                    <p className="text-sm text-slate-600 mt-1">
                      ideationtutorial@gmail.com
                    </p>
                  </div>

                </div>
              </div>

              <div className="bg-slate-100 border border-slate-200 rounded-2xl p-4 sm:p-5 shadow-sm">
                <div className="flex items-start gap-3">

                  <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                    <MapPin
                      size={20}
                      className="text-blue-600"
                    />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Visit Us
                    </h3>

                    <p className="text-sm text-slate-600 mt-1">
                      Ashok Colony,
                      <br />
                      Morshi Road,
                      <br />
                      Amravati
                    </p>
                  </div>

                </div>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>
            <ContactForm />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;