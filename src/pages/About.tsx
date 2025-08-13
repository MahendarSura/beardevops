
import React from "react";
import { Link } from "react-router-dom";
import {
  CheckCircle2,
  ChevronRight,
  Cloud,
  Users,
  Target,
  TrendingUp,
  Briefcase,
  Code2,
  Brain,
  Clock,
  Shield,
  Zap,
  Star,
  MessageSquare,
} from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen w-full bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent)]" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-purple-500/30 mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-pink-500/30 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 rounded-full bg-blue-500/30 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Empowering Your Tech Journey with TeaCode
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-300">
            Your Trusted Partner for DevOps, Career Growth, and Professional
            Optimization.
          </p>

          <Link
            to="/services"
            className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-pink-500/25"
            aria-label="Explore Services"
          >
            Explore Services
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>

          <div className="mt-16 flex justify-center gap-8">
            <Cloud className="animate-pulse w-12 h-12 text-purple-500" />
            <Cloud className="animate-pulse w-12 h-12 text-pink-500 animation-delay-200" />
            <Cloud className="animate-pulse w-12 h-12 text-blue-500 animation-delay-400" />
          </div>
        </div>
      </section>

      {/* About TeaCode */}
      <section className="bg-white/5 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              About{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                TeaCode
              </span>
            </h2>
            <p className="mb-12 text-xl text-gray-300">
              TeaCode is your all-in-one technology and career partner,
              offering specialized DevOps solutions, personalized career
              guidance, resume enhancement, and access to an exclusive tech
              community. Whether you're a business looking for expert DevOps
              strategies or an individual aiming for career excellence, TeaCode
              delivers unmatched services.
            </p>
            <div className="grid gap-6 md:grid-cols-2 text-left">
              {highlights.map((highlight, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <CheckCircle2 className="flex-shrink-0 w-6 h-6 text-green-500" />
                  <p className="text-gray-300">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Explore Our{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ id, icon, name, description, price }) => (
              <article
                key={id}
                className="group rounded-2xl border border-white/10 bg-gradient-to-b from-white/8 to-transparent p-8 transition-all hover:border-pink-500/50 hover:shadow-lg hover:shadow-pink-500/10"
                tabIndex={0}
                aria-labelledby={`${id}-title`}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 transition-transform group-hover:scale-110">
                  {icon}
                </div>
                <h3
                  id={`${id}-title`}
                  className="mb-4 text-2xl font-semibold"
                  tabIndex={-1}
                >
                  {name}
                </h3>
                <p className="mb-6 text-gray-400">{description}</p>
                <div className="mb-6 flex justify-between text-gray-400">
                  <span className="text-sm">Starting from</span>
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-xl font-bold text-transparent">
                    ₹{price}
                  </span>
                </div>
                <Link
                  to={`/services/${id}`}
                  className="inline-flex w-full items-center justify-center rounded-full bg-white/10 px-6 py-3 font-medium text-white transition-all hover:bg-white/20"
                  aria-label={`Learn more about ${name}`}
                >
                  Learn More
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TeaCode */}
      <section className="bg-white/5 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              TeaCode
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon, title, description }, i) => (
              <article
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-pink-500/50"
                tabIndex={0}
                aria-labelledby={`benefit-title-${i}`}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500 to-purple-500">
                  {icon}
                </div>
                <h3
                  id={`benefit-title-${i}`}
                  className="mb-2 text-xl font-semibold"
                  tabIndex={-1}
                >
                  {title}
                </h3>
                <p className="text-gray-400">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            See What Our{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map(({ name, role, text }, i) => (
              <article
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-pink-500/50"
                tabIndex={0}
                aria-labelledby={`testimonial-name-${i}`}
              >
                <header className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-pink-500 to-purple-500">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4
                      id={`testimonial-name-${i}`}
                      className="font-semibold"
                      tabIndex={-1}
                    >
                      {name}
                    </h4>
                    <p className="text-sm text-gray-400">{role}</p>
                  </div>
                </header>
                <p className="mb-4 text-gray-300">{text}</p>
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="h-4 w-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/5 py-20">
        <div className="container mx-auto px-6">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <div className="mx-auto max-w-3xl space-y-6">
            {faqs.map(({ question, answer }, i) => (
              <section
                key={i}
                className="rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-pink-500/50"
                tabIndex={0}
                aria-labelledby={`faq-question-${i}`}
              >
                <h3
                  id={`faq-question-${i}`}
                  className="mb-2 text-lg font-semibold"
                  tabIndex={-1}
                >
                  {question}
                </h3>
                <p className="text-gray-400">{answer}</p>
              </section>
            ))}
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                Tech Journey
              </span>
              ?
            </h2>
            <p className="mb-12 text-xl text-gray-300">
              Join TeaCode today and take the first step towards transforming
              your tech career.
            </p>
            <div className="mx-auto flex flex-col gap-6 sm:flex-row justify-center">
              <Link
                to="/services"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-8 py-4 font-semibold text-white transition-all hover:shadow-lg hover:shadow-pink-500/25"
                aria-label="Explore Services"
              >
                Explore Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-8 py-4 font-semibold text-white transition-all hover:bg-white/20"
                aria-label="Contact Us"
              >
                Contact Us
                <MessageSquare className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

const highlights = [
  "Expert DevOps Services",
  "Personalized Career Guidance",
  "Resume & LinkedIn Optimization",
  "Vibrant Tech Community",
  "Affordable Pricing Plans",
  "24/7 Support",
];

const services = [
  {
    id: "devops-services",
    name: "DevOps Services",
    description:
      "Expert solutions for cloud migration, CI/CD setup, and infrastructure management.",
    price: "2,500",
    icon: <Cloud className="w-6 h-6 text-white" />,
  },
  {
    id: "career-guidance",
    name: "Career Guidance",
    description: "Personalized mentorship to accelerate your professional growth.",
    price: "1,000",
    icon: <Target className="w-6 h-6 text-white" />,
  },
  {
    id: "linkedin-optimization",
    name: "LinkedIn Optimization",
    description: "Stand out with a professionally optimized LinkedIn profile.",
    price: "1,500",
    icon: <TrendingUp className="w-6 h-6 text-white" />,
  },
  {
    id: "resume-optimization",
    name: "Resume Optimization",
    description: "Get noticed with an ATS-friendly, professionally crafted resume.",
    price: "1,000",
    icon: <Briefcase className="w-6 h-6 text-white" />,
  },
  {
    id: "linkedin-banner",
    name: "LinkedIn Banner",
    description: "Custom designed banner to enhance your professional brand.",
    price: "800",
    icon: <Code2 className="w-6 h-6 text-white" />,
  },
  {
    id: "community-access",
    name: "Community Access",
    description: "Join our exclusive community of tech professionals.",
    price: "Free",
    icon: <Users className="w-6 h-6 text-white" />,
  },
];

const benefits = [
  {
    title: "Industry Experts",
    description: "Work with certified professionals who bring years of experience.",
    icon: <Brain className="w-6 h-6 text-white" />,
  },
  {
    title: "Proven Track Record",
    description: "Successfully delivered solutions to startups and Fortune 500 companies.",
    icon: <TrendingUp className="w-6 h-6 text-white" />,
  },
  {
    title: "Tailored Solutions",
    description: "Customized services designed to meet your specific needs.",
    icon: <Target className="w-6 h-6 text-white" />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your technical needs.",
    icon: <Clock className="w-6 h-6 text-white" />,
  },
  {
    title: "Secure & Reliable",
    description: "Enterprise-grade security and reliability in all our services.",
    icon: <Shield className="w-6 h-6 text-white" />,
  },
  {
    title: "Fast Implementation",
    description: "Quick deployment and implementation of solutions.",
    icon: <Zap className="w-6 h-6 text-white" />,
  },
];

const testimonials = [
  {
    name: "John Smith",
    role: "DevOps Engineer",
    text: "TeaCode's DevOps services transformed our deployment pipeline. Their expertise and support are unmatched.",
  },
  {
    name: "Sarah Johnson",
    role: "Software Developer",
    text: "The career guidance program helped me land

