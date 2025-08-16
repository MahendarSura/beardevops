import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Star } from 'lucide-react';
import PaymentModal from '../components/PaymentModal';

// Example service data object, you should replace or import your actual data here
const servicesData = {
  'devops-services': {
    name: "DevOps Services",
    description: "Boost your system's reliability and scalability with expert DevOps solutions.",
    price: "2,500",
    features: [
      "Infrastructure as Code (IaC)",
      "CI/CD Pipeline Setup",
      "Cloud Migration Services",
      "24/7 Monitoring Setup"
    ],
  },
  // Add other services here as needed
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [selectedTier, setSelectedTier] = useState<{ name: string; price: string } | null>(null);

  const service = serviceId ? servicesData[serviceId as keyof typeof servicesData] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <Link to="/services" className="text-pink-500 hover:text-pink-400 transition-colors">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const handleBookNow = (tier: { name: string; price: string }) => {
    setSelectedTier(tier);
    setShowPayment(true);
  };

  const handlePaymentComplete = () => {
    setShowPayment(false);
    navigate('/services');
  };

  return (
    <div className="pt-20 min-h-screen">
      {/* Header */}
      <div className="relative py-20 overflow-hidden">
        <Link to="/services" className="inline-flex items-center text-pink-500 hover:text-pink-400 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Services
        </Link>
        <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
        <p className="text-gray-400 mb-8">{service.description}</p>

        {/* Features List */}
        <ul className="mb-8 space-y-3">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center text-gray-300">
              <CheckCircle2 className="w-5 h-5 mr-2 text-green-500" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Pricing & Book Button */}
        <div className="flex items-center justify-between max-w-sm">
          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
            ₹{service.price}
          </div>
          <button
            onClick={() => handleBookNow({ name: service.name, price: service.price })}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all"
          >
            Book Now
          </button>
        </div>
      </div>

      {/* Payment Modal */}
      {showPayment && selectedTier && (
        <PaymentModal
          serviceName={selectedTier.name}
          price={selectedTier.price}
          onClose={() => setShowPayment(false)}
          onComplete={handlePaymentComplete}
        />
      )}
    </div>
  );
};

export default ServiceDetails;
