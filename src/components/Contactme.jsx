import React, { useState } from "react";
import emailjs from "emailjs-com";

export const Contactme = () => {
    const [formData, setFormData] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .send(
                "service_vwdhzne", 
                "template_nkgupxb", 
                {
                    user_email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                },
                "Axy3-dX4gC6-lifIF" 
            )
            .then(
                (result) => {
                    setSuccessMessage("Message sent successfully!");
                    setFormData({ email: "", subject: "", message: "" });
                },
                (error) => {
                    setErrorMessage("Failed to send the message. Please try again.");
                }
            );
    };

    return (
        <section className="text-white">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center">Contact Me</h2>
                <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your email</label>
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="shadow-sm bg-black border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="name@vivek.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="subject" className="block mb-2 text-sm font-medium">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            className="block p-3 w-full text-sm text-gray-900 bg-black rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="Subject"
                            required
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
                        <textarea
                            id="message"
                            rows="6"
                            value={formData.message}
                            onChange={handleInputChange}
                            className="block p-2.5 w-full text-sm text-gray-900 bg-black rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Leave a comment..."
                        />
                    </div>
                    <button
                        type="submit"
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg  sm:w-fit hover:text-md focus:ring-4 focus:outline-none focus:ring-primary-300   dark:focus:ring-primary-800 bg-black"
                    >
                        Send message
                    </button>
                </form>
                {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
                {errorMessage && <p className="text-red-500 mt-4">{errorMessage}</p>}
            </div>
        </section>
    );
};
