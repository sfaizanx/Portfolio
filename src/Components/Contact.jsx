import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "sonner";

export const Contact = ({ currentYear }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const { name, email, message } = form.current;

    if (!name.value || !email.value || !message.value) {
      toast.warning("Please fill in all fields.");
      return;
    }

    emailjs
      .sendForm(
        "service_y3222pb",
        "template_su763mz",
        form.current,
        "DIHsSwZsmFDr11gJD"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          form.current.reset();
        },
        () => {
          toast.error("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <section id="contact" className="py-32 px-8 bg-zinc-950 grid-pattern">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Section */}
          <div className="lg:col-span-5 space-y-12">
            <div>
              <h2 className="space-grotesk text-4xl md:text-6xl font-bold text-white mb-8">
                LET'S WORK TOGETHER
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Have a project in mind? I'd love to discuss how we can bring
                your ideas to life with clean code and thoughtful design.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <div className="text-gray-500 text-sm mb-2 tracking-wide">
                  EMAIL
                </div>
                <a
                  href="mailto:sayyedfaizan1777@gmail.com"
                  className="text-white text-lg hover:text-gray-300 transition-colors"
                >
                  sayyedfaizan1777@gmail.com
                </a>
              </div>

              <div>
                <div className="text-gray-500 text-sm mb-2 tracking-wide">
                  LOCATION
                </div>
                <div className="text-white text-lg">Mumbai, India</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-6 project-card p-8"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div>
                  <label className="block text-gray-400 text-sm mb-3 tracking-wide">
                    NAME
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:border-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-gray-400 text-sm mb-3 tracking-wide">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:border-white focus:outline-none transition-colors"
                  />
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-400 text-sm mb-3 tracking-wide">
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  rows={6}
                  maxLength={500}
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:border-white focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-white text-black px-8 py-3 font-medium hover:bg-gray-200 transition-colors cursor-pointer whitespace-nowrap rounded"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};