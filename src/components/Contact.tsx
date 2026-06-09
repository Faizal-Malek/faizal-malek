
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

    const serviceId = 'default_service';
    const templateId = 'template_36joyj9';
    const publicKey = 'sIlTFGn5hT9PybRH_';
    
    if (formRef.current) {
      emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
        .then((result) => {
          toast.success("TRANSMISSION_SUCCESSFUL: Message received.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        })
        .catch((error) => {
          toast.error("ERROR: Transmission failed. Check your uplink.");
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  };

  return (
    <Section id="contact" className="relative z-30 bg-[#050505]/95">
      <SectionTitle subtitle="COMMUNICATION_UPLINK">Contact Me</SectionTitle>

      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <FadeIn direction="right">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-white tracking-tighter uppercase font-mono">{`> INITIALIZE_CHAT`}</h3>
              <p className="text-gray-400 font-light leading-relaxed">
                Ready to collaborate on your next digital venture. Drop a message via the uplink and I'll respond within one business cycle.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: <MapPin />, label: "LOCATION", value: "Pretoria, South Africa" },
                { icon: <Mail />, label: "EMAIL", value: "faizalmalek03@icloud.com", href: "mailto:faizalmalek03@icloud.com" },
                { icon: <Phone />, label: "PHONE", value: "076 020 5904", href: "tel:0760205904" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-6 rounded-xl bg-[#090909]/95 border border-white/10 shadow-[0_18px_50px_rgba(0,0,0,0.45)] group hover:border-emerald-500/50 transition-all duration-300">
                  <div className="h-12 w-12 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                    {React.cloneElement(item.icon as React.ReactElement, { className: "h-5 w-5" })}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-mono tracking-widest text-emerald-500/50 uppercase">{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-white hover:text-emerald-400 transition-colors font-medium">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 rounded-xl bg-[#07110d]/95 border border-emerald-500/20 backdrop-blur-sm shadow-[0_18px_50px_rgba(0,0,0,0.45)] group hover:bg-emerald-500/10 transition-all duration-500">
              <h4 className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-widest mb-3">SYSTEM_STATUS</h4>
              <p className="text-sm text-gray-500 leading-relaxed font-light">
                Actively seeking opportunities in <span className="text-white">Full-Stack Engineering</span> and <span className="text-white">Web Development</span>. Available for remote, hybrid and on site roles.
              </p>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="left">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 p-8 rounded-2xl bg-[#070707]/95 border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500 h-full">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[10px] font-mono tracking-widest text-gray-500 ml-1 uppercase">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="USER_NAME"
                  required
                  className="w-full px-6 py-4 rounded-lg bg-black/70 border border-white/10 focus:outline-none focus:border-emerald-500/50 text-white font-mono text-sm transition-all placeholder:text-gray-700"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-mono tracking-widest text-gray-500 ml-1 uppercase">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="USER_EMAIL"
                  required
                  className="w-full px-6 py-4 rounded-lg bg-black/70 border border-white/10 focus:outline-none focus:border-emerald-500/50 text-white font-mono text-sm transition-all placeholder:text-gray-700"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono tracking-widest text-gray-500 ml-1 uppercase">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="MESSAGE_SUBJECT"
                required
                className="w-full px-6 py-4 rounded-lg bg-black/70 border border-white/10 focus:outline-none focus:border-emerald-500/50 text-white font-mono text-sm transition-all placeholder:text-gray-700"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-mono tracking-widest text-gray-500 ml-1 uppercase">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="TYPE_YOUR_MESSAGE_HERE..."
                required
                rows={6}
                className="w-full px-6 py-4 rounded-lg bg-black/70 border border-white/10 focus:outline-none focus:border-emerald-500/50 text-white font-mono text-sm transition-all placeholder:text-gray-700 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 bg-emerald-600 text-white py-5 rounded-lg font-mono text-xs tracking-[0.3em] uppercase hover:bg-emerald-500 transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] disabled:opacity-50 group flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  TRANSMITTING...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  SEND_MESSAGE
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
