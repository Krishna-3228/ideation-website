import { MapPin, Mail, Phone } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="bg-slate-50 py-12">
      <div className="max-w-5xl mx-auto px-8 lg:px-12">

        <div className="grid lg:grid-cols-[0.75fr_1.25fr] gap-8 items-start">

          {/* LEFT SIDE */}

          <div>

            <p className="text-orange-500 font-semibold uppercase tracking-[0.2em] text-sm">
              Contact Ideation Welfare Society
            </p>

            <h1 className="mt-3 text-4xl md:text-5xl font-bold text-slate-950 leading-tight">
              Let&apos;s Start Your
              <br />
              Academic Journey
            </h1>

            <p className="mt-5 text-slate-600 leading-relaxed">
              Reach out for admissions, academic guidance,
              institution enquiries and programme information.
            </p>

            {/* Contact Information */}

            <div className="mt-10 space-y-8">

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Phone
                    size={20}
                    className="text-blue-600"
                  />

                  <h3 className="text-2xl font-bold text-slate-950">
                    Contact Numbers
                  </h3>
                </div>

                <p className="text-slate-600">
                  +91 9657778471
                </p>

                <p className="text-slate-600">
                  +91 9022443373
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <Mail
                    size={20}
                    className="text-blue-600"
                  />

                  <h3 className="text-2xl font-bold text-slate-950">
                    Email Address
                  </h3>
                </div>

                <p className="text-slate-600">
                  ideation@example.com
                </p>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <MapPin
                    size={20}
                    className="text-blue-600"
                  />

                  <h3 className="text-2xl font-bold text-slate-950">
                    Location
                  </h3>
                </div>

                <p className="text-slate-600 leading-relaxed">
                  Ashok Colony,
                  <br />
                  Morshi Road,
                  <br />
                  Amravati
                </p>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div>

            <div
              className="
                bg-white
                rounded-2xl
                border
                border-slate-200
                shadow-lg
                p-6 md:p-8
              "
            >

              <h2 className="text-3xl font-bold text-slate-950">
                Send Us Your Enquiry
              </h2>

              <p className="mt-3 text-slate-600">
                Fill out the form below and our team
                will get back to you shortly.
              </p>

              <form className="mt-8 space-y-5">

                <div>
                  <label className="block mb-2 font-medium text-slate-900">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      px-4
                      py-3
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-600
                    "
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-900">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      px-4
                      py-3
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-600
                    "
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-900">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter email address"
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      px-4
                      py-3
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-600
                    "
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-900">
                    Institution Interested In
                  </label>

                  <select
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      px-4
                      py-3
                      bg-white
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-600
                    "
                  >
                    <option>Integrated Learning</option>
                    <option>Tutorial</option>
                    <option>Test Series</option>
                    <option>Abhyasika</option>
                    <option>Journal</option>
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-medium text-slate-900">
                    Message
                  </label>

                  <textarea
                    rows={4}
                    placeholder="Write your message..."
                    className="
                      w-full
                      rounded-xl
                      border
                      border-slate-300
                      px-4
                      py-3
                      resize-none
                      focus:outline-none
                      focus:ring-2
                      focus:ring-blue-600
                    "
                  />
                </div>

                <button
                  type="submit"
                  className="
                    w-full
                    rounded-xl
                    bg-blue-950
                    px-6
                    py-3
                    font-semibold
                    text-white
                    transition
                    hover:bg-blue-900
                  "
                >
                  Submit Enquiry
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;