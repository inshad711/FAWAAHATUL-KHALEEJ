// "use client";

// import { CheckCircle } from "lucide-react";

// const TearmsAndContions = () => {
//     return (
//         <main className="min-h-screen bg-[#1a0f0a] text-white pt-16 px-6 md:px-20">
//             <div className="max-w-5xl mx-auto shadow-md rounded-lg p-8 md:p-12">
//                 <div className="text-center pb-10">

//                     <h2 className="text-4xl md:text-5xl lg:text-8xl loraParagraph font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-white/80">
//                         Terms & Conditions
//                     </h2>
//                 </div>
//                 <p className="text-xl text-[#d6c3a4] mb-10 text-center">
//                     Last updated: October 29, 2025
//                 </p>

//                 <section className="space-y-8">
//                     <p>
//                         Welcome to Fawaahatul Khaleej (“we”, “us”, “our”, “Company”). These
//                         Terms & Conditions (“Terms”) govern your access to and use of our website{" "}
//                         <a
//                             href="https://fawaahatul-khaleej.com"
//                             className="text-blue-400 hover:underline"
//                         >
//                             https://fawaahatul-khaleej.vercel.app/
//                         </a>{" "}
//                         (“Website”) and any related services we may provide.
//                     </p>

//                     <p>
//                         By accessing or using our Website, you agree to be bound by these Terms. If you do not
//                         agree to all of the Terms, please do not use the Website.
//                     </p>

//                     {/* Section 1 */}
//                     <div>
//                         <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">1. Use of the Website</h2>
//                         <ul className="list-disc list-inside md:pl-10 space-y-3">
//                             <li className="flex items-start space-x-2">
//                                 <CheckCircle className="text-[#d6c3a4] mt-1" size={20} />
//                                 <strong>Eligibility:</strong> You must be at least 18 years old (or the legal
//                                 age in your jurisdiction) to use this Website.
//                             </li>
//                             <li className="flex items-start space-x-2">
//                                 <CheckCircle className="text-[#d6c3a4] mt-1" size={20} />
//                                 <strong>License:</strong> We grant you a limited, non-exclusive,
//                                 non-transferable, revocable license to access and use the Website for your personal,
//                                 non-commercial use, subject to these Terms.
//                             </li>
//                             <li className="flex items-start space-x-2">
//                                 <CheckCircle className="text-[#d6c3a4] mt-1" size={20} />
//                                 <strong> Restrictions:</strong> You agree not to:
//                                 <ul className="list-[circle] ml-6 mt-2 space-y-1">
//                                     <li>Use the Website for any unlawful purpose or in violation of these Terms.</li>
//                                     <li>
//                                         Copy, reproduce, modify, create derivative works of, publicly display, or
//                                         exploit any part of the Website except as permitted herein.
//                                     </li>
//                                     <li>Use any automated means (bots, scrapers) to access the Website.</li>
//                                     <li>
//                                         Interfere or attempt to interfere with the proper functioning of the Website.
//                                     </li>
//                                     <li>Reverse-engineer or decompile any software used to provide the Website.</li>
//                                 </ul>
//                             </li>
//                         </ul>
//                     </div>


//                     <div>
//                         <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">2. Intellectual Property</h2>
//                         <p className=" md:pl-7">
//                             The Website and all content, features, and functionality (including but not limited to
//                             text, graphics, logos, images, audio, video, design, software) are owned by or
//                             licensed to Fawaahatul Khaleej and are protected by applicable intellectual property
//                             laws. You may not use our trademarks, service marks, logos, or trade names without our
//                             prior written consent.
//                         </p>
//                     </div>

//                     {/* Section 5 */}
//                     <div>
//                         <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">3. User-Generated Content & Reviews</h2>
//                         <p className=" md:pl-7">
//                             By submitting reviews, comments, or other content to the Website (“User Content”), you
//                             grant us a worldwide, non-exclusive, royalty-free, irrevocable, sublicensable license
//                             to use, reproduce, modify, publish, translate, distribute, display, and perform such
//                             content in any medium. You represent and warrant that any User Content you post is
//                             your own and does not violate any third-party rights.
//                         </p>
//                     </div>

//                     {/* Section 6 */}
//                     <div>
//                         <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">
//                             4. Disclaimers & Limitation of Liability
//                         </h2>
//                         <p className=" md:pl-7">
//                             The Website and our products are provided “as is” and “as available” without warranties
//                             of any kind. In no event shall Fawaahatul Khaleej, its directors, officers, employees,
//                             agents, or affiliates be liable for any indirect, incidental, special, consequential,
//                             or punitive damages arising out of or relating to your use of or inability to use the
//                             Website or products.
//                         </p>
//                     </div>

//                     {/* Section 7 */}
//                     <div>
//                         <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">5. Indemnification</h2>
//                         <p className=" md:pl-7">
//                             You agree to defend, indemnify, and hold harmless Fawaahatul Khaleej and its
//                             affiliates from and against any claims, liabilities, damages, losses, costs, and
//                             expenses arising out of or related to your use of the Website or your violation of
//                             these Terms.
//                         </p>
//                     </div>

//                     {/* Section 8 */}
//                     <div>
//                         <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">6. Privacy</h2>
//                         <p className=" md:pl-7">
//                             Your use of the Website is governed by our{" "}
//                             <a href="/privacy" className="text-blue-400 hover:underline">
//                                 Privacy Policy
//                             </a>
//                             . By agreeing to these Terms, you also consent to the use of your data as described in
//                             the Privacy Policy.
//                         </p>
//                     </div>

//                     {/* Section 9 */}
//                     <div>
//                         <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">7. Links to Other Websites</h2>
//                         <p className=" md:pl-7">
//                             The Website may contain links to third-party websites or services that are not owned
//                             or controlled by us. We are not responsible for their content or privacy practices.
//                         </p>
//                     </div>

//                     {/* Section 10 */}
//                     <div>
//                         <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">8. Termination</h2>
//                         <p className=" md:pl-7">
//                             We may terminate or suspend your access to the Website immediately for any reason,
//                             including if you breach these Terms.
//                         </p>
//                     </div>

//                     {/* Section 11 */}
//                     <div>
//                         <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">
//                             9. Governing Law & Dispute Resolution
//                         </h2>
//                         <p className=" md:pl-7">
//                             These Terms will be governed by the laws of India, and the courts of{" "}
//                             <strong>[insert city or jurisdiction, e.g., Mumbai, Maharashtra]</strong> shall have
//                             exclusive jurisdiction.
//                         </p>
//                     </div>

//                     {/* Section 12 */}
//                     <div>
//                         <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">10. Changes to Terms</h2>
//                         <p className=" md:pl-7">
//                             We reserve the right to modify or replace these Terms at any time. Continued use of
//                             the Website after revisions become effective constitutes your acceptance.
//                         </p>
//                     </div>

//                     {/* Section 13 */}
//                     <div>
//                         <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">11. Contact Us</h2>
//                         <p className=" md:pl-7">
//                             If you have any questions about these Terms, please contact us at:
//                             <br />
//                             <strong>Fawaahatul Khaleej</strong>
//                             <br />
//                             [Emai: suhailnomani77@gmail.com]
//                             <br />
//                             [Insert email address]
//                             <br />
//                             [Insert telephone number]
//                         </p>
//                     </div>
//                 </section>
//             </div>
//         </main>
//     )
// }

// export default TearmsAndContions

"use client";

import { CheckCircle } from "lucide-react";

const TearmsAndContions = () => {
    return (
        <main className="min-h-screen montserratCTA bg-[#1a0f0a] text-white pt-16 px-6 md:px-20">
            <div className="max-w-5xl mx-auto shadow-md rounded-lg py-8 md:py-12">
                <div className="text-center pb-10">
                    <h2 className="text-5xl md:text-6xl lg:text-8xl loraParagraph font-bold text-black/10 bg-clip-text text-transparent bg-gradient-to-t from-transparent to-white/80">
                        Terms & Conditions
                    </h2>
                </div>
                <p className="text-xl text-[#d6c3a4] mb-10 text-center">
                    Last updated: October 29, 2025
                </p>

                <section className="space-y-8">
                    <p>
                        Welcome to Fawaahatul Khaleej (“we”, “us”, “our”, “Company”). These
                        Terms & Conditions (“Terms”) govern your access to and use of our website{" "}
                        <a
                            href="https://fawaahatul-khaleej.com"
                            className="text-[#d6c3a4] hover:underline"
                        >
                            https://fawaahatul-khaleej.com/
                        </a>{" "}
                        (“Website”) and any related services we may provide.
                    </p>

                    <p>
                        By accessing or using our Website, you agree to be bound by these Terms. If you do not
                        agree to all of the Terms, please do not use the Website.
                    </p>

                    {/* Section 1 */}
                    <div>
                        <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">1. Use of the Website</h2>
                        <ul className="list-none md:pl-7 space-y-3">
                            <li className="flex space-x-2">
                                <CheckCircle className="text-[#d6c3a4] mt-1 flex-shrink-0" size={20} />
                                <span><strong>Eligibility:</strong> You must be at least 18 years old (or the legal age in your jurisdiction) to use this Website.</span>
                            </li>
                            <li className="flex  space-x-2">
                                <CheckCircle className="text-[#d6c3a4] mt-1 flex-shrink-0" size={20} />
                                <span><strong>License:</strong> We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Website for your personal, non-commercial use, subject to these Terms.</span>
                            </li>
                            <li className="flex space-x-2">
                                <CheckCircle className="text-[#d6c3a4] mt-1 flex-shrink-0" size={20} />
                                <span>
                                    <strong>Restrictions:</strong> You agree not to:
                                    <ul className="list-none ml-6 mt-2 space-y-1">
                                        <li className="flex  space-x-2">
                                            <CheckCircle className="text-[#d6c3a4] mt-1 stroke-current flex-shrink-0" size={16} />
                                            <span>Use the Website for any unlawful purpose or in violation of these Terms.</span>
                                        </li>
                                        <li className="flex  space-x-2">
                                            <CheckCircle className="text-[#d6c3a4] mt-1 stroke-current flex-shrink-0" size={16} />
                                            <span>Copy, reproduce, modify, create derivative works of, publicly display, or exploit any part of the Website except as permitted herein.</span>
                                        </li>
                                        <li className="flex  space-x-2">
                                            <CheckCircle className="text-[#d6c3a4] mt-1 stroke-current flex-shrink-0" size={16} />
                                            <span>Use any automated means (bots, scrapers) to access the Website.</span>
                                        </li>
                                        <li className="flex  space-x-2">
                                            <CheckCircle className="text-[#d6c3a4] mt-1 stroke-current flex-shrink-0" size={16} />
                                            <span>Interfere or attempt to interfere with the proper functioning of the Website.</span>
                                        </li>
                                        <li className="flex  space-x-2">
                                            <CheckCircle className="text-[#d6c3a4] mt-1 stroke-current flex-shrink-0" size={16} />
                                            <span>Reverse-engineer or decompile any software used to provide the Website.</span>
                                        </li>
                                    </ul>
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">2. Intellectual Property</h2>
                        <p className=" md:pl-7">
                            The Website and all content, features, and functionality (including but not limited to
                            text, graphics, logos, images, audio, video, design, software) are owned by or
                            licensed to Fawaahatul Khaleej and are protected by applicable intellectual property
                            laws. You may not use our trademarks, service marks, logos, or trade names without our
                            prior written consent.
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div>
                        <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">3. User-Generated Content & Reviews</h2>
                        <p className=" md:pl-7">
                            By submitting reviews, comments, or other content to the Website (“User Content”), you
                            grant us a worldwide, non-exclusive, royalty-free, irrevocable, sublicensable license
                            to use, reproduce, modify, publish, translate, distribute, display, and perform such
                            content in any medium. You represent and warrant that any User Content you post is
                            your own and does not violate any third-party rights.
                        </p>
                    </div>

                    {/* Section 6 */}
                    <div>
                        <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">
                            4. Disclaimers & Limitation of Liability
                        </h2>
                        <p className=" md:pl-7">
                            The Website and our products are provided “as is” and “as available” without warranties
                            of any kind. In no event shall Fawaahatul Khaleej, its directors, officers, employees,
                            agents, or affiliates be liable for any indirect, incidental, special, consequential,
                            or punitive damages arising out of or relating to your use of or inability to use the
                            Website or products.
                        </p>
                    </div>

                    {/* Section 7 */}
                    <div>
                        <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">5. Indemnification</h2>
                        <p className=" md:pl-7">
                            You agree to defend, indemnify, and hold harmless Fawaahatul Khaleej and its
                            affiliates from and against any claims, liabilities, damages, losses, costs, and
                            expenses arising out of or related to your use of the Website or your violation of
                            these Terms.
                        </p>
                    </div>

                    {/* Section 8 */}
                    <div>
                        <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">6. Privacy</h2>
                        <p className=" md:pl-7">
                            Your use of the Website is governed by our{" "}
                            <a href="/privacy-policy" className="text-[#d6c3a4] hover:underline">
                                Privacy Policy
                            </a>
                            . By agreeing to these Terms, you also consent to the use of your data as described in
                            the Privacy Policy.
                        </p>
                    </div>

                    {/* Section 9 */}
                    <div>
                        <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">7. Links to Other Websites</h2>
                        <p className=" md:pl-7">
                            The Website may contain links to third-party websites or services that are not owned
                            or controlled by us. We are not responsible for their content or privacy practices.
                        </p>
                    </div>

                    {/* Section 10 */}
                    <div>
                        <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">8. Termination</h2>
                        <p className=" md:pl-7">
                            We may terminate or suspend your access to the Website immediately for any reason,
                            including if you breach these Terms.
                        </p>
                    </div>

                    {/* Section 11 */}
                    <div>
                        <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">
                            9. Governing Law & Dispute Resolution
                        </h2>
                        <p className=" md:pl-7">
                            These Terms will be governed by the laws of India, and the courts of{" "}
                            <strong>[insert city or jurisdiction, e.g., Mumbai, Maharashtra]</strong> shall have
                            exclusive jurisdiction.
                        </p>
                    </div>

                    {/* Section 12 */}
                    <div>
                        <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">10. Changes to Terms</h2>
                        <p className=" md:pl-7">
                            We reserve the right to modify or replace these Terms at any time. Continued use of
                            the Website after revisions become effective constitutes your acceptance.
                        </p>
                    </div>

                    {/* Section 13 */}
                    <div>
                        <h2 className="text-2xl text-[#d6c3a4]  font-semibold mb-4">11. Contact Us</h2>
                        <p className=" md:pl-7">
                            If you have any questions about these Terms, please contact us at:
                            <br />
                            <strong>Fawaahatul Khaleej</strong>
                            <br />
                            [Emai: suhailnomani77@gmail.com]
                            <br />
                            [Insert email address]
                            <br />
                            [Insert telephone number]
                        </p>
                    </div>
                </section>
            </div>
        </main>
    )
}

export default TearmsAndContions;
