import { Urbanist } from 'next/font/google';
import React from 'react';
const urbanist = Urbanist({
    subsets: ["latin"],
    weight: ["300"],
});

const ContactForm = () => {
    return (
        <div className={`py-32 bg-white font-sans ${urbanist.className}`}>
            <h2 className="text-5xl font-medium text-slate-900 mb-8 flex items-center gap-2 ">
                <span className="text-4xl mx-auto">→</span> Let’s level up your  brand, <br />together
            </h2>

            <form className="space-y-5">
                {/* Name Field */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                    <input
                        type="text"
                        placeholder="Your name"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
                    />
                </div>

                {/* Email Field */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="you@company.com"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
                    />
                </div>

                {/* Phone Field */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone number</label>
                    <div className="flex border border-slate-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-slate-400">
                        <select className="bg-transparent px-2 border-r border-slate-300 text-sm focus:outline-none">
                            <option>US</option>
                        </select>
                        <input
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            className="w-full px-3 py-2 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Textarea */}
                <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">How can we help?</label>
                    <textarea
                        placeholder="Tell us a little about the project..."
                        rows="4"
                        className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-400 transition-all"
                    ></textarea>
                </div>

                {/* Services Checkboxes */}
                <div>
                    <p className="text-sm font-medium text-slate-700 mb-3">Services</p>
                    <div className="grid grid-cols-2 gap-y-3">
                        {[
                            "Wordpress", "Shopify",
                            "Custom Code", "Seo",
                            "Landing Page", "Other"
                        ].map((service) => (
                            <label key={service} className="flex items-center gap-3 text-sm text-slate-600 cursor-pointer">
                                <input type="checkbox" className="w-4 h-4 rounded border-slate-300 text-slate-800 focus:ring-slate-500" />
                                {service}
                            </label>
                        ))}
                    </div>
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-[#344054] text-white font-medium py-3 rounded-lg hover:bg-slate-700 transition-colors mt-4"
                >
                    Submit Now                </button>
            </form>
        </div>
    );
};

export default ContactForm;