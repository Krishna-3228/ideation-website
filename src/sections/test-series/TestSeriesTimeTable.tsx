import { CalendarDays, Download, ExternalLink } from "lucide-react";

import timetablePdf from "../../assets/test-series/test-series-timetable.pdf";

export default function TestSeriesTimetableSection() {
  return (
    <section className="bg-slate-50 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}

        <div className="mx-auto mb-12 max-w-3xl text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-500">
            Academic Schedule
          </p>

          <h2 className="mb-4 text-3xl md:text-4xl font-bold text-slate-900">
            Test Series Timetable
          </h2>

          <p className="text-lg text-slate-600">
            Access the complete schedule for CBSE, State Board and
            Full Portion Live Tests for the current academic year.
          </p>

        </div>

        {/* Timetable Card */}

        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            shadow-lg
          "
        >

          <div className="grid lg:grid-cols-[1fr_1.4fr]">

            {/* Left */}

            <div
              className="
                bg-gradient-to-br
                from-blue-950
                via-slate-900
                to-blue-900
                p-8
                lg:p-10
                text-white
              "
            >
              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-white/10
                "
              >
                <CalendarDays size={34} />
              </div>

              <h3 className="mt-6 text-3xl font-bold">
                2026–27 Test Schedule
              </h3>

              <p className="mt-4 text-slate-300 leading-relaxed">
                Includes complete timetables for:
              </p>

              <ul className="mt-6 space-y-3 text-slate-200">

                <li>✓ Class 10th CBSE Test Series</li>

                <li>✓ Class 10th State Board Test Series</li>

                <li>✓ Full Portion Live Tests</li>

                <li>✓ Subject-wise Exam Schedule</li>

              </ul>

            </div>

            {/* Right */}

            <div className="p-8 lg:p-10">

              <div
                className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-6
                "
              >
                <h4 className="text-xl font-semibold text-slate-900">
                  Timetable Information
                </h4>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  The timetable contains all Unit Tests, Full Portion
                  Tests and Live Test schedules along with subject-wise
                  portions and examination dates.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">

                  <a
                    href={timetablePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-blue-900
                      px-5
                      py-3
                      font-medium
                      text-white
                      transition
                      hover:bg-blue-800
                    "
                  >
                    <ExternalLink size={18} />
                    View Timetable
                  </a>

                  <a
                    href={timetablePdf}
                    download
                    className="
                      inline-flex
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-slate-300
                      px-5
                      py-3
                      font-medium
                      text-slate-700
                      transition
                      hover:bg-slate-100
                    "
                  >
                    <Download size={18} />
                    Download PDF
                  </a>

                </div>

              </div>

              {/* Highlights */}

              <div className="mt-6 grid gap-4 sm:grid-cols-3">

                <div
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    text-center
                  "
                >
                  <div className="text-2xl font-bold text-blue-900">
                    CBSE
                  </div>

                  <p className="mt-1 text-sm text-slate-600">
                    Complete Schedule
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    text-center
                  "
                >
                  <div className="text-2xl font-bold text-blue-900">
                    State
                  </div>

                  <p className="mt-1 text-sm text-slate-600">
                    Board Schedule
                  </p>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-slate-200
                    bg-white
                    p-5
                    text-center
                  "
                >
                  <div className="text-2xl font-bold text-blue-900">
                    Live
                  </div>

                  <p className="mt-1 text-sm text-slate-600">
                    Full Portion Tests
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}