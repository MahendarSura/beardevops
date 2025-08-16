// 3️⃣ Services.tsx

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
      "24/7 Monitoring Setup",
    ],
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
      "Industry Insights",
    ],
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
      "Multiple Revisions",
    ],
  },
  {
    id: 'linkedin-optimization',
    name: "LinkedIn Profile Optimization
