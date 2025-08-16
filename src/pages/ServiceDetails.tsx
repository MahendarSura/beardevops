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
