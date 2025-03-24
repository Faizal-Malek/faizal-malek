
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
    const serviceId = 'service_r041b6w';
    const templateId = 'template_68psb5o';
    const publicKey = 'sIlTFGn5hT9PybRH_'; // EmailJS public key
    
    if (formRef.current) {
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then((result) => {
          console.log('Email sent successfully:', result.text);
          toast.success("Message sent successfully!");
          
          // Format the WhatsApp message as a backup/additional notification
          const whatsappMessage = `*New Contact Form Submission*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message}`;
          
          // Create WhatsApp URL
          const whatsappUrl = `https://wa.me/27760205904?text=${encodeURIComponent(whatsappMessage)}`;
          
          // Open WhatsApp in a new window
          window.open(whatsappUrl, '_blank');
          
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
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Location</h4>
                  <p className="text-muted-foreground">Erasmia, Pretoria, South Africa</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Email</h4>
                  <a
                    href="mailto:faizalmalek03@icloud.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    faizalmalek03@icloud.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium">Phone</h4>
                  <a
                    href="tel:0760205904"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    076 020 5904
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-lg p-6 border mt-8">
              <h4 className="font-medium mb-2">Open to Opportunities</h4>
              <p className="text-sm text-muted-foreground">
                I'm currently looking for new opportunities as a Java Developer, but I'm open to discussing other roles that match my skills and experience.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-400 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md border border-gray-400 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="subject"
                className="text-sm font-medium"
              >
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-400 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md border border-gray-400 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full flex items-center justify-center border border-gray-400 text-blue-900"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
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
