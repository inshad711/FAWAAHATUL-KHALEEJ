
"use client";
import { CheckCircle } from "lucide-react";

const PrivacyAndPolicy = () => {
    return (
        <main className="min-h-screen montserratCTA bg-[#1a0f0a] text-white pt-16 px-6 md:px-20">
            <div className="max-w-5xl mx-auto shadow-md rounded-lg py-8 md:py-12">
                <div className="text-center pb-10">
                    <h2 className="text-4xl md:text-5xl lg:text-8xl loraParagraph font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-white/80">
                        Privacy Policy
                    </h2>
                </div>
                <p className="text-xl text-[#d6c3a4] mb-10 text-center">
                    Last updated: October 29, 2025
                </p>
                <p className="mb-6 text-gray-300">
                    This Privacy Policy describes Our policies and procedures on the collection, use,
                    and disclosure of Your information when You use the Service and tells You about Your
                    privacy rights and how the law protects You.
                </p>
                <p className="mb-6 text-gray-300">
                    We use Your Personal Data to provide and improve the Service. By using the Service,
                    You agree to the collection and use of information in accordance with this Privacy Policy.
                </p>

                {/* 1. Interpretation and Definitions */}
                <section className="mb-6">
                    <h2 className="text-2xl text-[#d6c3a4] font-semibold mb-4">1. Interpretation and Definitions</h2>

                    <h3 className="text-xl md:pl-7 text-[#d6c3a4] font-semibold mb-2">Interpretation</h3>
                    <p className="mb-4 md:pl-7 text-gray-300">
                        The words with the initial letter capitalized have meanings defined under the
                        following conditions. These definitions shall have the same meaning whether they
                        appear in singular or plural.
                    </p>

                    <h3 className="text-xl md:pl-7  font-semibold mb-2 text-[#d6c3a4]">Definitions</h3>
                    <p className="mb-4 md:pl-7 text-gray-300">
                        For the purposes of this Privacy Policy:
                    </p>
                    <ul className="ml-0 md:pl-7 text-gray-300 space-y-2">
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] mt-1 stroke-current shrink-0" size={20} />
                            <span><strong>Account:</strong> A unique account created for You to access our Service or parts of our Service.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] mt-1 stroke-current shrink-0" size={20} />
                            <span><strong>Affiliate:</strong> An entity that controls, is controlled by, or is under common control with a party.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] mt-1 stroke-current shrink-0" size={20} />
                            <span><strong>Application:</strong> Refers to Fawaahatul Khaleej, the software program provided by the Company.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] mt-1 stroke-current shrink-0" size={20} />
                            <span>
                                <strong>Company:</strong> (referred to as &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;) refers to Fawaahatul Khaleej.
                            </span>

                        </li>
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] mt-1 stroke-current shrink-0" size={20} />
                            <span><strong>Country:</strong> Refers to: [Your Country, e.g., United Arab Emirates].</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] mt-1 stroke-current shrink-0" size={20} />
                            <span><strong>Service:</strong> Refers to the Website <a href="https://fawaahatul-khaleej.vercel.app/" className="text-[#d6c3a4] underline">https://fawaahatul-khaleej.vercel.app/</a>.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] mt-1 stroke-current shrink-0" size={20} />
                            <span><strong>You:</strong> The individual accessing or using the Service.</span>
                        </li>
                    </ul>
                </section>

                {/* 2. Collecting and Using Your Personal Data */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-[#d6c3a4]">2. Collecting and Using Your Personal Data</h2>

                    <h3 className="text-xl md:pl-7 font-semibold mb-2 text-[#d6c3a4]">Types of Data Collected</h3>

                    <h4 className="text-lg md:pl-7 font-semibold mb-1 text-[#d6c3a4]">Personal Data</h4>
                    <p className="mb-2 md:pl-7 text-gray-300">
                        While using Our Service, We may ask You to provide Us with certain personally identifiable
                        information that can be used to contact or identify You, including:
                    </p>
                    <ul className="ml-0 md:pl-7 text-gray-300 space-y-1">
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] stroke-current shrink-0 mt-1" size={20} />
                            <span>Email address</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] stroke-current shrink-0 mt-1" size={20} />
                            <span>First name and last name</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] stroke-current shrink-0 mt-1" size={20} />
                            <span>Phone number</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] stroke-current shrink-0 mt-1" size={20} />
                            <span>Address, State, Province, ZIP/Postal code, City</span>
                        </li>
                    </ul>

                    <h4 className="text-lg md:pl-7 font-semibold mt-4 mb-1 text-[#d6c3a4]">Usage Data</h4>
                    <p className="mb-2 md:pl-7 text-gray-300">
                        We may also collect information on how the Service is accessed and used. This Usage Data
                        may include information such as your computer’s Internet Protocol (IP) address, browser type,
                        browser version, the pages of our Service that you visit, the time and date of your visit,
                        and other diagnostic data.
                    </p>

                    <h3 className="text-xl md:pl-7 font-semibold mt-4 mb-2 text-[#d6c3a4]">Use of Your Personal Data</h3>
                    <p className="mb-2 md:pl-7 text-gray-300">We may use Your Personal Data for the following purposes:</p>
                    <ul className="ml-0 md:pl-7 text-gray-300 space-y-1">
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] stroke-current shrink-0 mt-1" size={20} />
                            <span>To provide and maintain our Service.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] stroke-current shrink-0 mt-1" size={20} />
                            <span>To manage Your Account.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] stroke-current shrink-0 mt-1" size={20} />
                            <span>To contact You by email, telephone calls, SMS, or other forms of electronic communication.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] stroke-current shrink-0 mt-1" size={20} />
                            <span>For business transfers, including mergers or acquisitions.</span>
                        </li>
                    </ul>
                </section>

                {/* 3. Children's Privacy */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-[#d6c3a4]">3. Children&apos;s Privacy</h2>
                    <p className="mb-2 md:pl-7 text-gray-300">
                        Our Service does not address anyone under the age of 13. We do not knowingly collect
                        personally identifiable information from anyone under 13. If You become aware that a
                        child has provided Us with Personal Data, please contact Us. If We become aware that
                        We have collected Personal Data from anyone under 13 without verification of parental
                        consent, We take steps to remove that information from Our servers.
                    </p>
                </section>

                {/* 4. Changes to this Privacy Policy */}
                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4 text-[#d6c3a4]">4. Changes to this Privacy Policy</h2>
                    <p className="mb-2 md:pl-7 text-gray-300">
                        We may update Our Privacy Policy from time to time. We will notify You of any changes
                        by posting the new Privacy Policy on this page. You are advised to review this Privacy
                        Policy periodically for any changes.
                    </p>
                </section>

                {/* 5. Contact Us */}
                <section>
                    <h2 className="text-2xl font-semibold mb-4 text-[#d6c3a4]">5. Contact Us</h2>
                    <p className="md:pl-10 text-gray-300">
                        If you have any questions about this Privacy Policy, You can contact us:
                    </p>
                    <ul className="ml-0 md:pl-10 text-gray-300 mt-2">
                        <li className="flex items-start space-x-2">
                            <CheckCircle className="text-[#d6c3a4] stroke-current shrink-0 mt-1" size={20} />
                            <span>By email: <a href="mailto:suhailnomani77@gmail.com" className="text-[#d6c3a4] underline">suhailnomani77@gmail.com</a></span>
                        </li>
                    </ul>
                </section>
            </div>
        </main>
    )
}

export default PrivacyAndPolicy;
