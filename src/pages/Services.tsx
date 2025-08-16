
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Star, CheckCircle2, HelpCircle, MessageCircle } from 'lucide-react';

const services = [
  {
    id: 'devops-services',
    name: "DevOps Services",
    description: "Boost your system's reliability and scalability with expert DevOps solutions.",
    price: "2,500",
    features: [
      "Infrastructure as Code (IaC)",
      "CI/CD Pipeline Setup",
      "Cloud Migration Services",
      "24/7 Monitoring Setup"
    ]
  },
  {
    id: 'career-guidance',
    name: "1:1 Career Guidance",
    description: "Receive personalized career advice tailored to your goals and aspirations.",
    price: "1,000",
    features: [
      "Career Path Planning",
      "Interview Preparation",
      "Skill Gap Analysis",
      "Industry Insights"
    ]
  },
  {
    id: 'linkedin-banner',
    name: "LinkedIn Banner Creation",
    description: "Design an eye-catching LinkedIn banner to enhance your personal brand.",
    price: "800",
    features: [
      "Custom Design",
      "Professional Layout",
      "Brand Integration",
      "Multiple Revisions"
    ]
  },
  {
    id: 'linkedin-optimization',
    name: "LinkedIn Profile Optimization",
    description: "Optimize your LinkedIn profile for maximum visibility and impact.",
    price: "1,500",
    features: [
      "Keyword Optimization",
      "Content Enhancement",
      "Profile Structure",
      "Network Growth Strategy"
    ]
  },
  {
    id: 'resume-optimization',
    name: "Resume Optimization",
    description: "Transform your resume to stand out in competitive job markets.",
    price: "1,000",
    features: [
      "ATS-Friendly Format",
      "Content Optimization",
      "Visual Enhancement",
      "Industry-Specific Focus"
    ]
  },
  {
    id: 'community-access',
    name: "Community Access",
    description: "Join our exclusive community of tech professionals and access premium resources.",
    price: "Free",
    features: [
      "Expert Network Access",
      "Resource Library",
      "Weekly Webinars",
      "Peer Learning"
    ]
  }
];

const Services = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-black text-white pt-20">
      {/* Header Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900 opacity-50" />
        <div className="relative container mx-auto px-6">
          <Link
            to="/"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services: <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Designed to Elevate Your Career</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl">
            Explore our tailored solutions and take the next step toward achieving your professional goals.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] hover:border-pink-500/50 transition-all hover:shadow-lg hover:shadow-pink-500/10"
              >
                <div className="absolute top-4 right-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.name}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <div className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-sm text-gray-400">Starting from</div>
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                      ₹{service.price}
                    </div>
                  </div>
                  <button
                    onClick={() => navigate(`/services/${service.id}`)}
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all"
                  >
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white/[0.02]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Questions</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Find answers to common questions about our services and process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-pink-500/50 transition-all"
              >
                <div className="flex items-start mb-4">
                  <HelpCircle className="w-6 h-6 text-pink-500 mr-3 flex-shrink-0" />
                  <h3 className="font-semibold">{faq.question}</h3>
                </div>
                <p className="text-gray-400 text-sm ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Need Help? <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">We're Here</span>
            </h2>
            <p className="text-gray-400 mb-12">
              Our support team is available 24/7 to answer your questions and help you choose the right service.
            </p>
            <button className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const faqs = [
  {
    question: "How long does it take to complete a service?",
    answer: "Service completion times vary. DevOps services typically take 1-2 weeks, while profile optimization services are completed within 48-72 hours."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including UPI, credit/debit cards, and net banking. All transactions are secure and encrypted."
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 100% satisfaction guarantee. If you're not satisfied with our service, we'll provide a full refund within 7 days."
  },
  {
    question: "Can I upgrade my service package?",
    answer: "Absolutely! You can upgrade your service package at any time. Contact our support team for assistance with upgrades."
  }
];

export default Services;
