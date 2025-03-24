
import React, { useState, useRef } from "react";
import Section from "./Section";
import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";
import { MapPin, Mail, Phone, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS service configuration
    const serviceId = 'default_service';
    const templateId = 'template_36joyj9';
    const publicKey = 'sIlTFGn5hT9PybRH_'; // EmailJS public key
    
    if (formRef.current) {
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          toast.success("Message sent successfully!");
          
          // Reset form
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
          });
        })
        .catch((error) => {
          console.error('Error sending email:', error.text);
          toast.error("Failed to send email. Please try again later.");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    } else {
      toast.error("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="">
      <SectionTitle subtitle="GET IN TOUCH">Contact Me</SectionTitle>

      <div className="grid lg:grid-cols-2 gap-2 shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.01),_10px_10px_30px_4px_rgba(210,210,210)] rounded-lg p-[20px]">
        <FadeIn direction="right">
          <div className="space-y-6">
            <h3 className="text-2xl font-medium">Let's Talk</h3>
            <p className="text-muted-foreground">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>

            <div className="space-y-4 mt-8">
              <div className="flex items-start gap-4 group p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shrink-0 text-white transform group-hover:scale-110 transition-all duration-300">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium group-hover:text-primary transition-colors duration-300">Location</h4>
                  <p className="text-muted-foreground">Erasmia, Pretoria, South Africa</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shrink-0 text-white transform group-hover:scale-110 transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium group-hover:text-primary transition-colors duration-300">Email</h4>
                  <a
                    href="mailto:faizalmalek03@icloud.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    faizalmalek03@icloud.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 group p-4 rounded-lg border border-gradient-to-r from-blue-500/20 to-purple-500/20 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shrink-0 text-white transform group-hover:scale-110 transition-all duration-300">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium group-hover:text-primary transition-colors duration-300">Phone</h4>
                  <a
                    href="tel:0760205904"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    076 020 5904
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4 shadow-lg rounded-lg p-8 bg-gradient-to-r from-white to-gray-50/80 border-2 border-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
              <h4 className="font-medium">Open to Opportunities</h4>
              <p className="text-sm text-muted-foreground">
                I'm currently looking for new opportunities as a Java Developer, but I'm open to discussing other roles that match my skills and experience.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 p-8 rounded-xl bg-white/80 shadow-xl border-2 border-gradient-to-r from-blue-500/30 to-purple-500/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-300 h-full">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2 w-full">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-purple-500/50 placeholder-gray-400 text-base"
                />
              </div>
              <div className="space-y-2 w-full">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-purple-500/50 placeholder-gray-400 text-base"
                />
              </div>
            </div>

            <div className="space-y-2 w-full">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-purple-500/50 placeholder-gray-400 text-base"
              />
            </div>

            <div className="space-y-2 w-full">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={8}
                className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 bg-gray-50/50 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all duration-300 hover:border-purple-500/50 placeholder-gray-400 text-base resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-xl inline-flex items-center justify-center rounded-xl px-8 py-4 font-medium transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-blue-500/20 disabled:pointer-events-none disabled:opacity-50 border-2 border-transparent hover:border-white/20 text-base"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin text-white" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-5 w-5 text-white" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </FadeIn>
      </div>
    </Section>
  );
};

export default Contact;
