import classroomImage from "../../assets/tutorial/classroom-1.jpeg";
import labImage from "../../assets/tutorial/lab.jpeg";
import studyCentreImage from "../../assets/tutorial/study-centre.jpg";

const FacilitiesInfrastructure = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-3xl mx-auto">

                    <p className="text-orange-500 font-semibold uppercase tracking-wider">
                        Facilities
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-blue-950">
                        Facilities & Learning Environment
                    </h2>

                    <p className="mt-4 text-slate-600">
                        Modern classrooms, practical laboratories and
                        dedicated study spaces designed to support
                        academic excellence.
                    </p>

                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-14">

                    {/* Classroom */}

                    <div className="bg-slate-50 rounded-3xl overflow-hidden">

                        <img
                            src={classroomImage}
                            alt="Classroom"
                            className="h-52 w-full object-cover"
                        />

                        <div className="p-6">

                            <h3 className="font-bold text-xl text-blue-950">
                                Interactive Classrooms
                            </h3>

                            <p className="mt-3 text-slate-600">
                                Concept-based teaching in a focused
                                learning environment.
                            </p>

                        </div>

                    </div>

                    {/* Lab */}

                    <div className="bg-slate-50 rounded-3xl overflow-hidden">

                        <img
                            src={labImage}
                            alt="Lab"
                            className="h-52 w-full object-cover"
                        />

                        <div className="p-6">

                            <h3 className="font-bold text-xl text-blue-950">
                                Experimental Lab
                            </h3>

                            <p className="mt-3 text-slate-600">
                                Practical learning through
                                hands-on experiments.
                            </p>

                        </div>

                    </div>

                    {/* Resources */}

                    <div className="bg-slate-50 rounded-3xl overflow-hidden">

                        <img
                            src={studyCentreImage}
                            alt="Learning Centre"
                            className="h-52 w-full object-cover"
                        />

                        <div className="p-6">

                            <h3 className="font-bold text-xl text-blue-950">
                                Learning Resources Centre
                            </h3>

                            <p className="mt-3 text-slate-600">
                                Dedicated study spaces that
                                encourage focused learning.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default FacilitiesInfrastructure;