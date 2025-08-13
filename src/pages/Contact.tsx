
import React, { useState } from 'react';
import { 
  MessageSquare, 
  Globe, 
  Clock, 
  Shield, 
  ChevronDown,
  Send,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  CheckCircle2,
  Mail,
  Video
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ideally, you would add validation & submit to API here
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen w-full bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent)]" aria-hidden="true" />
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-20 right-10 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">
            Let's Build the Future Together
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Whether you need DevOps support, career guidance, or want to join our thriving tech community — we're just a message away.
          </p>
          <div className="flex justify-center gap-8 mt-16" aria-label="Key values">
            <MessageSquare className="w-12 h-12 text-purple-500 animate-pulse" aria-hidden="true" />
            <Globe className="w-12 h-12 text-pink-500 animate-pulse animation-delay-200" aria-hidden="true" />
            <Clock className="w-12 h-12 text-blue-500 animate-pulse animation-delay-400" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20" aria-labelledby="contact-form-heading">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 id="contact-form-heading" className="text-3xl md:text-4xl font-bold mb-4">
                Reach Us Online — <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Fast & Easy</span>
              </h2>
              <p className="text-gray-400">Fill out the form below and we'll get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all text-white"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                    aria-required="true"
                    className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all text-white"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-400 mb-2">
                  Service Inquiry
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all text-white"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="devops">DevOps Services</option>
                  <option value="career">Career Guidance</option>
                  <option value="resume">Resume Optimization</option>
                  <option value="linkedin">LinkedIn Services</option>
                  <option value="general">General Inquiry</option>
                </select>
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  aria-required="true"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 focus:border-pink-500 focus:ring-2 focus:ring-pink-500/20 transition-all text-white resize-y"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all flex items-center justify-center"
                aria-label="Send Message"
              >
                Send Message
                <Send className="w-5 h-5 ml-2" aria-hidden="true" />
              </button>
            </form>

            {/* Success Message */}
            {showSuccess && (
              <div
                className="mt-6 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-500 flex items-center animate-fade-in"
                role="alert"
                aria-live="polite"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" aria-hidden="true" />
                Thank you! Our team will get back to you within 24 hours.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Digital Presence Section */}
      <section className="py-20 bg-white/[0.02]" aria-labelledby="digital-presence-heading">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="digital-presence-heading" className="text-3xl md:text-4xl font-bold mb-4">
              100% Online — <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Serving Clients Worldwide</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              TeaCode is a fully remote-first technology solutions provider, enabling businesses and individuals globally to enhance their tech capabilities and career paths — all from the comfort of your screen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" role="list">
            {digitalFeatures.map((feature, index) => (
              <article
                key={index}
                className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-pink-500/50 transition-all"
                role="listitem"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20" aria-labelledby="social-media-heading">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="social-media-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Stay Connected — <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Join Our Digital Community</span>
            </h2>
            <p className="text-gray-400">Connect with us on social media for the latest updates and tech insights.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto" role="list">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-pink-500/50 transition-all text-center"
                role="listitem"
                aria-label={`Visit our ${social.name} page`}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {social.icon}
                </div>
                <h3 className="font-semibold mb-2">{social.name}</h3>
                <p className="text-sm text-gray-400">{social.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/[0.02]" aria-labelledby="faq-heading">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold mb-4">
              Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Questions</span>
            </h2>
            <p className="text-gray-400">Find quick answers to frequently asked questions.</p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4" role="list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl bg-white/[0.03] border border-white/[0.08] overflow-hidden"
                role="listitem"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/[0.02] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 rounded-xl"
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  aria-expanded={activeAccordion === index}
                  aria-controls={`faq-panel-${index}`}
                  id={`faq-header-${index}`}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      activeAccordion === index ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {activeAccordion === index && (
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-header-${index}`}
                    className="px-6 py-4 border-t border-white/[0.08] text-gray-400"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const digitalFeatures = [
  {
    icon: <Mail className="w-6 h-6 text-white" />,
    title: "24/7 Email Support",
    description: "Get responses to your inquiries within 24 hours, any day of the week."
  },
  {
    icon: <Globe className="w-6 h-6 text-white" />,
    title: "Global Reach",
    description: "Serving clients worldwide with our remote-first approach."
  },
  {
    icon: <Video className="w-6 h-6 text-white" />,
    title: "Virtual Meetings",
    description: "Seamless consultations via Google Meet or Zoom."
  },
  {
    icon: <Shield className="w-6 h-6 text-white" />,
    title: "Secure Payments",
    description: "Safe and encrypted transactions for all services."
  }
];

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6 text-white" />,
    description: "Follow us for tech insights",
    link: "https://linkedin.com"
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-6 h-6 text-white" />,
    description: "Join the discussion",
    link: "https://twitter.com"
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-6 h-6 text-white" />,
    description: "Behind the scenes",
    link: "https://instagram.com"
  },
  {
    name: "GitHub",
    icon: <Github className="w-6 h-6 text-white" />,
    description: "Explore our repositories",
    link: "https://github.com"
  }
];

const faqs = [
  {
    question: "How do I book a service with TeaCode?",
    answer: "Simply fill out our contact form with your requirements, and our team will get back to you within 24 hours to discuss the next steps and customize a solution for you."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including credit/debit cards, UPI, and net banking. All transactions are processed through secure payment gateways."
  },
  {
    question: "Can I request a custom service?",
    answer: "Yes! We understand that every client has unique needs. Contact us with your specific requirements, and we'll create a customized solution for you."
  },
  {
    question: "How do I join TeaCode's online community?",
    answer: "You can join our community by subscribing to our Community Access plan. This gives you access to exclusive resources, webinars, and networking opportunities."
  }
];

export default Contact;

