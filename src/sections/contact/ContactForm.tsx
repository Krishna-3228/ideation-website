import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        email: "",
        institution: "Integrated Learning",
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
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
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

        setIsSending(true);

        try {
            await emailjs.send(
                import.meta.env
                    .VITE_EMAILJS_SERVICE_ID,
                import.meta.env
                    .VITE_EMAILJS_TEMPLATE_ID,
                {
                    fullName: formData.fullName,
                    phone: formData.phone,
                    email: formData.email,
                    institution: formData.institution,
                    message: formData.message,
                },
                import.meta.env
                    .VITE_EMAILJS_PUBLIC_KEY
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
                institution: "Integrated Learning",
                message: "",
            });
        } catch (error) {
            console.error(error);

            setErrorMessage(
                "Failed to send enquiry. Please try again later."
            );
        } finally {
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
                    Fill out the form below and our team
                    will get back to you shortly.
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

                    <div>
                        <label className="block mb-2 font-medium text-slate-900">
                            Message
                        </label>

                        <textarea
                            rows={4}
                            name="message"
                            required
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