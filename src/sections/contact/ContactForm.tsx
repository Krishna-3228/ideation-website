import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        institution: "",
        classLevel: "",
        testSeriesType: "",
        currentSchool: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);

    const [successMessage, setSuccessMessage] =
        useState("");

    const [errorMessage, setErrorMessage] =
        useState("");

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement |
            HTMLTextAreaElement |
            HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        if (name === "institution") {
            setFormData({
                ...formData,
                institution: value,
                classLevel: "",
                testSeriesType: "",
                currentSchool: "",
            });

            return;
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setSuccessMessage("");
        setErrorMessage("");

        if (!/^\d{10}$/.test(formData.phone)) {
            setErrorMessage(
                "Please enter a valid 10-digit phone number."
            );
            return;
        }

        if (!formData.institution) {
            setErrorMessage(
                "Please select an institution."
            );
            return;
        }

        if (
            formData.institution === "Tutorial" &&
            !formData.classLevel
        ) {
            setErrorMessage(
                "Please select a class."
            );
            return;
        }

        if (
            formData.institution === "Integrated Learning" &&
            !formData.classLevel
        ) {
            setErrorMessage(
                "Please select a class."
            );
            return;
        }

        if (
            formData.institution === "Test Series" &&
            !formData.testSeriesType
        ) {
            setErrorMessage(
                "Please select a board."
            );
            return;
        }

        setIsSending(true);

        try {
            const submittedAt = new Date().toLocaleString(
                "en-IN",
                {
                    dateStyle: "medium",
                    timeStyle: "short",
                }
            );

            const enquiryDetailsHtml = `
                <tr>
                <td class="label">Institution</td>
                <td class="value">${formData.institution}</td>
                </tr>

                ${
                formData.classLevel
                    ? `
                <tr>
                <td class="label">Class</td>
                <td class="value">${formData.classLevel}</td>
                </tr>`
                    : ""
                }

                ${
                formData.currentSchool
                    ? `
                <tr>
                <td class="label">Current School</td>
                <td class="value">${formData.currentSchool}</td>
                </tr>`
                    : ""
                }

                ${
                formData.testSeriesType
                    ? `
                <tr>
                <td class="label">Board</td>
                <td class="value">${formData.testSeriesType}</td>
                </tr>`
                    : ""
                }

                <tr>
                <td class="label">Message</td>
                <td class="value">${
                    formData.message || "No message provided"
                }</td>
                </tr>
                `;

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    // Student Details

                    fullName: formData.fullName,
                    email: formData.email,
                    phone: formData.phone,

                    // Enquiry Details

                    enquiryDetailsHtml,

                    // Meta

                    submittedAt,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setSuccessMessage(
                "Your enquiry has been submitted successfully. We will contact you shortly."
            );

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

            setFormData({
                fullName: "",
                phone: "",
                email: "",
                institution: "",
                classLevel: "",
                testSeriesType: "",
                currentSchool: "",
                message: "",
            });
        }
        catch (error) {
            console.error(error);

            setErrorMessage(
                "Failed to send enquiry. Please try again later."
            );
        }
        finally {
            setIsSending(false);
        }
    };

    return (
        <div>
            <div
                className="
                    bg-blue-50
                    border
                    border-blue-100
                    rounded-2xl
                    shadow-lg
                    p-4
                    sm:p-6
                    md:p-8
                "
            >
                <h2 className="text-xl sm:text-3xl font-bold text-slate-950">
                    Send Us Your Enquiry
                </h2>

                <p className="mt-3 text-slate-600">
                    Fill out the form below and our
                    team will get back to you shortly.
                </p>

                {successMessage && (
                    <div
                        className="
                            mt-6
                            rounded-xl
                            border
                            border-green-200
                            bg-green-50
                            p-4
                            text-green-700
                        "
                    >
                        {successMessage}
                    </div>
                )}

                {errorMessage && (
                    <div
                        className="
                            mt-6
                            rounded-xl
                            border
                            border-red-200
                            bg-red-50
                            p-4
                            text-red-700
                        "
                    >
                        {errorMessage}
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="block mb-2 font-medium text-slate-900">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="fullName"
                            required
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="Enter your name"
                            className="
                                w-full
                                rounded-xl
                                border
                                border-slate-300
                                bg-white
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
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            className="
                                w-full
                                rounded-xl
                                border
                                border-slate-300
                                bg-white
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
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter email address"
                            className="
                                w-full
                                rounded-xl
                                border
                                border-slate-300
                                bg-white
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
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                            className="
                                w-full
                                rounded-xl
                                border
                                border-slate-300
                                bg-white
                                px-4
                                py-3
                                focus:outline-none
                                focus:ring-2
                                focus:ring-blue-600
                            "
                        >
                            <option value="">
                                Select Institution
                            </option>

                            <option value="Integrated Learning">
                                Integrated Learning
                            </option>

                            <option value="Tutorial">
                                Tutorial
                            </option>

                            <option value="Test Series">
                                Test Series
                            </option>

                            <option value="Abhyasika">
                                Abhyasika
                            </option>

                            <option value="Journal">
                                Journal
                            </option>
                        </select>
                    </div>

                    {/* Integrated Learning */}

                    {formData.institution ===
                        "Integrated Learning" && (
                            <>
                                <div>
                                    <label className="block mb-2 font-medium text-slate-900">
                                        Class
                                    </label>

                                    <select
                                        name="classLevel"
                                        value={
                                            formData.classLevel
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-slate-300
                                        bg-white
                                        px-4
                                        py-3
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-blue-600
                                    "
                                    >
                                        <option value="">
                                            Select Class
                                        </option>

                                        <option value="5th">
                                            5th
                                        </option>

                                        <option value="6th">
                                            6th
                                        </option>

                                        <option value="7th">
                                            7th
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium text-slate-900">
                                        Current School
                                        (Optional)
                                    </label>

                                    <input
                                        type="text"
                                        name="currentSchool"
                                        value={
                                            formData.currentSchool
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        placeholder="Enter current school"
                                        className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-slate-300
                                        bg-white
                                        px-4
                                        py-3
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-blue-600
                                    "
                                    />
                                </div>
                            </>
                        )}

                    {/* Tutorial */}

                    {formData.institution ===
                        "Tutorial" && (
                            <>
                                <div>
                                    <label className="block mb-2 font-medium text-slate-900">
                                        Class
                                    </label>

                                    <select
                                        name="classLevel"
                                        value={
                                            formData.classLevel
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-slate-300
                                        bg-white
                                        px-4
                                        py-3
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-blue-600
                                    "
                                    >
                                        <option value="">
                                            Select Class
                                        </option>

                                        <option value="8th">
                                            8th
                                        </option>

                                        <option value="9th">
                                            9th
                                        </option>

                                        <option value="10th">
                                            10th
                                        </option>

                                        <option value="11th">
                                            11th
                                        </option>

                                        <option value="12th">
                                            12th
                                        </option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block mb-2 font-medium text-slate-900">
                                        Current School
                                        (Optional)
                                    </label>

                                    <input
                                        type="text"
                                        name="currentSchool"
                                        value={
                                            formData.currentSchool
                                        }
                                        onChange={
                                            handleChange
                                        }
                                        placeholder="Enter current school"
                                        className="
                                        w-full
                                        rounded-xl
                                        border
                                        border-slate-300
                                        bg-white
                                        px-4
                                        py-3
                                        focus:outline-none
                                        focus:ring-2
                                        focus:ring-blue-600
                                    "
                                    />
                                </div>
                            </>
                        )}

                    {/* Test Series */}

                    {formData.institution ===
                        "Test Series" && (
                            <div>
                                <label className="block mb-2 font-medium text-slate-900">
                                    Board
                                </label>

                                <select
                                    name="testSeriesType"
                                    value={
                                        formData.testSeriesType
                                    }
                                    onChange={handleChange}
                                    className="
                                    w-full
                                    rounded-xl
                                    border
                                    border-slate-300
                                    bg-white
                                    px-4
                                    py-3
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-blue-600
                                "
                                >
                                    <option value="">
                                        Select Board
                                    </option>

                                    <option value="CBSE">
                                        CBSE
                                    </option>

                                    <option value="State Board">
                                        State Board
                                    </option>
                                </select>
                            </div>
                        )}

                    <div>
                        <label className="block mb-2 font-medium text-slate-900">
                            Message (Optional)
                        </label>

                        <textarea
                            rows={4}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message..."
                            className="
                                w-full
                                rounded-xl
                                border
                                border-slate-300
                                bg-white
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
                        disabled={isSending}
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
                            disabled:opacity-50
                            disabled:cursor-not-allowed
                        "
                    >
                        {isSending
                            ? "Sending..."
                            : "Submit Enquiry"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;