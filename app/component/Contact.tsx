

// Contact.tsx

"use client";
import React, { useState, FormEvent } from 'react';
import { CheckCircle, Mail, PhoneCall } from 'lucide-react';

// Reusable CheckListItem Component
interface CheckListItemProps {
    text: string;
}

const CheckListItem: React.FC<CheckListItemProps> = ({ text }) => (
    <div className="flex items-start space-x-3 mb-2">
        <div className="flex-shrink-0 w-6 h-6 rounded-ful flex items-center justify-center mt-0.5">
            <CheckCircle className="w-4 h-4 text-[#d6c3a4]" />
        </div>
        <p className="text-lg text-gray-400">{text}</p>
    </div>
);

// Reusable ContactInfoCard Component
interface ContactInfoCardProps {
    icon: React.ElementType;
    title: string;
    value: string;
    href: string;
}

const ContactInfoCard: React.FC<ContactInfoCardProps> = ({ icon: Icon, title, value, href }) => (
    <div className="p-6 bg-[#f9f4ed]/10 border border-gray-50 rounded-xl shadow-sm hover:shadow-md transition duration-300">
        <div className="flex items-center space-x-4 mb-2">
            <div className="w-6 h-6 text-[#d6c3a4]">
                <Icon className="w-full h-full" />
            </div>
            <p className="text-lg  text-white">{title}</p>
        </div>
        <a href={href} className="text-lg font-medium text-white hover:text-indigo-400 transition duration-150">
            {value}
        </a>
    </div>
);

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        termsAgreed: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            setFormData({
                ...formData,
                [name]: (e.target as HTMLInputElement).checked,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (!formData.termsAgreed) {
            alert('Please agree to the Terms and Conditions.');
            return;
        }
        console.log('Form Submitted:', formData);
        alert('Form submitted successfully! Check the console for data.');
    };

    return (
        <div className='py-20 pt-32 primaryBg'>
            <section className="templateContainer">

                <div className="text-center pb-10">
                    {/* <p className="text-gray-500 mb-2">(Why clients love Agero)</p> */}
                    {/* Adjusted text size for responsiveness: text-6xl for mobile, text-9xl for md and up */}
                    <h2 className="text-6xl md:text-9xl loraParagraph font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-white/80">
                        Contact Us
                    </h2>
                </div>
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left Column */}
                    <div className="flex flex-col space-y-8">

                        <div>
                            <h1 className="text-4xl text-center sm:text-left loraParagraph text-[#d6c3a4] tracking-tight mb-2">
                                Get in Touch
                            </h1>
                            <p className="text-lg text-gray-400 montserratCTA  max-w-lg">
                                Superpower is your financial confidence. Contact our team to get 24/7 support and submit your job application.
                            </p>
                        </div>

                        <div className="mt-2">
                            <CheckListItem text="Book a demo with our team to see Superpower" />
                            <CheckListItem text="Get answers to the most popular questions" />
                            <CheckListItem text="Submit your job application through this form" />
                        </div>

                        <div className="space-y-6 pt-2">
                            <ContactInfoCard
                                icon={Mail}
                                title="Email"
                                value="suhailnomani77@gmail.com"
                                href="mailto:suhailnomani77@gmail.com"
                            />
                            <ContactInfoCard
                                icon={PhoneCall}
                                title="Phone"
                                value="+1 234 567 89 00"
                                href="tel:+12345678900"
                            />
                        </div>
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="lg:mt-0 mt-2">
                        <div className="lg:p-10 bg-[#2c1b12]/30 shadow-xl rounded-2xl">
                            <form onSubmit={handleSubmit} className="space-y-6">

                                {/* Full Name Input */}
                                <label className="block">
                                    <span className="text-gray-300 text-sm font-medium">Full name</span>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-4 py-3 border playfairDisplayHeading border-gray-50 rounded-lg shadow-sm bg-[#f9f4ed]/10 text-white placeholder-gray-400"
                                        required
                                    />
                                </label>

                                {/* Email Address Input */}
                                <label className="block">
                                    <span className="text-gray-300 text-sm font-medium">Email address</span>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-4 py-3 border playfairDisplayHeading border-gray-50 rounded-lg shadow-sm bg-[#f9f4ed]/10 text-white placeholder-gray-400"
                                        required
                                    />
                                </label>

                                {/* Message Textarea */}
                                <label className="block">
                                    <span className="text-gray-300 text-sm font-medium">What’s the issue?</span>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        placeholder="Your message..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="mt-1 block w-full px-4 py-3 border playfairDisplayHeading border-gray-50  rounded-lg shadow-sm bg-[#f9f4ed]/10 text-white placeholder-gray-400 resize-none"
                                        required
                                    />
                                </label>

                                {/* Terms Checkbox */}
                                <div className="flex items-start pt-4">
                                    <input
                                        type="checkbox"
                                        name="termsAgreed"
                                        checked={formData.termsAgreed}
                                        onChange={handleChange}
                                        className="mt-1 h-4 w-4 rounded border-[#8b5e3c] text-[#8b5e3c] focus:ring-[#8b5e3c]"
                                        id="terms-checkbox"
                                    />
                                    <label htmlFor="terms-checkbox" className="ml-3 text-base text-gray-300">
                                        I agree with the <a href="#" className="font-medium text-white hover:text-[#8b5e3c]">Terms and Conditions</a>
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="inline-block w-full px-8 py-3 text-sm ctaBg ctaText rounded-sm montserratCTA transition-colors duration-300 disabled:opacity-50"
                                    disabled={!formData.termsAgreed}
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
