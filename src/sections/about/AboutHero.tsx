export default function AboutHeroSection() {
    return (
        <section className="bg-white">
            <div className="mx-auto max-w-6xl px-6 py-10 lg:px-8 lg:py-14">
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                    About Ideation
                </p>

                <div className="max-w-4xl">

                    <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-blue-950 md:text-6xl">
                        Education Is About
                        <span className="block">
                            Learning How To Think.
                        </span>
                    </h1>

                    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
                        For over 15 years, Ideation Welfare Society has focused on
                        concept-based learning, meaningful mentorship and academic
                        excellence to help students build confidence, curiosity and
                        lifelong learning habits.
                    </p>

                    <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
                        We believe education should develop understanding before
                        memorisation, encourage independent thinking and create a
                        strong foundation for future academic and personal success.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">

                        <div
                            className="
                rounded-full
                border
                border-slate-200
                bg-slate-50
                px-4
                py-2
                text-sm
                font-medium
                text-slate-700
              "
                        >
                            Concept-Based Learning
                        </div>

                        <div
                            className="
                rounded-full
                border
                border-slate-200
                bg-slate-50
                px-4
                py-2
                text-sm
                font-medium
                text-slate-700
              "
                        >
                            Academic Excellence
                        </div>

                        <div
                            className="
                rounded-full
                border
                border-slate-200
                bg-slate-50
                px-4
                py-2
                text-sm
                font-medium
                text-slate-700
              "
                        >
                            Student Development
                        </div>

                        <div
                            className="
                rounded-full
                border
                border-slate-200
                bg-slate-50
                px-4
                py-2
                text-sm
                font-medium
                text-slate-700
              "
                        >
                            Meaningful Mentorship
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}