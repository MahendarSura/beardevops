import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Star } from 'lucide-react';
import PaymentModal from '../components/PaymentModal';
import { servicesData } from '../data/services';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);
  const [selectedTier, setSelectedTier] = useState<{
    name: string;
    price: string;
  } | null>(null);

  const service = serviceId ? servicesData[serviceId as keyof typeof servicesData] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <Link
            to="/services"
            className="text-pink-500 hover:text-pink-400 transition-colors"
          >
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
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-pink-900 opacity-50" />
        <div className="relative container mx-auto px-6">
          <Link
            to="/services"
            className="inline-flex items-center text-white/80 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-300 max-w-2xl">
                {service.description}
              </p>
            </div>
            <div className="hidden md:block">
              <Star className="w-8 h-8 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tiers */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.tiers.map((tier, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.08] to-transparent border border-white/[0.08] hover:border-pink-500/50 transition-all hover:shadow-lg hover:shadow-pink-500/10"
            >
              <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
              <div className="mb-6">
                <span className="text-sm text-gray-400">Starting from</span>
                <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
                  ₹{tier.price}
                </div>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => handleBookNow(tier)}
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all"
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Payment Modal */}
      {showPayment && selectedTier && (
        <PaymentModal
          isOpen={showPayment}
          onClose={() => setShowPayment(false)}
          serviceName={service.title}
          tierName={selectedTier.name}
          amount={selectedTier.price}
          onPaymentComplete={handlePaymentComplete}
        />
      )}
    </div>
  );
};

export default ServiceDetails;
