
import React, { useState } from 'react';
import { X, Lock, CreditCard, Smartphone, Building2, AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';
import razorpayLogo from '../assets/razorpay.svg';
import payuLogo from '../assets/payu.svg';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  tierName: string;
  amount: string;
  onPaymentComplete: () => void;
}

type PaymentMethod = 'upi' | 'card' | 'netbanking';

const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  serviceName,
  tierName,
  amount,
  onPaymentComplete,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('upi');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Form states
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        onPaymentComplete();
      }, 2000);
    }, 2000);
  };

  if (!isOpen) return null;

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  const formatExpiry = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .slice(0, 5);
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-8 h-8 text-green-500" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for your payment. You will receive a confirmation email shortly.
          </p>
          <button
            onClick={onClose}
            className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-8 max-w-2xl w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Complete Your Booking</h2>
          <p className="text-gray-600">Secure your service by choosing a convenient payment method.</p>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 rounded-xl p-4 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-gray-900">{serviceName}</h3>
              <p className="text-sm text-gray-600">{tierName}</p>
            </div>
            <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              ₹{amount}
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mb-8">
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setPaymentMethod('upi')}
              className={`flex-1 py-3 px-4 rounded-xl border ${
                paymentMethod === 'upi'
                  ? 'border-pink-500 bg-pink-50'
                  : 'border-gray-200 hover:border-gray-300'
              } transition-all`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Smartphone className="w-5 h-5 text-gray-600" />
                <span className="font-medium">UPI</span>
              </div>
            </button>
            <button
              onClick={() => setPaymentMethod('card')}
              className={`flex-1 py-3 px-4 rounded-xl border ${
                paymentMethod === 'card'
                  ? 'border-pink-500 bg-pink-50'
                  : 'border-gray-200 hover:border-gray-300'
              } transition-all`}
            >
              <div className="flex items-center justify-center space-x-2">
                <CreditCard className="w-5 h-5 text-gray-600" />
                <span className="font-medium">Card</span>
              </div>
            </button>
            <button
              onClick={() => setPaymentMethod('netbanking')}
              className={`flex-1 py-3 px-4 rounded-xl border ${
                paymentMethod === 'netbanking'
                  ? 'border-pink-500 bg-pink-50'
                  : 'border-gray-200 hover:border-gray-300'
              } transition-all`}
            >
              <div className="flex items-center justify-center space-x-2">
                <Building2 className="w-5 h-5 text-gray-600" />
                <span className="font-medium">Net Banking</span>
              </div>
            </button>
          </div>

          {/* Payment Forms */}
          <form onSubmit={handlePayment}>
            {paymentMethod === 'upi' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="upiId" className="block text-sm font-medium text-gray-700 mb-1">
                    UPI ID
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="upiId"
                      value={upiId}
                      onChange={(e) => setUpiId(e.target.value)}
                      placeholder="username@upi"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring focus:ring-pink-200 transition-all"
                      required
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-pink-500 font-medium"
                    >
                      Verify
                    </button>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-6">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Paytm_Logo_%28standalone%29.svg/2560px-Paytm_Logo_%28standalone%29.svg.png" alt="Paytm" className="h-8" />
                  <img src="https://download.logo.wine/logo/Google_Pay/Google_Pay-Logo.wine.png" alt="Google Pay" className="h-8" />
                  <img src="https://download.logo.wine/logo/PhonePe/PhonePe-Logo.wine.png" alt="PhonePe" className="h-8" />
                </div>
              </div>
            )}

            {paymentMethod === 'card' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                    Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring focus:ring-pink-200 transition-all"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                    Cardholder Name
                  </label>
                  <input
                    type="text"
                    id="cardName"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring focus:ring-pink-200 transition-all"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiry"
                      value={expiry}
                      onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                      placeholder="MM/YY"
                      maxLength={5}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring focus:ring-pink-200 transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                      CVV
                      <button
                        type="button"
                        className="ml-1 text-gray-400 hover:text-gray-600"
                        title="3-digit security code on the back of your card"
                      >
                        <AlertCircle className="w-4 h-4 inline" />
                      </button>
                    </label>
                    <input
                      type="password"
                      id="cvv"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      placeholder="123"
                      maxLength={3}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-pink-500 focus:ring focus:ring-pink-200 transition-all"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="saveCard"
                    checked={saveCard}
                    onChange={(e) => setSaveCard(e.target.checked)}
                    className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                  />
                  <label htmlFor="saveCard" className="ml-2 text-sm text-gray-600">
                    Save this card for future transactions
                  </label>
                </div>
              </div>
            )}

            {paymentMethod === 'netbanking' && (
              <div className="text-center py-8">
                <Building2 className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Net Banking is currently unavailable.</p>
                <p className="text-sm text-gray-500">Please try UPI or Card payment.</p>
              </div>
            )}

            {/* Security Badge */}
            <div className="flex items-center justify-center space-x-2 mt-6 mb-8">
              <Lock className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-500">Your payment is 100% secure</span>
            </div>

            {/* Pay Button */}
            <button
              type="submit"
              disabled={isProcessing || paymentMethod === 'netbanking'}
              className="w-full px-6 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>Pay ₹{amount}</>
              )}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-4">
            <img src={razorpayLogo} alt="Razorpay" className="h-6" />
            <img src={payuLogo} alt="PayU" className="h-6" />
          </div>
          <div className="text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-700 mx-2">
              Need Help?
            </a>
            <span className="text-gray-300">|</span>
            <a href="#" className="text-gray-500 hover:text-gray-700 mx-2">
              Refund Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal;
