import React from "react";
import Head from "next/head";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us - Bagel Haven</title>
        <meta
          name="description"
          content="Get in touch with Bagel Haven for questions, feedback or catering inquiries"
        />
      </Head>

      <div className="bg-yellow-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-yellow-800 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you! Reach out with questions, comments, or
              catering inquiries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-700 mb-2">
                      General Inquiries
                    </h3>
                    <p className="flex items-center text-gray-600">
                      <span className="mr-2">📧</span>
                      <a
                        href="mailto:info@bagelhaven.com"
                        className="hover:text-yellow-600"
                      >
                        info@bagelhaven.com
                      </a>
                    </p>
                    <p className="flex items-center text-gray-600 mt-1">
                      <span className="mr-2">📞</span>
                      <a
                        href="tel:+15551234567"
                        className="hover:text-yellow-600"
                      >
                        (555) 123-4567
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-yellow-700 mb-2">
                      Catering
                    </h3>
                    <p className="flex items-center text-gray-600">
                      <span className="mr-2">📧</span>
                      <a
                        href="mailto:catering@bagelhaven.com"
                        className="hover:text-yellow-600"
                      >
                        catering@bagelhaven.com
                      </a>
                    </p>
                    <p className="flex items-center text-gray-600 mt-1">
                      <span className="mr-2">📞</span>
                      <a
                        href="tel:+15559876543"
                        className="hover:text-yellow-600"
                      >
                        (555) 987-6543
                      </a>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-yellow-700 mb-2">
                      Business Hours
                    </h3>
                    <div className="grid grid-cols-2 gap-2 text-gray-600">
                      <div>Monday - Friday:</div>
                      <div>6:00 AM - 4:00 PM</div>
                      <div>Saturday:</div>
                      <div>7:00 AM - 5:00 PM</div>
                      <div>Sunday:</div>
                      <div>8:00 AM - 3:00 PM</div>
                    </div>
                  </div>
                </div>

                {/* Social Media */}
                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-yellow-700 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    {[
                      { name: "Facebook", icon: "facebook" },
                      { name: "Instagram", icon: "instagram" },
                      { name: "Twitter", icon: "twitter" },
                      { name: "Yelp", icon: "yelp" },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href="#"
                        className="bg-yellow-100 hover:bg-yellow-200 text-yellow-800 p-3 rounded-full transition-colors duration-300"
                        aria-label={social.name}
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="24"
                            height="24"
                            fill="none"
                          />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
              <dl>
                {[
                  {
                    question: "Do you offer catering services?",
                    answer:
                      "Yes! We offer catering for events of all sizes. From corporate meetings to weddings, we can create custom bagel platters with all your favorite spreads and toppings. Please contact our catering department 48 hours in advance to place your order.",
                  },
                  {
                    question: "Are your bagels vegan?",
                    answer:
                      "Our plain, sesame, poppy, onion, and garlic bagels are vegan. Our specialty bagels like asiago cheese contain dairy products. Please ask our staff for more details about specific bagels.",
                  },
                  {
                    question: "Do you offer gluten-free options?",
                    answer:
                      "We currently offer gluten-free bagels on Tuesdays and Fridays. Please note that they are prepared in the same kitchen as our regular bagels, so they may not be suitable for those with severe gluten allergies.",
                  },
                  {
                    question: "Can I place an order online?",
                    answer:
                      "Yes! You can place orders through our website for same-day pickup. For large orders, we recommend placing your order at least 24 hours in advance.",
                  },
                ].map((faq, i) => (
                  <div
                    key={i}
                    className="border-b border-gray-200 last:border-b-0"
                  >
                    <dt className="px-6 py-4 flex justify-between items-center cursor-pointer hover:bg-yellow-50">
                      <span className="text-lg font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex-shrink-0">
                        <svg
                          className="h-6 w-6 text-yellow-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </dt>
                    <dd className="px-6 py-4 bg-gray-50">
                      <p className="text-gray-600">{faq.answer}</p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
