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

const projectName = "beardevops";  // changed to lowercase

const About = () => {
  return (
    <main className="min-h-screen w-full bg-black text-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background blobs and gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(147,51,234,0.1),transparent)]" />
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-purple-500/30 mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-pink-500/30 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 rounded-full bg-blue-500/30 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <h1 className="mb-6 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-4xl font-bold text-transparent md:text-6xl">
            Empowering Your Tech Journey with {projectName}
          </h1>
          <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-300">
            Your Trusted Partner for DevOps, Career Growth, and Professional Optimization.
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

      {/* About Section */}
      <section className="bg-white/5 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 text-3xl font-bold md:text-4xl">
              About{" "}
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                {projectName}
              </span>
            </h2>
            <p className="mb-12 text-xl text-gray-300">
              {projectName} is your all-in-one technology and career partner,
              offering specialized DevOps solutions, personalized career
              guidance, resume enhancement, and access to an exclusive tech
              community. Whether you're a business looking for expert DevOps
              strategies or an individual aiming for career excellence, {projectName}
              delivers unmatched services.
            </p>
            {/* ...rest of the code remains the same */}
          </div>
        </div>
      </section>

      {/* Other sections remain the same but replace all 'TeaCode' with {projectName} */}

    </main>
  );
};

// Remember to replace all other mentions of 'TeaCode' or 'BearDevOps' in the code with {projectName} in lowercase 'beardevops'

export default About;
